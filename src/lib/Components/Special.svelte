<script>
	export let message;
</script>

<div role="banner" class="special__banner">
	<p class="special__banner--text">
		{message ? message : 'No message provided'}
	</p>
</div>

<style>
	.special__banner {
		background-color: var(--colour-bg-alt);
        color: var(--colour-text);
		min-width: 100%;
		margin: -2.5rem 0 0 0;
	}
	.special__banner--text {
        font-size: 1.5rem;
		padding: 1rem;
	}
</style>
