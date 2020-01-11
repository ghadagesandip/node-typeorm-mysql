import { StyleDAO } from './../dao/style.dao';
export class StyleService {

    static async createInstance(){
        return new StyleService();
    }

    private styleDAO = StyleDAO.createInstance();

    async getStyles() {
        return this.styleDAO.getStyles();
    }

}