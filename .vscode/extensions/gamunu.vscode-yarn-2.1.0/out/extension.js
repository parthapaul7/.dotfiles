"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode_1 = require("vscode");
const output_1 = require("./output");
const run_command_1 = require("./run-command");
const init_1 = require("./init");
const install_1 = require("./install");
const add_1 = require("./add");
const remove_1 = require("./remove");
const run_1 = require("./run");
const publish_1 = require("./publish");
const raw_1 = require("./raw");
const terminate_1 = require("./terminate");
const outdated_1 = require("./outdated");
const activate = function (context) {
    const disposables = [
        vscode_1.commands.registerCommand('yarn-script.installPackages', install_1.yarnInstallPackages),
        vscode_1.commands.registerCommand('yarn-script.addPackages', add_1.yarnAddPackages),
        vscode_1.commands.registerCommand('yarn-script.addPackage', add_1.yarnAddPackage),
        vscode_1.commands.registerCommand('yarn-script.addPackageDev', add_1.yarnAddPackageDev),
        vscode_1.commands.registerCommand('yarn-script.runScript', run_1.yarnRunScript),
        vscode_1.commands.registerCommand('yarn-script.build', run_1.yarnBuild),
        vscode_1.commands.registerCommand('yarn-script.runScriptLast', run_1.yarnRunLastScript),
        vscode_1.commands.registerCommand('yarn-script.init', init_1.default),
        vscode_1.commands.registerCommand('yarn-script.outdated', outdated_1.yarnOutdated),
        vscode_1.commands.registerCommand('yarn-script.removePackage', remove_1.yarnRemovePackage),
        vscode_1.commands.registerCommand('yarn-script.publish', publish_1.yarnPublish),
        vscode_1.commands.registerCommand('yarn-script.raw', raw_1.yarnRawCommand),
        vscode_1.commands.registerCommand('yarn-script.terminate', terminate_1.default),
        vscode_1.commands.registerCommand('yarn-script.test', run_1.yarnTest),
        vscode_1.commands.registerCommand('yarn-script.start', run_1.yarnStart)
    ];
    context.subscriptions.push(...disposables, output_1.outputChannel);
};
exports.activate = activate;
function deactivate() {
    if (run_command_1.terminal) {
        run_command_1.terminal.dispose();
    }
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map