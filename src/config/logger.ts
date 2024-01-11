import winston from 'winston';

// 创建一个 logger 实例
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.simple()
  ),
  transports: [
    new winston.transports.Console(),
    // 如果需要，可以添加其他 transports 比如写入文件的 transport
    // new winston.transports.File({ filename: 'error.log', level: 'error' }),
  ],
});

export default logger;
