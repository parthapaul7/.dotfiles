"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const run_command_1 = require("./run-command");
const utils_1 = require("./utils");
const vscode_1 = require("vscode");
class Item {
    constructor(label, description, pid) {
        this.label = label;
        this.description = description;
        this.pid = pid;
    }
}
function default_1() {
    if ((0, utils_1.useTerminal)()) {
        vscode_1.window.showInformationMessage('Killing is only supported when the setting "runInTerminal" is "false"');
    }
    else {
        const items = [];
        run_command_1.childs.forEach((value) => {
            items.push(new Item(value.cmd, `(pid: ${value.child.pid})`, value.child.pid));
        });
        vscode_1.window.showQuickPick(items).then((value) => {
            if (value) {
                (0, run_command_1.terminate)(value.pid);
            }
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=terminate.js.map