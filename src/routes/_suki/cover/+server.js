import { error, json, redirect } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export function GET({request}) {
    
    /**
     * No clue what this does any more, just gonna comment it out
     * and throw up an invalid request for now.
     * 
     * Some day i'll remember, hopefully.
    
    const REQUESTING_HEADERS = request.headers;
    if(REQUESTING_HEADERS.has('referer')){
        const REF_URL = new URL(REQUESTING_HEADERS.get('referer')).pathname;
        throw redirect(302, `/assets${REF_URL}.jpeg`);
    } else {
        return json({error: "Invalid Request", code: 500});
    }
    **/
   
    return json({error: "Invalid Request", code: 500, additional: "see github"})
}