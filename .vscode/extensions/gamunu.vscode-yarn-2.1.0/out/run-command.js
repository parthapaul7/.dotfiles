"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runCommand = exports.terminate = exports.childs = exports.terminal = void 0;
const child_process_1 = require("child_process");
const vscode_1 = require("vscode");
const output_1 = require("./output");
const run_in_terminal_1 = require("run-in-terminal");
const utils_1 = require("./utils");
const kill = require('tree-kill');
exports.terminal = null;
exports.childs = new Map();
function terminate(pid) {
    const childCommand = exports.childs.get(pid);
    if (childCommand.child) {
        output_1.outputChannel.appendLine('');
        output_1.outputChannel.appendLine(`Killing process: ${childCommand.cmd} (pid:${pid})`);
        output_1.outputChannel.appendLine('');
        childCommand.killedByUs = true;
        kill(pid, 'SIGTERM');
    }
}
exports.terminate = terminate;
function runCommand(args, packageJson) {
    const cwd = packageJson.replace(/package.json$/i, "");
    const options = {
        cwd: cwd,
        env: process.env
    };
    if ((0, utils_1.useTerminal)()) {
        if (typeof vscode_1.window.createTerminal === 'function') {
            runCommandInIntegratedTerminal(args, cwd);
        }
        else {
            runCommandInTerminal(args, options);
        }
    }
    else {
        runCommandInOutputWindow(args, cwd);
    }
}
exports.runCommand = runCommand;
function runCommandInTerminal(args, options) {
    (0, run_in_terminal_1.runInTerminal)((0, utils_1.getYarnBin)(), args, options);
}
function runCommandInIntegratedTerminal(args, cwd) {
    const cmd_args = Array.from(args);
    if (!exports.terminal || exports.terminal.exitStatus) {
        exports.terminal = vscode_1.window.createTerminal('Yarn');
    }
    exports.terminal.show(true);
    if (cwd) {
        // Replace single backslash with double backslash.
        const textCwd = cwd.replace(/\\/g, '\\\\');
        exports.terminal.sendText(['cd', `"${textCwd}"`].join(' '));
    }
    cmd_args.splice(0, 0, (0, utils_1.getYarnBin)());
    exports.terminal.sendText(cmd_args.join(' '));
}
function runCommandInOutputWindow(args, cwd) {
    const cmd = (0, utils_1.getYarnBin)() + ' ' + args.join(' ');
    const child = (0, child_process_1.exec)(cmd, { cwd: cwd, env: process.env });
    exports.childs.set(child.pid, { child: child, cmd: cmd });
    child.on('exit', (code, signal) => {
        if (signal === 'SIGTERM' || exports.childs.get(child.pid).killedByUs) {
            output_1.outputChannel.appendLine('');
            output_1.outputChannel.appendLine('Successfully killed process');
            output_1.outputChannel.appendLine('');
            output_1.outputChannel.appendLine('--------------------');
            output_1.outputChannel.appendLine('');
        }
        if (code === 0) {
            output_1.outputChannel.appendLine('');
            output_1.outputChannel.appendLine('--------------------');
            output_1.outputChannel.appendLine('');
            if (!(0, utils_1.dontHideOutputOnSuccess)()) {
                output_1.outputChannel.hide();
            }
        }
        exports.childs.delete(child.pid);
    });
    output_1.outputChannel.appendLine(cmd);
    output_1.outputChannel.appendLine('');
    const append = function (data) {
        output_1.outputChannel.append(data);
    };
    child.stderr.on('data', append);
    child.stdout.on('data', append);
    output_1.outputChannel.show(true);
}
//# sourceMappingURL=run-command.js.map