<script>
	import { MetaTags } from 'svelte-meta-tags';
	export let title, description;
	// export let noIndex = false;
</script>
<!-- 
keywords=[
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
	]}, -->
<MetaTags
	title={`suraj goraya - ${title}`}
	description={`${description}`}
	openGraph={{
		title: `suraj goraya - ${title}`,
		siteName: 'suraj goraya | UI / UX Designer, Developer',
		description: ``,
		url: 'https://surajgoraya.ca/connect',
		type: 'website',
		images: [
			{
				url: 'https://surajgoraya.ca/perma/cover.jpg',
				width: 4000,
				height: 2250,
				alt: 'A black and white picture of Suraj, standing looking down'
			}
		]
	}}
	twitter={{
		site: '@surajgoraya',
		title: `suraj goraya - ${title}`,
		description: `${description}`,
		image: 'https://surajgoraya.ca/perma/cover.jpg',
		imageAlt: 'A black and white picture of Suraj, standing looking down'
	}}
/>
