import { collection, doc, setDoc } from "firebase/firestore"; 
import { LoginIntoBackend, firebase_db } from './common';

const _METRICS_DB_NAME = 'metrics';
/**
 * @type {import('firebase/auth').User}
 */
let BACKEND_USER = null;

/**
 * Logs basic data about who is visiting the site, similar to Google Analytics but home made.
 * @param {String} referringHeader The 'Referer' HTTP header address
 * @param {String} userAgentHeader The 'User-Agent' HTTP header which the user is using.
 */
async function LogTraffic(referringHeader, userAgentHeader, ipAddress) {
    if (!BACKEND_USER) {
        BACKEND_USER = await LoginIntoBackend();
    }

    const metricsRef = collection(firebase_db, _METRICS_DB_NAME);

    await setDoc(doc(metricsRef), {
        time: new Date().toISOString(),
        referring_from: referringHeader,
        user_agent: userAgentHeader, 
        ip_address: ipAddress,
        created_by: BACKEND_USER.email
    });
}

export { LogTraffic }