// import { LogTraffic } from '$lib/server/connection/logging';

/** @type {import('@sveltejs/kit').PageServerLoad} */
export async function load({ request }) {

	const IP_ADDR = request.headers.get('x-forwarded-for');

	/**
	 * Gets the "Real" IP address of the client, not obfuscated by Vercel.
	 *
	 * Then it checks if this IP Address is in the University of Guelph's range (131.104.*.*) and displays a message for fellow gryphons.
	 * Accurate as of 2023 as per https://ocul.on.ca/ip-addresses
	 */

	if (IP_ADDR && IP_ADDR.startsWith('131.104.')) {
		return {
			special: true,
			message:
				"Looks like you're accessing this site from the University of Guelph ❤️",
		};
	} else {
		return { special: false };
	}
}
