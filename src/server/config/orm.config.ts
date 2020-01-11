import { ConnectionOptions } from "typeorm";

export const ormConfig: ConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    username:'root',
    password: 'root',
    port:3306,
    database: 'typeorm',
    synchronize: true,
    logging: true,
    entities: [
        'src/server/dao/entity/**.ts'
    ]
}