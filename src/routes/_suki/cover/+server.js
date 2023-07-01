import { error, json, redirect } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export function GET({request}) {
    const REQUESTING_HEADERS = request.headers;
    if(REQUESTING_HEADERS.has('referer')){
        const REF_URL = new URL(REQUESTING_HEADERS.get('referer')).pathname;
        throw redirect(302, `/assets${REF_URL}.jpeg`);
    } else {
        return json({error: "Invalid Request", code: 500});
    }
}