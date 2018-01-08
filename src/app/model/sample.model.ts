import { Schema, model } from 'mongoose';

export class SampleModel {
  
    constructor() {}

/**
   * 取得院區
   * @return {Promise<Array<Branch>>}
   */
  public async getBranches(): Promise<string> {

    return '孫培然工作室';
  }
  /**
   * 取得員工姓名
   * @param {empNo: number} params
   */
  public async setEmpName(params: { empNo: number,empName:string}): Promise<boolean> {
    console.log("wwwwwwwwwwwww");
 
    return true;
  }
}
 


  