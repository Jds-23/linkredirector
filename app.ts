import * as http from 'http';
import * as fs from 'fs';

interface Redirect {
  path: string;
  url: string;
}

interface Config {
  redirects: Redirect[];
}

const PORT = process.env.PORT || 3000;
const config: Config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

const server = http.createServer((req, res) => {
  const redirect = config.redirects.find(r => r.path === req.url);

  if (redirect) {
    res.writeHead(301, { Location: redirect.url });
    return res.end();
  }

  // Handle other requests
  res.writeHead(404);
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
