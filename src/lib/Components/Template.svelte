<script>
	import Footer from './Footer.svelte';
	import { fly, blur, fade } from 'svelte/transition';
	import Top from '$lib/Components/Top.svelte';
	import SkipToMain from './SkipToMain.svelte';

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

	export { showLogoOnly, noFooter };
</script>

<!-- <SkipToMain /> -->
<div
	in:fly|global={{ y: -15, duration: 250, delay: 300 }}
	out:fly|global={{ y: -15, duration: 250 }}
>
	<Top logoOnly={showLogoOnly ? showLogoOnly : false} />
	<main
		in:fade|global={{ duration: 300, delay: 400 }}
		out:fade|global={{ duration: 250 }}
		id="content"
	>
		<slot />
	</main>
	{#if !noFooter}
		<Footer />
	{/if}
</div>

<style>
	div {
		padding: 13px;
	}
</style>
