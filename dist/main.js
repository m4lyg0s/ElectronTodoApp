"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = __importDefault(require("electron"));
// セキュアな Electron の構成 : 再読
// 参考: https://qiita.com/pochman/items/64b34e9827866664d436
const createWindow = () => {
    const win = new electron_1.default.BrowserWindow({
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
electron_1.default.app.whenReady().then(createWindow);
// すべての ウィンドウ が閉じたときの処理
electron_1.default.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        electron_1.default.app.quit();
    }
});
electron_1.default.app.on('activate', () => {
    if (electron_1.default.BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
