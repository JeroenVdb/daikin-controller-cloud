/**
 * Example Script to use the Daikin-Controller-Cloud library
 *
 * This example will open a Proxy Server when no tokens are provided
 * to allow a Login with the Daikin Cloud to get the needed tokens.
 *
 * For an example on how to use the automatic Username/Password Login
 * please refer to tokensaver.js
 *
 * The tokens will be stored in a tokenset.json file in the example
 * directory and this file is also loaded on startup.
 *
 * When tokens exist (or were successfully retrieved) the device list
 * is requested from the cloud account and shown as json.
 */

const DaikinCloud = require('../index');

async function main() {


    // Initialize Daikin Cloud Instance
    const code = 'st2.s.AtLt6fm1zQ.24XUWLEIDwzieTj2uhIKU1ioTEnLPBLoLhlx8ggrD7rRCBXoGGPUBgicT94XbbsozZQmZZwGUTakmsYqMj3W6-XRI4c21xWpXiWKO_KbFiJx8GJEvPsDyOcPlAc1T7Zk.2aV8HEDViSaPx441vf_ytYMw0PldQ6yUWqyBZ61se4eVamJ8GVXd4smDRhpecA8r2IEgeZH24k6h_GECDW9OHA.sc3'
    const tokenSet = await DaikinCloud.getAccessTokenFromAuthToken(process.env.ONECTA_CLIENT_ID, process.env.ONECTA_CLIENT_SECRET, code, 'https://www.jeroenvdb.be');

    console.log(tokenSet);
}

(async () => {
    await main();
    process.exit();
})();
