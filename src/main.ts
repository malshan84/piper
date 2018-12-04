import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';

let mainWindow: Electron.BrowserWindow;

function createWindow() {
  mainWindow = new BrowserWindow();

  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, '/../build/dist/index.html'),
      protocol: 'file:',
      slashes: true
    });
  mainWindow.loadURL(startUrl);
}

app.on('ready', createWindow);

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
