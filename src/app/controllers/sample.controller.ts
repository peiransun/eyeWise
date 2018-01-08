import { Request, Response } from 'express';
import { Controller, Get, Post, Put, Delete } from '@decorators/express';

import { SampleModel } from '../model/sample.model';

/**
 * Sample Controller
 */
@Controller('/webapi/sample')
export class SampleController {
    private _sampleModel: SampleModel;
    
    private get sampleModel(): SampleModel {
        if (!this._sampleModel) {
            this._sampleModel = new SampleModel();
        }
        return this._sampleModel;
    }

    constructor() {

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
    @Get('/getBranches')
    public async getBranches(req: Request, res: Response) {
        try {
            let data = await this.sampleModel.getBranches();
            res.json(data);
        } catch (error) {
            res.json(error);
        }
    }

    /**
     * 取得員工名稱
     * @param {Request} req
     * @param {Response} res
     */
    @Put('/setEmpName')
    public async setEmpName(req: Request, res: Response) {
        console.log('rrrrrrrrrrrrrrrrrrrrrrrrr');
        try {
            let data = await this.sampleModel.setEmpName(req.body);
            res.json(data);
        } catch (error) {
            res.json(error);
        }
    }

   
}



