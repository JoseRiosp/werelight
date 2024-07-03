const winston = require('winston');

const logger = winston.createLogger({
  level: 'debug', //Le hace caso solo a los niveles debajo de su número:
  /*emerg: 0,
  alert: 1,
  crit: 2,
  error: 3,
  warning: 4,
  notice: 5,
  info: 6,
  debug: 7*/
  format: winston.format.json(), //Podemos customizar el archivo  j.son a otro tipo
  //defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    // Podemos crear otro
    new winston.transports.Console(), //Los muestra en pantalla
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }), 
  ],
});

module.exports=logger; //Exportar el objeto a todo nuestro proyecto

