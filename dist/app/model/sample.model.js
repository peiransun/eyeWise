"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class SampleModel {
    constructor() { }
    /**
       * 取得院區
       * @return {Promise<Array<Branch>>}
       */
    getBranches() {
        return __awaiter(this, void 0, void 0, function* () {
            return '孫培然工作室';
        });
    }
    /**
     * 取得員工姓名
     * @param {empNo: number} params
     */
    setEmpName(params) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("wwwwwwwwwwwww");
            return true;
        });
    }
}
exports.SampleModel = SampleModel;
//# sourceMappingURL=sample.model.js.map