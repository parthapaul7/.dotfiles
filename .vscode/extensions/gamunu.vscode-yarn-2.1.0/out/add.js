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
exports.yarnAddPackageDev = exports.yarnAddPackage = exports.yarnAddPackages = void 0;
const vscode_1 = require("vscode");
const utils_1 = require("./utils");
const Messages = require("./messages");
const run_command_1 = require("./run-command");
function yarnAddPackages(arg) {
    return __awaiter(this, void 0, void 0, function* () {
        const packageJson = yield (0, utils_1.getPackageJson)(arg);
        if (packageJson === null) {
            return;
        }
        (0, run_command_1.runCommand)(['add'], packageJson);
    });
}
exports.yarnAddPackages = yarnAddPackages;
function yarnAddPackage(arg) {
    return _addPackage(false, arg);
}
exports.yarnAddPackage = yarnAddPackage;
function yarnAddPackageDev(arg) {
    return _addPackage(true, arg);
}
exports.yarnAddPackageDev = yarnAddPackageDev;
const _addPackage = function (dev, arg) {
    return __awaiter(this, void 0, void 0, function* () {
        const packageJson = yield (0, utils_1.getPackageJson)(arg);
        if (packageJson === null) {
            return;
        }
        vscode_1.window.showInputBox({
            prompt: 'Package to add',
            placeHolder: 'lodash, underscore, ...'
        })
            .then((value) => {
            if (!value) {
                Messages.noValueError();
                return;
            }
            const packages = value.split(' ');
            const hasSaveOption = packages.find((value) => {
                return value === '-D' ||
                    value === '--dev' ||
                    value === '-O' ||
                    value === '--optional' ||
                    value === '-E' ||
                    value === '--exact';
            });
            const args = ['add', ...packages];
            if (hasSaveOption) {
                (0, run_command_1.runCommand)(args, packageJson);
            }
            else {
                const save = dev ? '--dev' : '';
                (0, run_command_1.runCommand)([...args, save], packageJson);
            }
        });
    });
};
//# sourceMappingURL=add.js.map