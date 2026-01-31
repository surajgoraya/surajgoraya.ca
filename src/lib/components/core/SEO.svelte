<script>
	import { MetaTags } from 'svelte-meta-tags';
	export let title = '',
		description = '';
	export let noIndex = false;
</script>

<MetaTags
	title={`suraj goraya${title !== '' ? ' - ' : ''}${title}`}
	description={`${description}`}
	robots={noIndex ? 'noindex, nofollow' : 'index,follow'}
	keywords={[
		'suraj goraya',
		'UI/UX',
		'ux designer',
		'ui designer',
		'design systems',
		'design systems research',
		'computer science researcher',
		'undergraduate student',
		'designer toronto',
		'developer toronto',
		'music producer'
	]}
	openGraph={{
		title: `suraj goraya${title !== '' ? ' - ' : ''}${title}`,
		siteName: 'suraj goraya | fullstack developer, designer & HCI researcher',
		description: ``,
		url: 'https://surajgoraya.ca',
		type: 'website',
		images: [
			{
				url: 'https://surajgoraya.ca/perma/cover.jpg',
				width: 2033,
				height: 1349,
				alt: 'a front on picture of suraj, a man in a white turban, looking up at the sky with a smile. behind him is the orange glow of the tokyo tower.'
			}
		]
	}}
	twitter={{
		site: '@surajgoraya',
		title: `suraj goraya${title !== '' ? ' - ' : ''}${title}`,
		description: `${description}`,
		image: 'https://surajgoraya.ca/perma/cover.jpg',
		imageAlt:
			'a front on picture of suraj, a man in a white turban, looking up at the sky with a smile. behind him is the orange glow of the tokyo tower.'
	}}
/>
