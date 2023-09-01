<script>
	import Footer from './Footer.svelte';
	import { fly, blur, fade } from 'svelte/transition';
	import Top from '$lib/Components/Top.svelte';

	/**
	 * Show only a logo in the header, without the menu bar present
	 * @type {Boolean}
	 */
	let showLogoOnly;

	/**
	 * Show no footer at the bottom of the page
	 * @type {Boolean}
	 */
	let noFooter;

	export {showLogoOnly, noFooter}
</script>

<body
	in:fly={{ y: -15, duration: 250, delay: 300 }}
	out:fly={{ y: -15, duration: 250 }}
>
	<Top logoOnly={showLogoOnly ? showLogoOnly : false} />
	<main in:fade={{ duration: 300, delay: 400 }} out:fade={{ duration: 250 }}>
		<slot />
	</main>
	{#if !noFooter}
		<Footer />
	{/if}
</body>
