import * as net from 'net';

const port: number = process.env.PORT ? Number(process.env.PORT) - 100 : 3000;

process.env.ELECTRON_START_URL = `http://localhost:${port}`;
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true';

const client = new net.Socket();

let startedElectron = false;
const tryConnection = () =>
  client.connect(
    `${port}`,
    () => {
      client.end();
      if (!startedElectron) {
        startedElectron = true;
        const exec = require('child_process').exec;
        exec('npm run electron');
      }
    }
  );

tryConnection();

client.on('error', error => {
  setTimeout(tryConnection, 1000);
});
