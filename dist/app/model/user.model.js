"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: { type: String },
    email: { type: String }
});
exports.User = mongoose_1.model("User", UserSchema);
//# sourceMappingURL=user.model.js.map