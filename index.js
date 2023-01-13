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
  };

  const dom = new JSDOM(html);

  const body = dom.window.document.body;

  body.querySelectorAll("div.content-box").forEach(parseApi(output));

  console.log(util.inspect(output, null, 5));

  fs.writeFileSync("spec.json", JSON.stringify(output, null, 4));
}

main();

///users/{$username}
// => ['username']
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
    contentBox.querySelectorAll("ul.api-methods > li").forEach((apiMethod) => {
      const api = apiMethod.querySelector("pre").textContent.trim();
      const verb = api.split(" ")[0].toLowerCase();
      const rawPath = api.split(" ")[1];
      const params = parsePath(rawPath);
      const path = api.split(" ")[1].replaceAll("$", "");

      let apiObj = {};
      apiObj[verb] = {
        summary: apiMethod.querySelector("h3")?.textContent,
        operationId: apiMethod.querySelector("a").id,
        parameters: params,
        responses: {
          200: {
            description: "success",
          },
        },
      };

      spec.paths[path] = apiObj;

      // console.log(contentBox.querySelector("h2").textContent);
      // contentBox.querySelectorAll("h3").forEach((h3Node) => {
      //   console.log(" - " + h3Node.textContent);
      // });
    });
  };
}
