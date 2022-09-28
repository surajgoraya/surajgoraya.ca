<script context="module">
	import Errors from '$lib/utils/errors';
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}: ${
					error.message ? error.message : Errors[status].error_desc
				}`,
				error_info: Errors[status],
			},
		};
	}
</script>

<script>
	import Top from '$lib/Components/Top.svelte';

	export let title;
	export let error_info;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<body>
	<main>
		<Top logoOnly />
		<h3>{error_info?.error_code}: {error_info?.error_desc}</h3>
		<h6><em>{error_info?.error_top}</em></h6>
		<p>{error_info?.error_detail}</p>
		<div>
			<a href="/">&larr; Head home?</a>
			{#if error_info && error_info.error_code !== undefined}
			<a
				href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/{error_info.error_code}"
				target="_blank">&#8599; What are {error_info.error_code} errors?</a
			>
			{/if}
		</div>
		<br />
	</main>
</body>

<style>
	div {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
</style>
