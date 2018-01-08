import * as express from "express";
import * as mongoose from "mongoose";

import { join } from "path";
import { readdirSync } from "fs";
import * as bodyParser from "body-parser";
import { attachControllers } from "@decorators/express";

/**
 * The server.
 *
 * @class Server
 */
export class Server {
  private app: express.Express = express();

  public static bootstrap(): Server {
    return new Server();
  }
  /**
   * 建構式
   */
  constructor() {
    const folder = join(__dirname, "/app/controllers");

    this.connectDatabase();

    this.apiConfig();

    this.registerControllers(folder);

    this.startListen(3000);
  }

  private connectDatabase() {
    mongoose.connect('mongodb://localhost/eyeWise', {});
    mongoose.Promise = global.Promise;
  }
  /**
   * 註冊Controllers
   */
  private registerControllers(folder: string) {
    let controllerFiles = readdirSync(folder);
    controllerFiles.forEach(fileName => {
      try {
        if (fileName.endsWith(".js")) {
          let controller = require(`${folder}/${fileName}`);

          if (controller.prototype && controller.prototype.__meta__) {
            attachControllers(this.app, [controller]);
          } else if (typeof controller === "object") {
            for (let key in controller) {
              if (controller.hasOwnProperty(key)) {
                attachControllers(this.app, [controller[key]]);
              }
            }
          }
        }
      } catch (e) {
        console.log(`Cannot register controller ${name}`, e, e.message);
      }
    });
  }

  /**
   * 設定資料
   */
  public apiConfig() {

    this.app.disable("x-powered-by");

    // express middleware
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());

  }

  /**
   * 啟動LISTEN
   */
  public startListen(portNumber: number) {

    if (!portNumber) {
      console.log(`請設定 port`);
      return;
    }
    console.log(`Listen to port number: ${portNumber}.............`);

    this.app.listen(portNumber);
  }
}

/**
 * Start Server
 */
let server = new Server();
