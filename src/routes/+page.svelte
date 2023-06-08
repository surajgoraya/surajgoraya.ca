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
<Template>
	<blockquote>
		"[suraj is] a...uh... pretty cool guy, I guess?" &#8212; <em
			>Midnight (dog)</em
		>
	</blockquote>
	<h6 class="h1"><em>Right, so, uh. Who are you?</em></h6>
	<p>
		I'm a Computer Science Masters student, <a href="/research/ds-and-gov"
			>with an interest in UI/UX, HCI</a
		>, and computer ethics. When I'm not staring at a screen... I like to stare at
		a screen some more and
		<a href="http://music.surajgoraya.ca">make music</a> from time to time!
	</p>
	<p>
		There's not much here, so I suggest checking out <a
			href="https://github.com/surajgoraya">my GitHub</a
		>
		<sup>&nbsp;(and preparing yourself to be disappointed)</sup>
	</p>
</Template>
