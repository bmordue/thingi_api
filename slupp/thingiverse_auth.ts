import axios from 'axios';
import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
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
app.get('/auth/callback', async (req, res) => {
  const code = req.query.code as string;

  // Step 3: Exchange code for an access token
  const tokenResponse = await axios.post('https://www.thingiverse.com/login/oauth/access_token', null, {
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
  const validateResponse = await axios.post('https://www.thingiverse.com/login/oauth/tokeninfo', null, {
    params: { access_token: accessToken }
  });

  // Step 4: Use the access token to make authenticated requests to the API
  // https://api.thingiverse.com/users/following
  try {
    const response = await axios.get('https://api.thingiverse.com/users/me/following', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const followedUsers = response.data;
    res.json(followedUsers);
  } catch (error) {
    res.status(500).send('Error fetching followed users.');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
