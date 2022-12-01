<script>
	import Footer from '../../lib/Components/Footer.svelte';
	import { fly } from 'svelte/transition';
	import Top from '$lib/Components/Top.svelte';
	import SvelteSEO from 'svelte-seo';
</script>

<SvelteSEO
	title={'suraj goraya - connect'}
	description={'All my socials and links (in case Twitter dies).'}
	openGraph={{
		title: 'suraj goraya - connect',
		description:
			'All my socials and links (in case Twitter dies).',
		url: 'https://surajgoraya.ca/connect',
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
		title: 'suraj goraya - connect',
		description: 'All my socials and links (in case Twitter dies).',
		url: 'https://surajgoraya.ca/perma/cover.jpg',
		imageAlt: 'A black and white picture of Suraj, standing looking down',
	}}
/>

<body
	in:fly={{ y: -50, duration: 250, delay: 300 }}
	out:fly={{ y: -50, duration: 250 }}
>
	<Top />
	<main>
		<h2 class="h1">connect</h2>
		<h5 class="h2 subtitle">
			<i class="bi bi-arrow-return-right" /> twitter is dying <i
			class="bi bi-arrow-right-circle"
		/> other socials 
		</h5>
		<p>Personal socials below: </p>
        <ul>
            <li>Instagram: <a href="https://instagram.com/surajgoraya"> @surajgoraya</a></li>
            <li>Discord: <code>Interframe#5477</code></li>
			<li>Hive: <code>@surajgoraya</code></li>
            <li>Mastodon: <a href="https://mas.to/@surajgoraya">@surajgoraya@mast.to</a></li>
            <li>Email: <a href="mailto:hello@surajgoraya.ca">hello@surajgoraya.ca</a></li>
            <li>Website: <a href="https://surajgoraya.ca">surajgoraya.ca</a></li>
            <li>GitHub: <a href="https://github.com/surajgoraya">@surajgoraya</a></li>
        </ul>
        <p>Music related stuff</p>
        <li>Spotify (Artist Profile): <a href="https://open.spotify.com/artist/6FWyVNtwkA0CeTM9I7Q4DI?si=uKrpM4jgQGmVa1EY10nDSw">Interframe</a></li>
        <br/>
		<p><i>If we ever interacted, I hope we meet on the internet again. If we never get a chance to, I hope you live a happy and wonderful life :) <br/><br/> ~wishing you nothing but love. </i></p>
		<h6 class="h2 publish_time">
			<i class="bi bi-clock-history" /> &nbsp; LAST UPDATED DECEMBER 2022
		</h6>
	</main>
	<Footer />
</body>

<style>
	.subtitle {
		margin-top: -1rem;
		letter-spacing: 0.8px;
	}
	.subtitle > i {
		font-size: 80%;
		margin-left: 0.5rem;
		margin-right: 0.2rem;
	}
	.publish_time {
		padding: 1rem 0rem;
		/* background-color: aliceblue; */
		width: 100%;
		text-transform: uppercase;
		font-size: 0.8em;
		font-weight: bold;
		margin-top: -0.5rem;
		margin-bottom: 0.5rem;
	}
</style>
