import { redirect } from '@sveltejs/kit';

const backward_compat = [
    '/research',
    '/research/ds-and-gov',
    '/projects',
    '/connect'
]
/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    backward_compat.map((m) => {
        if (event.url.pathname.startsWith(m)) {
            throw redirect(307, '/');
        }
    }
    );
    const response = await resolve(event);
    return response;
}