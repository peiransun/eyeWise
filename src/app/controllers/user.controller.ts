import { Request, Response } from 'express';
import { Controller, Get, Post, Put, Delete } from '@decorators/express';
import { User } from '../model';
import { IUser } from '../viewmodel';

@Controller('/webapi/user')
export class UserController {

    constructor() { }
    /**
     * 尋找全部
     * @param req 
     * @param res 
     */
    @Get('/')
    public async find(req: Request, res: Response) {
        
        try {
            let users = await User.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    /**
     * 根據Id尋找
     * @param req 
     * @param res 
     */
    @Get('/:id')
    public async findById(req: Request, res: Response) {

        try {
            let user = await User.findById(req.params.id);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    /**
     * 新增
     * @param req 
     * @param res 
     */
    @Post('/')
    public async add(req: Request, res: Response) {

      
        try {
            let user = new User(req.body);
            
            await user.save();
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    /**
     * 修改
     * @param req 
     * @param res 
     */
    @Put('/:id')
    public async modifyById(req: Request, res: Response) {

        try {
            let user = await User.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    /**
     * 刪除
     * @param req 
     * @param res 
     */
    @Delete('/:id')
    public async removeById(req: Request, res: Response) {

        try {
            let user = await User.findByIdAndRemove(req.params.id);
            res.status(204).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    /**
    * 刪除全部
    * @param req 
    * @param res 
    */
    @Delete('/')
    public async remove(req: Request, res: Response) {

        try {
            let user = await User.remove({});
            res.status(204).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
