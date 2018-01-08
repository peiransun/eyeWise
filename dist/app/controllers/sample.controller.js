"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("@decorators/express");
const sample_model_1 = require("../model/sample.model");
/**
 * Sample Controller
 */
let SampleController = class SampleController {
    constructor() { }
    get sampleModel() {
        if (!this._sampleModel) {
            this._sampleModel = new sample_model_1.SampleModel();
        }
        return this._sampleModel;
    }
    /**
     * get Sample.
     *
     * @param req Request
     * @param res Response
     */
    /**
     * 取得所有院區資料
     * @param {Request} req
     * @param {Response} res
     */
    getBranches(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this.sampleModel.getBranches();
                res.json(data);
            }
            catch (error) {
                res.json(error);
            }
        });
    }
    /**
     * 取得員工名稱
     * @param {Request} req
     * @param {Response} res
     */
    setEmpName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("rrrrrrrrrrrrrrrrrrrrrrrrr");
            try {
                let data = yield this.sampleModel.setEmpName(req.body);
                res.json(data);
            }
            catch (error) {
                res.json(error);
            }
        });
    }
};
__decorate([
    express_1.Get("/getBranches"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SampleController.prototype, "getBranches", null);
__decorate([
    express_1.Put("/setEmpName"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SampleController.prototype, "setEmpName", null);
SampleController = __decorate([
    express_1.Controller("/webapi/sample"),
    __metadata("design:paramtypes", [])
], SampleController);
exports.SampleController = SampleController;
//# sourceMappingURL=sample.controller.js.map