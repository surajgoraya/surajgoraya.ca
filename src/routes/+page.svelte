<script>
	import SvelteSEO from 'svelte-seo';
	import Special from '$lib/Components/Special.svelte';
	import Template from '$lib/Components/Template.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<SvelteSEO
	title={'suraj goraya - home'}
	description={'computer Science researcher coding things & making music.'}
	keywords={'suraj goraya, computer science student, undergraduate student, designer toronto, developer toronto, music producer'}
	openGraph={{
		title: 'suraj goraya - home',
		description:
			'Fifth year Computer Science student coding things & making music.',
		url: 'https://surajgoraya.ca/',
		type: 'website',
		images: [
			{
				url: 'https://surajgoraya.ca/perma/cover.jpg',
				width: 4000,
				height: 2250,
				alt: 'A black and white picture of Suraj, standing looking down',
			},
		],
	}}
	twitter={{
		site: '@surajgoraya',
		title: 'suraj goraya - home',
		description:
			'Fifth year Computer Science student coding things & making music.',
		url: 'https://surajgoraya.ca/perma/cover.jpg',
		imageAlt: 'A black and white picture of Suraj, standing looking down',
	}}
/>
{#if data.special}
	<Special message={data.message} />
{/if}
<Template showLogoOnly>
	<h2><em>Back soon.</em></h2>
	<p>redoing this.</p>
</Template>
