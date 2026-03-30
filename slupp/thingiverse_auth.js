"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
function main() {
    dotenv.config();
    const app = (0, express_1.default)();
    const port = 3000;
    // Thingiverse API credentials
    const CLIENT_ID = process.env.CLIENT_ID;
    const CLIENT_SECRET = process.env.CLIENT_SECRET;
    const REDIRECT_URI = 'http://localhost:3000/auth/callback';
    // Step 1: Redirect to Thingiverse for Authorization
    app.get('/auth', (req, res) => {
        const authorizeUrl = `https://www.thingiverse.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
        res.redirect(authorizeUrl);
    });
    // Step 2: Handle OAuth2 Callback
    app.get('/auth/callback', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const code = req.query.code;
        // Step 3: Exchange code for an access token
        const tokenResponse = yield axios_1.default.post('https://www.thingiverse.com/login/oauth/access_token', null, {
            params: {
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                code,
                grant_type: 'authorization_code',
                redirect_uri: REDIRECT_URI,
            },
        });
        const accessToken = tokenResponse.data.split('=')[1].split('&')[0];
        // step 3b: validate token
        const validateResponse = yield axios_1.default.post('https://www.thingiverse.com/login/oauth/tokeninfo', null, {
            params: { access_token: accessToken }
        });
        // Step 4: Use the access token to make authenticated requests to the API
        // https://api.thingiverse.com/users/following
        try {
            const response = yield axios_1.default.get('https://api.thingiverse.com/users/me/following', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const followedUsers = response.data;
            followedUsers.forEach(following => {
                //queue downloads for each of the followed user's objects
            });
            res.json(followedUsers);
        }
        catch (error) {
            res.status(500).send('Error fetching followed users.');
        }
        // Step 5: find all starred objects that do not belong to a followed user.
        // get starred objects
        // for each starred object, check whether the owner is in followedUsers
        // if not, queue download for that object
    }));
    // Start the server
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}
main();
//# sourceMappingURL=thingiverse_auth.js.map