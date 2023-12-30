import { BAD_USER_AGENTS } from '$lib/config';
import { error, redirect } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const USER_AGENT = event.request.headers.get('User-Agent');
	const PATH = event.url.pathname;

	/**
	 * Prevent some user agents from accessing the site. This does not stop
	 * bad actors, however does eliminate some traffic to the site which does
	 * nothing but scrape.
	 *
	 * @see https://stackoverflow.com/questions/57908900/what-is-the-bytespider-user-agent
	 */
	BAD_USER_AGENTS.forEach((agent) => {
		if (USER_AGENT.toLocaleLowerCase().includes(agent.toLocaleLowerCase())) {
			error(403, 'Forbidden');
		}
	});

	switch (PATH) {
		case '/security.txt':
			/**
			 * Compliance with RFC 9116
			 * @see https://www.rfc-editor.org/rfc/rfc9116#section-2.5.2
			 */
			redirect(307, '/.well-known/security.txt');
		case '/coop/kenna':
			/*
			 * To maintain backwards compact of old URLS in-case they are indexed,
			 * this will be deprecated by the end of 2024 and return a simple 404.
			 */
			redirect(301, '/archived');
		case '/work-terms/3':
			/*
			 * To maintain backwards compact of old URLS in-case they are indexed,
			 * this will be deprecated by the end of 2024 and return a simple 404.
			 */
			redirect(301, '/archived');
		default:
			break;
	}

	const response = await resolve(event);
	return response;
}
