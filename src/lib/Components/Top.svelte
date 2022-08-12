<script>
	import { fade } from 'svelte/transition';
	import { browser } from '$app/env';

	//Allows showing only a logo for the header with no menubar options.
	export let logoOnly;

	import { onDestroy, onMount } from 'svelte';
	import Logo from './Logo.svelte';
	let clickedOnBurger = false;
	let url = '';

	const burgerToggle = () => (clickedOnBurger = !clickedOnBurger);
	const resetBurger = () => {
		clickedOnBurger = false;
	};

	onMount(() => {
		window.addEventListener('resize', resetBurger);
		url = window.location.pathname;
	});

	onDestroy(() => {
		//Check if the app is running SSR or SPA, depending on which, we need to remove the event listener to prevent mem leaks.
		if (browser) {
			window.removeEventListener('resize', resetBurger);
		}
	});
</script>

<header>
	<div class="h-container">
		<Logo />
	</div>
	{#if !logoOnly}
		<div
			class="main__hamburger"
			class:visible={clickedOnBurger}
			on:click={burgerToggle}
		>
			<span class="bar" />
			<span class="bar" />
			<span class="bar" />
		</div>

		{#if clickedOnBurger}
			<div class="links-menu" class:visible={clickedOnBurger} in:fade out:fade>
				<a href="/" class:active={url === '/'} in:fade={{ delay: 300 }}>home</a>
				<a
					href="/research"
					class:active={url === '/research'}
					in:fade={{ delay: 500 }}>research</a
				>
			</div>
		{/if}

		<div class="links-menu desktop">
			<a href="/" class:active={url === '/'}>home</a>
			<a href="/research" class:active={url === '/research'}>research</a>
		</div>
	{/if}
</header>

<style>
	.main__hamburger {
		transition: transform 0.2s ease;
		display: none;
		z-index: 100;
		cursor: pointer;
	}
	.main__hamburger .bar {
		transition: transform 0.5s ease, opacity 0.5s ease;
	}
	.main__hamburger:hover {
		opacity: 0.75;
	}
	.main__hamburger > .bar {
		display: block;
		width: 3rem;
		height: 3px;
		margin: 5px auto;
		transition: all 0.2 ease;
		background-color: var(--colour-blossom);
	}
	header {
		flex-direction: row;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 1rem;
		border-bottom: 2px solid var(--colour-blossom);
		border-radius: 0.5px;
	}
	.links-menu > a {
		font-weight: 400;
	}

	a.active {
		font-weight: 800 !important;
	}
	.links-menu {
		margin: 0.8rem 0rem 0.5rem 0rem;
		text-transform: uppercase;
		font-size: 1.75rem;
		/* letter-spacing: .5px; */
		font-family: 'forma-djr-banner', -apple-system, BlinkMacSystemFont, 'Segoe UI',
			Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-weight: 600;
		margin-right: 1em;
	}

	.links-menu > a:not(:nth-child(1)) {
		margin: 0rem 0rem 0rem 1rem !important;
	}
	.h-container {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	@media all and (max-width: 600px) {
		.main__hamburger {
			display: block;
		}
		.links-menu {
			display: none;
			opacity: 0;
		}

		.links-menu.visible {
			background-color: var(--colour-bg);
			height: 100vh;
			width: 100%;
			position: fixed;
			z-index: 2;
			top: 0;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			opacity: 1;
			gap: 2rem;
			margin: 0 -3rem;
		}
		.links-menu > a:not(:nth-child(1)) {
			margin: 0rem 0rem 0rem 0rem !important;
		}
		.main__hamburger.visible .bar:nth-child(2) {
			opacity: 0;
		}

		.main__hamburger.visible .bar:nth-child(1) {
			transform: translateY(8px) rotate(45deg);
		}
		.main__hamburger.visible .bar:nth-child(3) {
			transform: translateY(-8px) rotate(315deg);
		}
	}
</style>
