import express from 'express';
import { ArgumentParser } from 'argparse';
import morgan from 'morgan';
import ghostwriter from 'ghostwriter-middleware';

async function main(port) {

  // setup service
  let app = express();

  // setup logging and body limit
  app.use(morgan('combined'));

  // setup ghostwriter
  app.use(ghostwriter({
    token: 'ghostwriter-example',
    version:
      process.env.GIT_COMMIT
        ? process.env.GIT_COMMIT
        : ''+Date.now(),
    urlTest:
      (url) =>
           !url.startsWith('/~')
        &&  url != '/sitemap.xml'
        &&  url != '/favicon.ico'
        &&  url != '/robots.txt',
    gwUrl:
      process.env.GHOSTWRITER_URL
        ? process.env.GHOSTWRITER_URL
        : 'http://localhost:8887',
    appUrl:
      process.env.APPLICATION_URL
        ? process.env.APPLICATION_URL
        : `http://localhost:${port}`,
    fallbackOnError: true,
  }));

  // frontend
  app.use('/~/frontend', express.static(__dirname + '/../frontend'));
  app.all('/sitemap.xml', (req, res) => res.sendFile('sitemap.xml', { root: __dirname + '/../frontend/assets' }));
  app.all('/robots.txt', (req, res) => res.sendFile('robots.txt', { root: __dirname + '/../frontend/assets' }));
  app.all(['/favicon.ico'], (req, res) => res.sendStatus(404));
  app.all('*', (req, res) => res.sendFile('main.html', { root: __dirname + '/../frontend' }));

  // listen
  app.listen(port, '0.0.0.0');
  console.log(`Running on http://localhost:${port}`);
}

let parser = new ArgumentParser({
  version: '0.0.1',
  addHelp: true,
  description: 'Ghostwriter Example'
});

parser.addArgument(
  [ '-p', '--port' ],
  { required: true, help: 'port' }
);

let args = parser.parseArgs();

main(args.port)
  .catch(function(error) {
    console.log('error:', error);
  });
