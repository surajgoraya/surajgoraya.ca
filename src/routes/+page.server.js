import { LogTraffic } from '$lib/server/connection/logging';

/** @type {import('@sveltejs/kit').PageServerLoad} */
export async function load({ request }) {

	/**
	 * Gets the "Real" IP address of the client, not obfuscated by Vercel.
	 *
	 * Then it checks if this IP Address is in the University of Guelph's range (131.104.*.*) and displays a message for fellow gryphons.
	 * Accurate as of 2023 as per https://ocul.on.ca/ip-addresses
	 */

	const IP_ADDR = request.headers.get('x-forwarded-for');
	const REFERRING_FROM = request.headers.get('Referer');
	const USER_AGENT = request.headers.get('User-Agent');

	/**
	 * @deprecated * 10-10-2023 -- Temp disable due to high amounts of reads/writes.
	 * 
	await LogTraffic(
		REFERRING_FROM ? REFERRING_FROM : 'N/A',
		USER_AGENT ? USER_AGENT : 'N/A',
		IP_ADDR ? IP_ADDR : 'N/A'
	);
 	**/
	if (IP_ADDR && IP_ADDR.startsWith('131.104.')) {
		return {
			special: true,
			message:
				"Looks like you're accessing this site from the University of Guelph ❤️. Welcome fellow Gryphon.",
		};
	} else {
		return { special: false };
	}
}
