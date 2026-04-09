import express from 'express';
import session from 'express-session';
import { authorize } from './auth';
import { myStore, sessionStore } from './sessions';
function main() {

  const app = express();
  const port = 3000;

  app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
  }));
  // Thingiverse API credentials
  authorize(app);

  app.get('/', (req, res) => {
    const sessionData = myStore.get(req.session.id);
    if (!sessionData) {
      res.redirect('/auth');
    }
    else {
      // User is authenticated, show profile
      res.send(`Hello ${sessionData.firstName}!`);
    }
  });

  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

}

main();

