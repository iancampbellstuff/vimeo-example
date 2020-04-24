import { InspectOptions } from 'util';

const RED = '\x1b[31m';
const RESET = '\x1b[0m';
const inspectOptions: InspectOptions = {
    colors: true,
    depth: null,
    maxArrayLength: null
};
export const log = (obj: any) => {
    console.log(RESET);
    console.dir(obj, inspectOptions);
    console.log(RESET);
};
export const logError = (error: Error) => {
    console.log(RED);
    console.error(error);
    console.log(RESET);
};
