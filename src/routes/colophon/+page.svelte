<script>
	import Footer from '../../lib/Components/Footer.svelte';
	import { fly } from 'svelte/transition';
	import Top from '$lib/Components/Top.svelte';
</script>

<svelte:head>
	<title>suraj goraya - colophon</title>
	<meta name="description" content="Colophon - surajgoraya.ca" />
</svelte:head>

<body
	in:fly={{ y: -50, duration: 250, delay: 300 }}
	out:fly={{ y: -50, duration: 250 }}
>
	<Top />
	<main>
		<h2 class="h1">colophon</h2>
		<h5 class="h2 subtitle">
			<i class="bi bi-arrow-return-right" /> how it's made
		</h5>
		<h6 class="h2 publish_time">
			<i class="bi bi-clock-history" /> &nbsp; LAST UPDATED JUNE 2022
		</h6>
		<p>
			This site is made using <a href="https://svelte.dev/" target="_blank">SvelteKit</a>. 
			Most of the styling is hand-rolled CSS, with CCS variables for colour and sizing.
		</p>
		<p>
			Additionally, it also uses a modified version of <a
				href="https://github.com/oxalorg/sakura"
				target="_blank">Sakura</a
			>, as a base for all the styling. Sakura is a class-less CSS "framework" that
			makes things look very pretty, I really love it, you should check it out! :)
		</p>
		<p>
			Can't forget about the &hearts; used to make the site, that's an integral
			part!
		</p>
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
