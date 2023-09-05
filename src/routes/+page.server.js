import { LogTraffic } from '$lib/server/connection/logging';

/** @type {import('@sveltejs/kit').PageServerLoad} */
export async function load({ request }) {

	/**
	 * Gets the "Real" IP address of the client, not obfuscated by Vercel.
	 */

	const IP_ADDR = request.headers.get('x-forwarded-for');
	const REFERRING_FROM = request.headers.get('Referer');
	const USER_AGENT = request.headers.get('User-Agent');

	await LogTraffic(
		REFERRING_FROM ? REFERRING_FROM : 'N/A',
		USER_AGENT ? USER_AGENT : 'N/A',
		IP_ADDR ? IP_ADDR : 'N/A'
	);
}
