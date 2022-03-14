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
exports.yarnRunLastScript = exports.yarnBuild = exports.yarnStart = exports.yarnTest = exports.yarnRunScript = void 0;
const Fs = require("fs");
const vscode_1 = require("vscode");
const Messages = require("./messages");
const run_command_1 = require("./run-command");
const utils_1 = require("./utils");
let lastScript;
function yarnRunScript(arg) {
    return __awaiter(this, void 0, void 0, function* () {
        const packageJson = yield (0, utils_1.getPackageJson)(arg);
        if (packageJson === null) {
            return;
        }
        const scripts = readScripts(packageJson);
        if (!scripts) {
            return;
        }
        const items = Object.keys(scripts).map((key) => {
            return { label: key, description: scripts[key] };
        });
        vscode_1.window.showQuickPick(items).then((value) => {
            lastScript = {
                packageJson: packageJson,
                script: value.label
            };
            (0, run_command_1.runCommand)(['run', value.label], packageJson);
        });
    });
}
exports.yarnRunScript = yarnRunScript;
function yarnTest(arg) {
    return __awaiter(this, void 0, void 0, function* () {
        const packageJson = yield (0, utils_1.getPackageJson)(arg);
        if (packageJson === null) {
            return;
        }
        const scripts = readScripts(packageJson);
        if (!scripts) {
            return;
        }
        if (!scripts.test) {
            Messages.noTestScript();
            return;
        }
        lastScript = {
            packageJson: packageJson,
            script: 'test'
        };
        (0, run_command_1.runCommand)(['run', 'test'], packageJson);
    });
}
exports.yarnTest = yarnTest;
function yarnStart(arg) {
    return __awaiter(this, void 0, void 0, function* () {
        const packageJson = yield (0, utils_1.getPackageJson)(arg);
        if (packageJson === null) {
            return;
        }
        const scripts = readScripts(packageJson);
        if (!scripts) {
            return;
        }
        if (!scripts.start) {
            Messages.noStartScript();
            return;
        }
        lastScript = {
            packageJson: packageJson,
            script: 'start'
        };
        (0, run_command_1.runCommand)(['run', 'start'], packageJson);
    });
}
exports.yarnStart = yarnStart;
function yarnBuild(arg) {
    return __awaiter(this, void 0, void 0, function* () {
        const packageJson = yield (0, utils_1.getPackageJson)(arg);
        if (packageJson === null) {
            return;
        }
        const scripts = readScripts(packageJson);
        if (!scripts) {
            return;
        }
        if (!scripts.build) {
            Messages.noBuildScript();
            return;
        }
        lastScript = {
            packageJson: packageJson,
            script: 'build'
        };
        (0, run_command_1.runCommand)(['run', 'build'], packageJson);
    });
}
exports.yarnBuild = yarnBuild;
function yarnRunLastScript() {
    return __awaiter(this, void 0, void 0, function* () {
        if (lastScript) {
            const rootPath = lastScript.packageJson;
            if (rootPath !== null && !(0, utils_1.packageExists)(rootPath)) {
                Messages.noPackageError();
                return;
            }
            (0, run_command_1.runCommand)(['run', lastScript.script], rootPath);
        }
        else {
            Messages.noLastScript();
        }
    });
}
exports.yarnRunLastScript = yarnRunLastScript;
const readScripts = function (packgeJson) {
    try {
        const content = Fs.readFileSync(packgeJson).toString();
        const json = JSON.parse(content);
        if (json.scripts) {
            return json.scripts;
        }
        Messages.noScriptsInfo();
        return null;
    }
    catch (ignored) {
        Messages.noPackageError();
        return null;
    }
};
//# sourceMappingURL=run.js.map