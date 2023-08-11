/** @type {import('@sveltejs/kit').PageServerLoad} */
export async function load({ request }) {
	/**
	 * Gets the "Real" IP address of the client, not obfuscated by Vercel.
	 *
	 * Then it checks if this IP Address is in the University of Guelph's range (131.104.*.*) and displays a message for fellow gryphons.
	 * Accurate as of 2023 as per https://ocul.on.ca/ip-addresses
	 */

	const IP_ADDR = request.headers.get('x-forwarded-for');

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
