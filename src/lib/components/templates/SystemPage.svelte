<script>
	import Container from '$lib/components/core/Container.svelte';
</script>

<div class="bg-brand-white">
	<Container class={'py-56 min-h-[calc(100vh-22rem)] flex flex-row items-center'}>
		<slot />
	</Container>
</div>
