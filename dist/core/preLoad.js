"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const core_1 = __importDefault(require("./core"));
electron_1.contextBridge.exposeInMainWorld('core', core_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlTG9hZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL3ByZUxvYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx1Q0FBeUM7QUFDekMsa0RBQTBCO0FBRTFCLHdCQUFhLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLGNBQUksQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29udGV4dEJyaWRnZSB9IGZyb20gJ2VsZWN0cm9uJztcclxuaW1wb3J0IGNvcmUgZnJvbSAnLi9jb3JlJztcclxuXHJcbmNvbnRleHRCcmlkZ2UuZXhwb3NlSW5NYWluV29ybGQoJ2NvcmUnLCBjb3JlKTtcclxuIl19