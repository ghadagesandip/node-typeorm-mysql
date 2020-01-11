import * as express from 'express';
import * as bodyParser from 'body-parser'
import { router } from './../routes';
import * as http from 'http';

const app:express.Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', router);

export const startServer = (cb: Function ) => {
    const server = http.createServer({}, app).listen(3000, () =>{
        console.log('Server started at 3000' )
    });
    cb(server);
}

