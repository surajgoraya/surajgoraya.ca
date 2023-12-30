export const MENU_LINKS = [
	{ name: 'home', link: '/' },
	{ name: 'research', link: '/research/ds-and-gov', lazyMatch: true },
	{ name: 'projects', link: '/projects', lazyMatch: true },
	// {name: "thoughts", link: "/thoughts", lazyMatch: true},
	{ name: 'connect', link: '/connect' },
];

/**
 * List of user agents which should not be able to access the site
 *
 * Some (TikTok's bytepsider) do not respect the robots.txt file.
 */
export const BAD_USER_AGENTS = ['ByteSpider', 'GPTBot'];
