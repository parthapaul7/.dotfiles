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
exports.yarnRawCommand = void 0;
const vscode_1 = require("vscode");
const utils_1 = require("./utils");
const Messages = require("./messages");
const run_command_1 = require("./run-command");
function yarnRawCommand() {
    return __awaiter(this, void 0, void 0, function* () {
        const packageJson = yield (0, utils_1.pickPackageJson)();
        if (!(0, utils_1.packageExists)(packageJson)) {
            Messages.noPackageError();
            return;
        }
        vscode_1.window.showInputBox({
            prompt: 'yarn command',
            placeHolder: 'install lodash@latest, ...'
        })
            .then((value) => {
            if (!value) {
                Messages.noValueError();
                return;
            }
            const args = value.split(' ');
            (0, run_command_1.runCommand)(args, packageJson);
        });
    });
}
exports.yarnRawCommand = yarnRawCommand;
//# sourceMappingURL=raw.js.map