const SOCIAL_LINKS = [
	{
		site: 'github',
		link: 'https://github.com/surajgoraya',
		icon: 'github'
	},
	{
		site: 'Bluesky',
		link: 'https://bsky.app/profile/surajgoraya.ca',
		icon: 'bluesky'
	},
	// {
	// 	site: 'Twitter',
	// 	link: 'https://twitter.com/surajgoraya',
	// 	icon: 'twitter'
	// },
	{
		site: 'Instagram',
		link: 'https://instagram.com/surajgoraya',
		icon: 'instagram'
	},
	{
		site: 'Spotify',
		link: 'https://open.spotify.com/artist/6FWyVNtwkA0CeTM9I7Q4DI',
		icon: 'spotify'
	}
];

const PROTECTED_ROUTES = ['/portfolio/assets-2024/website'];
const BAD_USER_AGENTS = [];

const DEFAULTS = {
	description:
		'UI/UX designer based in Toronto, doing research on design systems, coding things & making music.'
};
export { BAD_USER_AGENTS, DEFAULTS, PROTECTED_ROUTES, SOCIAL_LINKS };
