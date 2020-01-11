import { getRepository } from "typeorm";
import { Style } from './entity/style.entity';

export class StyleDAO {
    static createInstance() {
        return new StyleDAO();
    }

    private styleRepo = getRepository(Style);

    async getStyles(){
        return this.styleRepo.find();
    }
}