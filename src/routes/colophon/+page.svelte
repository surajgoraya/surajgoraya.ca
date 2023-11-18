<script>
	import Footer from '../../lib/Components/Footer.svelte';
	import { fly } from 'svelte/transition';
	import Top from '$lib/Components/Top.svelte';
	import Template from '$lib/Components/Template.svelte';
</script>

<svelte:head>
	<title>suraj goraya - colophon</title>
	<meta name="description" content="Colophon - surajgoraya.ca" />
</svelte:head>

<Template noFooter={true}>
	<h1 class="h1">colophon</h1>
	<h2 class="h5 subtitle">
		<i class="bi bi-arrow-return-right" /> how it's made
	</h2>
	<h3 class="h6 publish_time">
		<i class="bi bi-clock-history" /> &nbsp; LAST UPDATED JUNE 2022
	</h3>
	<p>
		This site is made using <a href="https://svelte.dev/" target="_blank"
			>SvelteKit</a
		>. Most of the styling is hand-rolled CSS, with CCS variables for colour and
		sizing.
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
</Template>

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
</style>
