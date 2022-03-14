"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.yarnPublish = void 0;
const vscode_1 = require("vscode");
const utils_1 = require("./utils");
const Messages = require("./messages");
const run_command_1 = require("./run-command");
function yarnPublish(arg) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = 'publish';
        const packageJson = yield (0, utils_1.getPackageJson)(arg);
        if (packageJson === null) {
            return;
        }
        vscode_1.window.showInputBox({
            prompt: 'Optional tag (enter to skip tag)',
            placeHolder: 'latest, 1.0.0, ...'
        })
            .then((value) => {
            if (!value) {
                (0, run_command_1.runCommand)([cmd], packageJson);
                return;
            }
            if (value.includes(' ')) {
                Messages.invalidTagError();
                return;
            }
            (0, run_command_1.runCommand)([cmd, '--tag', value], packageJson);
        });
    });
}
exports.yarnPublish = yarnPublish;
;
//# sourceMappingURL=publish.js.map