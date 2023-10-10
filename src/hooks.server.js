import { redirect } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    /**
     * Compliance with RFC 9116
     * @see https://www.rfc-editor.org/rfc/rfc9116#section-2.5.2
     */
    if (event.url.pathname.startsWith('/security.txt')) {
		throw redirect(307, '/.well-known/security.txt')
	}
	const response = await resolve(event);
	return response;
}