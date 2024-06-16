import { PROTECTED_ROUTES } from '$lib/config/sitewide.config';
import { redirect } from '@sveltejs/kit';

/**
 * Protecting case study routes for now.
 */
/** @type {import('@sveltejs/kit').Reroute} */
export function reroute({ url }) {
	if (PROTECTED_ROUTES.includes(url.pathname)) {
		return '/protected/';
	}
}