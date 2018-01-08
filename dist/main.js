"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
const path_1 = require("path");
const fs_1 = require("fs");
const bodyParser = require("body-parser");
const express_1 = require("@decorators/express");
/**
 * The server.
 *
 * @class Server
 */
class Server {
    /**
     * 建構式
     */
    constructor() {
        this.app = express();
        const folder = path_1.join(__dirname, "/app/controllers");
        this.connectDatabase();
        this.apiConfig();
        this.registerControllers(folder);
        this.startListen(3000);
    }
    static bootstrap() {
        return new Server();
    }
    connectDatabase() {
        mongoose.connect('mongodb://localhost/eyeWise', {});
        mongoose.Promise = global.Promise;
    }
    /**
     * 註冊Controllers
     */
    registerControllers(folder) {
        let controllerFiles = fs_1.readdirSync(folder);
        controllerFiles.forEach(fileName => {
            try {
                if (fileName.endsWith(".js")) {
                    let controller = require(`${folder}/${fileName}`);
                    if (controller.prototype && controller.prototype.__meta__) {
                        express_1.attachControllers(this.app, [controller]);
                    }
                    else if (typeof controller === "object") {
                        for (let key in controller) {
                            if (controller.hasOwnProperty(key)) {
                                express_1.attachControllers(this.app, [controller[key]]);
                            }
                        }
                    }
                }
            }
            catch (e) {
                console.log(`Cannot register controller ${name}`, e, e.message);
            }
        });
    }
    /**
     * 設定資料
     */
    apiConfig() {
        this.app.disable("x-powered-by");
        // express middleware
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
    }
    /**
     * 啟動LISTEN
     */
    startListen(portNumber) {
        if (!portNumber) {
            console.log(`請設定 port`);
            return;
        }
        console.log(`Listen to port number: ${portNumber}.............`);
        this.app.listen(portNumber);
    }
}
exports.Server = Server;
/**
 * Start Server
 */
let server = new Server();
//# sourceMappingURL=main.js.map