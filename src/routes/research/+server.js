/**
 * Temporary redirect before other research is published here.
 */
import { error, redirect } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {
	throw redirect(307, 'research/ds-and-gov');
}
