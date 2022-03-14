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
const Fs = require("fs");
const Path = require("path");
const vscode_1 = require("vscode");
const Messages = require("./messages");
const utils_1 = require("./utils");
function default_1() {
    return __awaiter(this, void 0, void 0, function* () {
        const packageJson = yield (0, utils_1.pickPackageJson)();
        if (packageJson === null) {
            Messages.noProjectOpenError();
            return;
        }
        if ((0, utils_1.packageExists)(packageJson)) {
            Messages.alreadyExistsError();
            return;
        }
        const directory = Path.basename(packageJson);
        const options = {
            name: directory,
            version: '1.0.0',
            description: '',
            main: 'index.js',
            scripts: {
                test: 'echo "Error: no test specified" && exit 1'
            },
            author: '',
            license: 'ISC'
        };
        vscode_1.window.showInputBox({
            prompt: 'Package name',
            placeHolder: 'Package name...',
            value: directory
        })
            .then((value) => {
            if (value) {
                options.name = value.toLowerCase();
            }
            return vscode_1.window.showInputBox({
                prompt: 'Version',
                placeHolder: '1.0.0',
                value: '1.0.0'
            });
        })
            .then((value) => {
            if (value) {
                options.version = value.toString();
            }
            return vscode_1.window.showInputBox({
                prompt: 'Description',
                placeHolder: 'Package description'
            });
        })
            .then((value) => {
            if (value) {
                options.description = value.toString();
            }
            return vscode_1.window.showInputBox({
                prompt: 'main (entry point)',
                value: 'index.js'
            });
        })
            .then((value) => {
            if (value) {
                options.main = value.toString();
            }
            return vscode_1.window.showInputBox({
                prompt: 'Test script'
            });
        })
            .then((value) => {
            if (value) {
                options.scripts.test = value.toString();
            }
            return vscode_1.window.showInputBox({
                prompt: 'Author'
            });
        })
            .then((value) => {
            if (value) {
                options.author = value.toString();
            }
            return vscode_1.window.showInputBox({
                prompt: 'License',
                value: 'ISC'
            });
        })
            .then((value) => {
            if (value) {
                options.license = value.toString();
            }
            const content = JSON.stringify(options, null, 4);
            Fs.writeFile(packageJson, content, (err) => {
                if (err) {
                    Messages.cannotWriteError();
                }
                else {
                    Messages.createdInfo();
                    vscode_1.workspace.openTextDocument(packageJson).then((document) => {
                        vscode_1.window.showTextDocument(document);
                    });
                }
            });
        });
    });
}
exports.default = default_1;
//# sourceMappingURL=init.js.map