const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const util = require("util");

function main() {
  const html = fs.readFileSync("ref.html");

  let output = {
    openapi: "3.0.3",
    info: {
      title: "thingiverse API",
      version: "v0",
    },
    paths: {},
    tags: [],
  };

  const dom = new JSDOM(html);

  const body = dom.window.document.body;

  body.querySelectorAll("div.content-box").forEach(parseApi(output));

  fs.writeFileSync("spec.json", JSON.stringify(output, null, 4));
}

main();

function parsePath(rawPath) {
  return rawPath
    .split("/")
    .filter((chunk) => chunk.includes("$"))
    .map((param) => {
      const name = param.replace("$", "").substring(1, param.length - 2);
      return {
        name: name,
        in: "path",
        required: true,
        schema: {
          type: "string",
        },
      };
    });
}

function parseApi(spec) {
  return (contentBox) => {
    const tag = contentBox.querySelector("h2").textContent;
    spec.tags.push({
      name: tag,
      description: `Operations for ${tag}`,
    });
    contentBox.querySelectorAll("ul.api-methods > li").forEach((apiMethod) => {
      const api = apiMethod.querySelector("pre").textContent.trim();
      const verb = api.split(" ")[0].toLowerCase();
      const rawPath = api.split(" ")[1];
      const params = parsePath(rawPath);
      const path = api.split(" ")[1].replaceAll("$", "");

      let apiObj = {};
      apiObj = {
        tags: [tag],
        summary: apiMethod.querySelector("h3")?.textContent,
        operationId: apiMethod.querySelector("a").id,
        parameters: params,
        responses: {
          200: {
            description: "success",
          },
        },
      };

      if (!spec.paths[path]) {
        spec.paths[path] = {};
      }
      const operation = spec.paths[path];
      operation[verb] = apiObj;
    });

    // console.log(tag);
    // contentBox
    //   .querySelectorAll("ul.api-methods > li > h3")
    //   .forEach((h3Node) => {
    //     console.log(" - " + h3Node.textContent);
    //   });
  };
}
