import { TestVimeoClient, VimeoClient } from './vimeo';
import { log, logError } from './utils';

const client = new VimeoClient();
const testClient = new TestVimeoClient();

(async () => {
    try {
        log(await testClient.getEndpoints());
        // TODO: this endpoint does not exist, or is not accessible
        log(await client.getLiveEvents());
    } catch (error) {
        logError(error);
    }
})();
