import { redirect } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const PATH = event.url.pathname;

	switch (PATH) {
		case '/security.txt':
			/**
			 * Compliance with RFC 9116
			 * @see https://www.rfc-editor.org/rfc/rfc9116#section-2.5.2
			 */
			throw redirect(307, '/.well-known/security.txt');
		case '/coop/kenna':
			/*
			 * To maintain backwards compact of old URLS in-case they are indexed,
			 * this will be deprecated by the end of 2024 and return a simple 404.
			 */
			throw redirect(301, '/archived');
		case '/work-terms/3':
			/*
			 * To maintain backwards compact of old URLS in-case they are indexed,
			 * this will be deprecated by the end of 2024 and return a simple 404.
			 */
			throw redirect(301, '/archived');
		default:
			break;
	}

	const response = await resolve(event);
	return response;
}
