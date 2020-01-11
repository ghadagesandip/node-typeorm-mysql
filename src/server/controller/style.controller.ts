import { Request, Response } from "express";
import { StyleService } from './../service/style.service';

export class StyleController {
    
    static createInstance() {
        return new StyleController();
    }

    async getStyles(req:Request, resp:Response) {
        
        const styleService = await StyleService.createInstance();
        const result = styleService.getStyles();
        resp.send(result);
    }
}