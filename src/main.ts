import electron from 'electron';
import path from 'path';

// セキュアな Electron の構成 : 再読
// 参考: https://qiita.com/pochman/items/64b34e9827866664d436

const createWindow = (): void => {
  const win = new electron.BrowserWindow({
    // ウィンドウのカスタマイズ
    width: 1200,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      nodeIntegrationInWorker: false,
      contextIsolation: true,
    },
  });

  // 読み込む index.html。
  win.loadFile('./index.html');

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
