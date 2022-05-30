"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = __importDefault(require("electron"));
const path_1 = __importDefault(require("path"));
// セキュアな Electron の構成 : 再読
// 参考: https://qiita.com/pochman/items/64b34e9827866664d436
// https://www.electronjs.org/docs/latest/tutorial/security
// https://github.com/doyensec/electronegativity
const createWindow = () => {
    const win = new electron_1.default.BrowserWindow({
        // ウィンドウのカスタマイズ
        width: 1200,
        height: 600,
        title: 'Electron todoApp tutorial',
        webPreferences: {
            nodeIntegration: false,
            nodeIntegrationInWorker: false,
            contextIsolation: true,
            preload: path_1.default.join(__dirname, './core/preLoad.js'),
        },
    });
    // 読み込む index.html。
    win.loadFile(path_1.default.join(__dirname, './index.html'));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQWdDO0FBQ2hDLGdEQUF3QjtBQUV4QiwwQkFBMEI7QUFDMUIsMkRBQTJEO0FBQzNELDJEQUEyRDtBQUMzRCxnREFBZ0Q7QUFFaEQsTUFBTSxZQUFZLEdBQUcsR0FBUyxFQUFFO0lBQzlCLE1BQU0sR0FBRyxHQUFHLElBQUksa0JBQVEsQ0FBQyxhQUFhLENBQUM7UUFDckMsZUFBZTtRQUNmLEtBQUssRUFBRSxJQUFJO1FBQ1gsTUFBTSxFQUFFLEdBQUc7UUFDWCxLQUFLLEVBQUUsMkJBQTJCO1FBQ2xDLGNBQWMsRUFBRTtZQUNkLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLHVCQUF1QixFQUFFLEtBQUs7WUFDOUIsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixPQUFPLEVBQUUsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsbUJBQW1CLENBQUM7U0FDbkQ7S0FDRixDQUFDLENBQUM7SUFFSCxtQkFBbUI7SUFDbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBRW5ELGNBQWM7SUFDZCxHQUFHLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQ2pDLENBQUMsQ0FBQztBQUVGLGtCQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUU1Qyx1QkFBdUI7QUFDdkIsa0JBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsRUFBRTtJQUN4QyxJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO1FBQ2pDLGtCQUFRLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3JCO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFSCxrQkFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRTtJQUMvQixJQUFJLGtCQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDdkQsWUFBWSxFQUFFLENBQUM7S0FDaEI7QUFDSCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlbGVjdHJvbiBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuLy8g44K744Kt44Ol44Ki44GqIEVsZWN0cm9uIOOBruani+aIkCA6IOWGjeiqrVxuLy8g5Y+C6ICDOiBodHRwczovL3FpaXRhLmNvbS9wb2NobWFuL2l0ZW1zLzY0YjM0ZTk4Mjc4NjY2NjRkNDM2XG4vLyBodHRwczovL3d3dy5lbGVjdHJvbmpzLm9yZy9kb2NzL2xhdGVzdC90dXRvcmlhbC9zZWN1cml0eVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2RveWVuc2VjL2VsZWN0cm9uZWdhdGl2aXR5XG5cbmNvbnN0IGNyZWF0ZVdpbmRvdyA9ICgpOiB2b2lkID0+IHtcbiAgY29uc3Qgd2luID0gbmV3IGVsZWN0cm9uLkJyb3dzZXJXaW5kb3coe1xuICAgIC8vIOOCpuOCo+ODs+ODieOCpuOBruOCq+OCueOCv+ODnuOCpOOCulxuICAgIHdpZHRoOiAxMjAwLFxuICAgIGhlaWdodDogNjAwLFxuICAgIHRpdGxlOiAnRWxlY3Ryb24gdG9kb0FwcCB0dXRvcmlhbCcsXG4gICAgd2ViUHJlZmVyZW5jZXM6IHtcbiAgICAgIG5vZGVJbnRlZ3JhdGlvbjogZmFsc2UsXG4gICAgICBub2RlSW50ZWdyYXRpb25JbldvcmtlcjogZmFsc2UsXG4gICAgICBjb250ZXh0SXNvbGF0aW9uOiB0cnVlLFxuICAgICAgcHJlbG9hZDogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vY29yZS9wcmVMb2FkLmpzJyksXG4gICAgfSxcbiAgfSk7XG5cbiAgLy8g6Kqt44G/6L6844KAIGluZGV4Lmh0bWzjgIJcbiAgd2luLmxvYWRGaWxlKHBhdGguam9pbihfX2Rpcm5hbWUsICcuL2luZGV4Lmh0bWwnKSk7XG5cbiAgLy8g6ZaL55m66ICF44OE44O844Or44KS6LW35YuV44GZ44KLXG4gIHdpbi53ZWJDb250ZW50cy5vcGVuRGV2VG9vbHMoKTtcbn07XG5cbmVsZWN0cm9uLmFwcC53aGVuUmVhZHkoKS50aGVuKGNyZWF0ZVdpbmRvdyk7XG5cbi8vIOOBmeOBueOBpuOBriDjgqbjgqPjg7Pjg4njgqYg44GM6ZaJ44GY44Gf44Go44GN44Gu5Yem55CGXG5lbGVjdHJvbi5hcHAub24oJ3dpbmRvdy1hbGwtY2xvc2VkJywgKCkgPT4ge1xuICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSAhPT0gJ2RhcndpbicpIHtcbiAgICBlbGVjdHJvbi5hcHAucXVpdCgpO1xuICB9XG59KTtcblxuZWxlY3Ryb24uYXBwLm9uKCdhY3RpdmF0ZScsICgpID0+IHtcbiAgaWYgKGVsZWN0cm9uLkJyb3dzZXJXaW5kb3cuZ2V0QWxsV2luZG93cygpLmxlbmd0aCA9PT0gMCkge1xuICAgIGNyZWF0ZVdpbmRvdygpO1xuICB9XG59KTtcbiJdfQ==