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
exports.yarnRemovePackage = void 0;
const vscode_1 = require("vscode");
const utils_1 = require("./utils");
const Messages = require("./messages");
const run_command_1 = require("./run-command");
function yarnRemovePackage(arg) {
    return __awaiter(this, void 0, void 0, function* () {
        const packageJson = yield (0, utils_1.getPackageJson)(arg);
        if (packageJson === null) {
            return;
        }
        vscode_1.window.showInputBox({
            prompt: 'Package to remove',
            placeHolder: 'lodash, underscore, ...'
        })
            .then((value) => {
            if (!value) {
                Messages.noValueError();
                return;
            }
            const packages = value.split(' ');
            const args = ['remove', ...packages];
            (0, run_command_1.runCommand)(args, packageJson);
        });
    });
}
exports.yarnRemovePackage = yarnRemovePackage;
//# sourceMappingURL=remove.js.map