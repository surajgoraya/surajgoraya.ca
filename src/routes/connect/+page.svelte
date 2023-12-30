<script>
	import SvelteSEO from 'svelte-seo';
	import Template from '$lib/Components/Template.svelte';
	import PublishTime from '$lib/Components/PublishTime.svelte';

	const _PUBLISHED_ON = 'NOVEMBER 2022';
	const _LAST_UPDATED_ON = 'JULY 2023';

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
			<i class="bi bi-threads" />&nbsp;Threads:
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
	<div class="meta-information">
		<PublishTime PublishTime={_PUBLISHED_ON} UpdateTime={_LAST_UPDATED_ON}/>
	</div>
</Template>

<style>
	.meta-information{
		margin: -4rem auto 2rem -1rem;
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
	.subtitle {
		margin-top: -1rem;
		letter-spacing: 0.8px;
	}
	.subtitle > i {
		font-size: 80%;
		margin-left: 0.5rem;
		margin-right: 0.2rem;
	}
</style>
