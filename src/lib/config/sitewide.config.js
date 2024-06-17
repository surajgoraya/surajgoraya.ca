const SOCIAL_LINKS = [
	{
		site: 'Twitter',
		link: 'https://twitter.com/surajgoraya',
		icon: 'twitter'
	},
	{
		site: 'Instagram',
		link: 'https://instagram.com/surajgoraya',
		icon: 'instagram'
	},
	{
		site: 'Email',
		link: 'mailto:hello@surajgoraya.ca',
		icon: 'envelope-heart'
	}
];

const PROTECTED_ROUTES = ['/portfolio/assets-2024/website'];
const BAD_USER_AGENTS = ['ByteSpider', 'GPTBot'];

const DEFAULTS = {
	description:
		'UI/UX designer based in Toronto, doing research on design systems, coding things & making music.'
};
export { BAD_USER_AGENTS, DEFAULTS, PROTECTED_ROUTES, SOCIAL_LINKS };
