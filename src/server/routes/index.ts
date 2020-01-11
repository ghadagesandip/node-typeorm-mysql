import * as express from 'express';
export const router = express.Router();

import('./style.router').then(route => {
    router.use('/style', route.styleRoutes);
})