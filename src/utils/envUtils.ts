import dotenv from 'dotenv';

dotenv.config({
    debug: true,
    path: `${__dirname}/../../.env`,
});
export const { ACCESS_TOKEN, CLIENT_ID, CLIENT_SECRET, USER_ID } = process.env;
