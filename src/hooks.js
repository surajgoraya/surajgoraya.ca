import { PROTECTED_ROUTES } from '$lib/config/sitewide.config';
import { redirect } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Reroute} */
export function reroute({ url }) {
	if (PROTECTED_ROUTES.includes(url.pathname)) {
		return '/protected/';
	}
}