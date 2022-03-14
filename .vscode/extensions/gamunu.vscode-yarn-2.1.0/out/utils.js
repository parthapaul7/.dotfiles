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
exports.dontHideOutputOnSuccess = exports.getYarnBin = exports.useTerminal = exports.getPackageJson = exports.packageExists = exports.pickPackageJson = void 0;
const Fs = require("fs");
const Path = require("path");
const Messages = require("./messages");
const vscode_1 = require("vscode");
function pickPackageJson() {
    return __awaiter(this, void 0, void 0, function* () {
        // if active text editor is a package.json turn the path for it
        const editor = vscode_1.window.activeTextEditor;
        if (editor && editor.document.fileName.match("package.json")) {
            return editor.document.fileName;
        }
        const workspaceFolders = vscode_1.workspace.workspaceFolders;
        if (workspaceFolders !== undefined) {
            // find if we have more than one workspace / multi root
            const nodeWorkspaces = [];
            workspaceFolders.forEach(workspace => {
                // get package json path for workspace folder
                const conf = vscode_1.workspace.getConfiguration('yarn', workspace)['packageJson'];
                // look for root directory for package json
                const packageJson = Path.join(workspace.uri.fsPath, conf);
                if (Fs.existsSync(packageJson)) {
                    nodeWorkspaces.push({ name: workspace.name, fsPath: packageJson });
                }
            });
            if (nodeWorkspaces.length > 1) {
                //if we have many show quick pick to identify the folder
                const items = nodeWorkspaces.map((workspace) => {
                    return { label: workspace.name, description: workspace.fsPath };
                });
                const item = yield vscode_1.window.showQuickPick(items, { ignoreFocusOut: true, canPickMany: false });
                if (undefined === item) {
                    Messages.noValueError();
                    return undefined;
                }
                return nodeWorkspaces.filter(w => w.name === item.label)[0].fsPath;
            }
            else if (nodeWorkspaces.length === 1) {
                return nodeWorkspaces[0].fsPath;
            }
        }
        return undefined;
    });
}
exports.pickPackageJson = pickPackageJson;
function packageExists(packageJson) {
    try {
        const stat = Fs.statSync(packageJson);
        return stat && stat.isFile();
    }
    catch (ignored) {
        return false;
    }
}
exports.packageExists = packageExists;
function getPackageJson(arg) {
    return __awaiter(this, void 0, void 0, function* () {
        let packageJson = null;
        // context menu wins always
        if (arg !== undefined && arg.fsPath.length >= 0) {
            packageJson = arg.fsPath;
        }
        else { // fall back to pick
            packageJson = yield pickPackageJson();
        }
        if (!packageExists(packageJson)) {
            Messages.noPackageError();
        }
        return packageJson;
    });
}
exports.getPackageJson = getPackageJson;
function useTerminal() {
    return vscode_1.workspace.getConfiguration('yarn')['runInTerminal'];
}
exports.useTerminal = useTerminal;
function getYarnBin() {
    return vscode_1.workspace.getConfiguration('yarn')['bin'] || 'yarn';
}
exports.getYarnBin = getYarnBin;
function dontHideOutputOnSuccess() {
    return vscode_1.workspace.getConfiguration('yarn')['dontHideOutputOnSuccess'];
}
exports.dontHideOutputOnSuccess = dontHideOutputOnSuccess;
//# sourceMappingURL=utils.js.map