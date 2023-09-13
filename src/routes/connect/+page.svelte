<script>
	import SvelteSEO from 'svelte-seo';
	import Template from '$lib/Components/Template.svelte';

	const HAS_BEEN_UPDATED = true;

	const PUBLISH_TIME = 'NOVEMBER 2022';
	const LAST_UPDATE = 'JULY 2023';

	let switchPublish = false;

	function renderLastUpdate(switchPublish) {
		if (HAS_BEEN_UPDATED && switchPublish === false) {
			return `LAST UPDATED ${LAST_UPDATE}`;
		} else if (HAS_BEEN_UPDATED && switchPublish === true) {
			return `PUBLISHED ${PUBLISH_TIME}`;
		} else {
			return `PUBLISHED ${PUBLISH_TIME}`;
		}
	}

	$: pub_time_meta = switchPublish
		? renderLastUpdate(true)
		: renderLastUpdate(false);
	$: pub_time_rev = switchPublish
		? renderLastUpdate(false)
		: renderLastUpdate(true);
</script>

<SvelteSEO
	title={'suraj goraya - connect'}
	description={'All my socials and links (in case Twitter dies).'}
	openGraph={{
		title: 'suraj goraya - connect',
		description: 'All my socials and links (in case Twitter dies).',
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

<Template>
	<h1 class="h1">connect</h1>
	<h2 class="h5 subtitle">
		<i class="bi bi-arrow-return-right" /> twitter is dying
		<i class="bi bi-arrow-right-circle" /> other socials
	</h2>
	<p>Personal socials below:</p>
	<ul>
		<li>
			<i class="bi si-threads" />&nbsp;Threads:
			<a href="https://threads.net/@surajgoraya"> @surajgoraya</a>
		</li>
		<li>
			<i class="bi bi-instagram" />&nbsp;Instagram:
			<a href="https://instagram.com/surajgoraya"> @surajgoraya</a>
		</li>
		<!-- <li><i class="bi bi-discord"></i>&nbsp;Discord: <code>Interframe#5477</code></li> -->
		<!-- <li>Hive: <code>@surajgoraya</code></li> -->
		<!-- <li>Mastodon: <a rel="me" href="https://mas.to/@surajgoraya">@surajgoraya@mast.to</a></li> -->
		<li>
			<i class="bi bi-envelope" />&nbsp;Email:
			<a href="mailto:hello@surajgoraya.ca">hello@surajgoraya.ca</a>
		</li>
		<li>
			<i class="bi bi-at" />&nbsp;Bluesky:
			<a href="https://bsky.app/profile/surajgoraya.ca"> @surajgoraya.ca</a>
		</li>
		<li>
			<i class="bi bi-github" />&nbsp;GitHub:
			<a href="https://github.com/surajgoraya">@surajgoraya</a>
		</li>
		<li>
			<i class="bi bi-globe" />&nbsp;Website:
			<a href="https://surajgoraya.ca">surajgoraya.ca</a>&nbsp;
			<div class="hint"><i class="bi bi-arrow-left" /> &nbsp;You are here!</div>
		</li>
	</ul>
	<p>Music related stuff</p>
	<ul class="music-section">
		<li>
			<i class="bi bi-spotify" />&nbsp;Spotify (Artist Profile):
			<a
				href="https://open.spotify.com/artist/6FWyVNtwkA0CeTM9I7Q4DI?si=uKrpM4jgQGmVa1EY10nDSw"
				>Interframe</a
			>
		</li>
	</ul>
	<br />
	<p>
		<i
			>If we ever interacted, I hope we meet on the internet again. If we never get
			a chance to, I hope you live a happy and wonderful life :) <br /><br /> ~wishing
			you nothing but love.
		</i>
	</p>
	<br />
	<h6 class="h2 publish_time">
		<i class={switchPublish ? 'bi bi-clock-fill' : 'bi bi-clock-history'} />
		&nbsp;

		<abbr title={pub_time_rev} on:click={() => (switchPublish = !switchPublish)}
			>{pub_time_meta}</abbr
		>
	</h6>
</Template>

<style>
	/**
	* Manual implementation of the Instagram "Threads" logo
	* vectorized via the favicon on https://threads.net. 
	*
	* implemented the icon close to how other Bootstrap Icons
	* are, however this icon is visibly thicker.
	*/
	.si-threads::before {
		content: url('/assets/icons/suraj-threads-logo.svg');
		height: 1em;
		width: 1em;
		transform: translate(0, 5%);
		/* padding: 1 0 0 0; */
	}
	.hint {
		display: inline-block;
		font-size: 1.5rem;
		color: var(--colour-text);
		font-weight: 200;
		opacity: 0.8;
	}
	li {
		list-style: none;
	}
	li:not(:nth-child(0)) {
		margin: 0 0 2rem -0.1rem;
	}
	.music-section > li {
		margin-bottom: -2rem;
	}
	abbr {
		cursor: pointer;
	}
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
