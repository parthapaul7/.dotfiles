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
exports.yarnInstallPackages = void 0;
const utils_1 = require("./utils");
const run_command_1 = require("./run-command");
function yarnInstallPackages(arg) {
    return __awaiter(this, void 0, void 0, function* () {
        const packageJson = yield (0, utils_1.getPackageJson)(arg);
        if (packageJson === null) {
            return;
        }
        (0, run_command_1.runCommand)(['install'], packageJson);
    });
}
exports.yarnInstallPackages = yarnInstallPackages;
//# sourceMappingURL=install.js.map