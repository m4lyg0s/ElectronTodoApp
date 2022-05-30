import electron from 'electron';
import path from 'path';

// セキュアな Electron の構成 : 再読
// 参考: https://qiita.com/pochman/items/64b34e9827866664d436
// https://www.electronjs.org/docs/latest/tutorial/security
// https://github.com/doyensec/electronegativity

const createWindow = (): void => {
  const win = new electron.BrowserWindow({
    // ウィンドウのカスタマイズ
    width: 1200,
    height: 600,
    title: 'Electron todoApp tutorial',
    webPreferences: {
      nodeIntegration: false,
      nodeIntegrationInWorker: false,
      contextIsolation: true,
      preload: path.join(__dirname, './core/preLoad.js'),
    },
  });

  // 読み込む index.html。
  win.loadFile(path.join(__dirname, './index.html'));

  // 開発者ツールを起動する
  win.webContents.openDevTools();
};

electron.app.whenReady().then(createWindow);

// すべての ウィンドウ が閉じたときの処理
electron.app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    electron.app.quit();
  }
});

electron.app.on('activate', () => {
  if (electron.BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
