<script>
	import SvelteSeo from 'svelte-seo';
	import Template from '$lib/Components/Template.svelte';
</script>

<SvelteSeo
	title={'suraj goraya - projects'}
	description={'Computer Science researcher coding things & making music.'}
	keywords={'suraj goraya, computer science student, undergraduate student, designer toronto, developer toronto, music producer'}
	openGraph={{
		title: 'suraj goraya - home',
		description: 'All my dumb little site projects',
		url: 'https://surajgoraya.ca/projects',
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
		description: 'All my dumb little site projects',
		url: 'https://surajgoraya.ca/perma/cover.jpg',
		imageAlt: 'A black and white picture of Suraj, standing looking down',
	}}
/>

<Template>
	<h1 class="top-highlight">PROJECTS</h1>
	<h2 class="h1">Programming Projects</h2>
	<h3 class="h5 subtitle">
		<i class="bi bi-arrow-return-right" />mostly dumb<i
			class="bi bi-arrow-right-circle"
		/> sometimes useful
	</h3>
	<p>
		A small (and incomplete) list of all the dumb side projects I've done on my
		GitHub and here:
	</p>
	<ul>
		<li>
			<a href="https://aot.surajgoraya.ca">Has Interframe Watched AOT Today?</a>
		</li>
		<li>
			<a href="https://hey.surajgoraya.ca">"Hey"</a> - a linkree clone, but for me
		</li>
		<li><a href="https://gravatarlookup.vercel.app">Gravatar Lookup app</a></li>
		<li>
			<a href="https://github.com/surajgoraya/PageTrack">PageTrack </a> - utility allows
			for people to watch for changes & notifies them
		</li>
		<li>
			<a href="https://github.com/surajgoraya/naal">naal</a> - (ਨਾਲ [nāl] - meaning
			"with") self-hosted short-link service
		</li>
	</ul>
	<p>Check up <a href="https://github.com/surajgoraya">GitHub</a> for more</p>
</Template>

<style>
	.subtitle {
		margin-top: -0.5rem;
		letter-spacing: 0.8px;
	}
	.subtitle > i {
		font-size: 80%;
		margin-left: 0.5rem;
		margin-right: 0.2rem;
	}
</style>
