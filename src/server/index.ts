import 'reflect-metadata';
import { createConnection, Connection } from 'typeorm';
import { startServer } from './config/app';
import { ormConfig } from './config/orm.config';
import { Server } from 'http';

createConnection(ormConfig)
.then ( async (Connection) => {

    startServer((server: Server) => {

    })
})
.catch(error => {
    console.log('err', error)
})