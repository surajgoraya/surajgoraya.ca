<script>
	// import Footer from '../lib/Components/Footer.svelte';
	import { fly } from 'svelte/transition';
	// import Top from '$lib/Components/Top.svelte';
	import SvelteSEO from 'svelte-seo';
	// import Logo from '$lib/Components/Logo.svelte';
	import SurajDrawing from '$lib/Components/Suraj-Drawing.svelte';
	import { Tooltip } from "@svelte-plugins/tooltips";
</script>

<SvelteSEO
	title={'suraj goraya - home'}
	description={'Computer Science researcher coding things & making music.'}
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

<body
	in:fly={{ y: -50, duration: 250, delay: 300 }}
	out:fly={{ y: -50, duration: 250 }}
>
	<!-- <Top logoOnly={false} /> -->
	<main>
		<div class="logo-container"><SurajDrawing /></div>
		<div class="links">
			<a href="/research/ds-and-gov" class="link">research</a>
			|
			<a href="/connect" class="link">connect</a>
		</div>
		<div class="footer muted">
			<Tooltip content="remember, kind to yourself. love you fr." position="bottom" theme="tooltip-theme">
			<p class="lighter"><i class="bi bi-hearts"></i></p>
			</Tooltip>
		</div>
	</main>
</body>

<style>
	:global(.tooltip.tooltip-theme) {
		font-weight: 300;
		line-height: 2rem;
		--tooltip-background-color: var(--colour-blossom);
		--tooltip-box-shadow: 0 1px 8px var(--colour-fade);
		}
	body {
		margin: none;
		min-height: 100%;
	}
	main {
		overflow: none;
		margin: none;
		min-height: 95vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.logo-container {
		margin-top: -4rem;
		padding-bottom: 5rem;
	}
	.links {
		margin: 1.5rem 0;
		display: flex;
		align-items: center;
		justify-content: center;
		align-content: center;
		flex-direction: row;
		gap: 1.5rem;
	}
	.lighter {
		font-weight: 100;
		font-size: 2.5rem;
	}
	.footer {
		cursor: pointer;
		gap: 0.5rem;
		font-size: 1.5rem;
		flex-direction: column;
		margin: 1rem 0;
		display: flex;
		width: 100%;
		align-items: center;
	}
</style>
