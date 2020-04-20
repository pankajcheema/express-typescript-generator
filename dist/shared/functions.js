import logger from './Logger';
export const pErr = (err) => {
    if (err) {
        logger.error(err);
    }
};
export const getRandomInt = () => {
    return Math.floor(Math.random() * 1000000000000);
};
