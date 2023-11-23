import express from 'express';
import { authorize } from './auth';

function main() {

  const app = express();
  const port = 3000;

  // Thingiverse API credentials
  authorize(app);

  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

}

main();

