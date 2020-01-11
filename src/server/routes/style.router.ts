import * as express from 'express';
import { StyleController } from './../controller/style.controller';

export const styleRoutes: express.Router = express.Router();

const styleController = StyleController.createInstance();

styleRoutes.route('/list').get(styleController.getStyles);