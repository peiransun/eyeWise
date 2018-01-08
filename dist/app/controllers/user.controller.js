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
const model_1 = require("../model");
let UserController = class UserController {
    constructor() { }
    /**
     * 尋找全部
     * @param req
     * @param res
     */
    find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let users = yield model_1.User.find();
                res.status(200).json(users);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    /**
     * 根據Id尋找
     * @param req
     * @param res
     */
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let user = yield model_1.User.findById(req.params.id);
                res.status(200).json(user);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    /**
     * 新增
     * @param req
     * @param res
     */
    add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let user = new model_1.User(req.body);
                yield user.save();
                res.status(201).json(user);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    /**
     * 修改
     * @param req
     * @param res
     */
    modifyById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let user = yield model_1.User.findByIdAndUpdate(req.params.id, req.body);
                res.status(200).json(user);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    /**
     * 刪除
     * @param req
     * @param res
     */
    removeById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let user = yield model_1.User.findByIdAndRemove(req.params.id);
                res.status(204).json(user);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    /**
    * 刪除全部
    * @param req
    * @param res
    */
    remove(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let user = yield model_1.User.remove({});
                res.status(204).json(user);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
};
__decorate([
    express_1.Get('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "find", null);
__decorate([
    express_1.Get('/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findById", null);
__decorate([
    express_1.Post('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "add", null);
__decorate([
    express_1.Put('/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "modifyById", null);
__decorate([
    express_1.Delete('/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "removeById", null);
__decorate([
    express_1.Delete('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "remove", null);
UserController = __decorate([
    express_1.Controller('/webapi/user'),
    __metadata("design:paramtypes", [])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map