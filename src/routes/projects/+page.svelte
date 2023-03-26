<script>
	import Footer from '$lib/Components/Footer.svelte';
	import { fly } from 'svelte/transition';
	import Top from '$lib/Components/Top.svelte';
 import SvelteSeo from 'svelte-seo';
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

<body in:fly={{ y: -50, duration: 250, delay: 300 }} out:fly={{ y: -50, duration: 250 }}>
	<Top />
	<main>
		<h1 class="top-highlight">PROJECTS</h1>
		<h2 class="h1">Programming Projects</h2>
        <h5 class="h2 subtitle">
			<i class="bi bi-arrow-return-right" />mostly dumb<i
				class="bi bi-arrow-right-circle"
			/> sometimes useful
		</h5>
		<p>
			A samll (and incomplete) list of all the dumb side projects I've done on my GitHub and here:
		</p>
        <ul>
            <li><a href="https://aot.surajgoraya.ca">Has Interframe Watched AOT Today?</a></li>
            <li><a href="https://hey.surajgoraya.ca">"Hey"</a> - a linkree clone, but for me</li>
            <li><a href="https://gravatarlookup.vercel.app">Gravatar Lookup app</a></li>
            <li><a href="https://github.com/surajgoraya/PageTrack">PageTrack </a> - utility allows for people to watch for changes & notifies them</li>
            <li><a href="https://github.com/surajgoraya/naal">naal</a> - (ਨਾਲ [nāl] - meaning "with") self-hosted short-link service</li>
        </ul>
        <p>Check up <a href="https://github.com/surajgoraya">GitHub</a> for more</p>
	</main>
	<Footer />
</body>

<style>
	.subtitle {
		margin-top: -.5rem;
		letter-spacing: .8px;
	}
	.subtitle > i {
		font-size: 80%;
		margin-left: 0.5rem;
		margin-right: 0.2rem;
	}
	.mini_headings {
		font-size: 0.9em;
		font-weight: bold;
	}
	.publish_time {
		padding: 2rem 0rem;
		/* background-color: aliceblue; */
		width: 100%;
		text-transform: uppercase;
		font-size: 0.8em;
		font-weight: bold;
		margin-top: -0.5rem;
		margin-bottom: 0.5rem;
	}

	.downloads {
		margin-top: 1em;
		padding: 0rem 0;
		gap: 1.5rem;
		display: flex;
		flex-direction: column;
		margin-bottom: -1rem;
	}
	/* .downloads > a {
        padding: 1rem 1rem;
        margin: 1rem 0;
        background-color: var(--colour-bg-alt);
    }
    .downloads > a:hover{
        border-bottom: none;
        color: var(--colour-bg);
        background-color: var(--colour-blossom);
    } */
</style>
