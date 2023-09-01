import { env } from '$env/dynamic/private';
import { getFirestore } from 'firebase/firestore';
import { app } from './backend.config';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebase_auth = getAuth(app);
const firebase_db = getFirestore(app);

/**
 * Logs a user into the backend as a service account.
 * @returns {import('firebase/auth').User}
 */
async function LoginIntoBackend() {
    const backend_user = await signInWithEmailAndPassword(firebase_auth, env.EMAIL, env.PASSWORD);
    return backend_user.user ? backend_user.user : undefined;
}

export { LoginIntoBackend, firebase_db}
