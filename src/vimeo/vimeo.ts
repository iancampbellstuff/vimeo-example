const { Vimeo } = require('vimeo');
import { environmentVariables } from '../utils';

const {
    ACCESS_TOKEN,
    CLIENT_ID,
    CLIENT_SECRET,
    USER_ID
} = environmentVariables;

export enum Method {
    // DELETE = 'DELETE',
    GET = 'GET'
    // POST = 'POST'
}

export interface IRequest {
    method: Method;
    path: string;
}

class BaseVimeoClient {
    private client: any;
    constructor() {
        this.client = new Vimeo(CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN);
    }
    protected request(req: IRequest | string): Promise<any> {
        const response = new Promise((resolve, reject) => {
            this.client.request(
                req,
                (error: Error, body: any, statusCode: number, headers: any) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(body);
                    }
                }
            );
        });
        return response;
    }
}

export class TestVimeoClient extends BaseVimeoClient {
    public getEndpoints(): Promise<any> {
        return this.request('/');
    }
    public getUser(): Promise<any> {
        return this.request(`/users/${USER_ID}`);
    }
    public tutorial(): Promise<any> {
        return this.request('/tutorial');
    }
}

export class VimeoClient extends BaseVimeoClient {
    /**
     * TODO: this endpoint does not exist, or is not accessible
     * @see https://developer.vimeo.com/api/reference/live#get_live_events
     */
    public getLiveEvents(): Promise<any> {
        return this.request(`/users/${USER_ID}/live_events`);
    }
    public getVideos(): Promise<any> {
        return this.request(`/users/${USER_ID}/videos`);
    }
}
