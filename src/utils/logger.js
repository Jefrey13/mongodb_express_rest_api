import {createLogger, format, transports} from 'winston'

const logger = createLogger({
    level:'info',
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports:[
        new transports.File({filename: 'error.log'}),
        new transports.File({filename:'combined.log'}),
    ],
});

if(process.env.NODE_ENV !== 'production'){
    logger.add(new transports.Console({
        format: format.simple(),
    }));
}

export default logger;