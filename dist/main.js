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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQWdDO0FBQ2hDLGdEQUF3QjtBQUV4QiwwQkFBMEI7QUFDMUIsMkRBQTJEO0FBQzNELDJEQUEyRDtBQUMzRCxnREFBZ0Q7QUFFaEQsTUFBTSxZQUFZLEdBQUcsR0FBUyxFQUFFO0lBQzlCLE1BQU0sR0FBRyxHQUFHLElBQUksa0JBQVEsQ0FBQyxhQUFhLENBQUM7UUFDckMsZUFBZTtRQUNmLEtBQUssRUFBRSxJQUFJO1FBQ1gsTUFBTSxFQUFFLEdBQUc7UUFDWCxLQUFLLEVBQUUsMkJBQTJCO1FBQ2xDLGNBQWMsRUFBRTtZQUNkLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLHVCQUF1QixFQUFFLEtBQUs7WUFDOUIsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixPQUFPLEVBQUUsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsbUJBQW1CLENBQUM7U0FDbkQ7S0FDRixDQUFDLENBQUM7SUFFSCxtQkFBbUI7SUFDbkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUU3QixjQUFjO0lBQ2QsR0FBRyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUNqQyxDQUFDLENBQUM7QUFFRixrQkFBUSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFNUMsdUJBQXVCO0FBQ3ZCLGtCQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLEVBQUU7SUFDeEMsSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtRQUNqQyxrQkFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNyQjtBQUNILENBQUMsQ0FBQyxDQUFDO0FBRUgsa0JBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUU7SUFDL0IsSUFBSSxrQkFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3ZELFlBQVksRUFBRSxDQUFDO0tBQ2hCO0FBQ0gsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWxlY3Ryb24gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbi8vIOOCu+OCreODpeOCouOBqiBFbGVjdHJvbiDjga7mp4vmiJAgOiDlho3oqq1cbi8vIOWPguiAgzogaHR0cHM6Ly9xaWl0YS5jb20vcG9jaG1hbi9pdGVtcy82NGIzNGU5ODI3ODY2NjY0ZDQzNlxuLy8gaHR0cHM6Ly93d3cuZWxlY3Ryb25qcy5vcmcvZG9jcy9sYXRlc3QvdHV0b3JpYWwvc2VjdXJpdHlcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kb3llbnNlYy9lbGVjdHJvbmVnYXRpdml0eVxuXG5jb25zdCBjcmVhdGVXaW5kb3cgPSAoKTogdm9pZCA9PiB7XG4gIGNvbnN0IHdpbiA9IG5ldyBlbGVjdHJvbi5Ccm93c2VyV2luZG93KHtcbiAgICAvLyDjgqbjgqPjg7Pjg4njgqbjga7jgqvjgrnjgr/jg57jgqTjgrpcbiAgICB3aWR0aDogMTIwMCxcbiAgICBoZWlnaHQ6IDYwMCxcbiAgICB0aXRsZTogJ0VsZWN0cm9uIHRvZG9BcHAgdHV0b3JpYWwnLFxuICAgIHdlYlByZWZlcmVuY2VzOiB7XG4gICAgICBub2RlSW50ZWdyYXRpb246IGZhbHNlLFxuICAgICAgbm9kZUludGVncmF0aW9uSW5Xb3JrZXI6IGZhbHNlLFxuICAgICAgY29udGV4dElzb2xhdGlvbjogdHJ1ZSxcbiAgICAgIHByZWxvYWQ6IHBhdGguam9pbihfX2Rpcm5hbWUsICcuL2NvcmUvcHJlTG9hZC5qcycpLFxuICAgIH0sXG4gIH0pO1xuXG4gIC8vIOiqreOBv+i+vOOCgCBpbmRleC5odG1s44CCXG4gIHdpbi5sb2FkRmlsZSgnLi9pbmRleC5odG1sJyk7XG5cbiAgLy8g6ZaL55m66ICF44OE44O844Or44KS6LW35YuV44GZ44KLXG4gIHdpbi53ZWJDb250ZW50cy5vcGVuRGV2VG9vbHMoKTtcbn07XG5cbmVsZWN0cm9uLmFwcC53aGVuUmVhZHkoKS50aGVuKGNyZWF0ZVdpbmRvdyk7XG5cbi8vIOOBmeOBueOBpuOBriDjgqbjgqPjg7Pjg4njgqYg44GM6ZaJ44GY44Gf44Go44GN44Gu5Yem55CGXG5lbGVjdHJvbi5hcHAub24oJ3dpbmRvdy1hbGwtY2xvc2VkJywgKCkgPT4ge1xuICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSAhPT0gJ2RhcndpbicpIHtcbiAgICBlbGVjdHJvbi5hcHAucXVpdCgpO1xuICB9XG59KTtcblxuZWxlY3Ryb24uYXBwLm9uKCdhY3RpdmF0ZScsICgpID0+IHtcbiAgaWYgKGVsZWN0cm9uLkJyb3dzZXJXaW5kb3cuZ2V0QWxsV2luZG93cygpLmxlbmd0aCA9PT0gMCkge1xuICAgIGNyZWF0ZVdpbmRvdygpO1xuICB9XG59KTtcbiJdfQ==