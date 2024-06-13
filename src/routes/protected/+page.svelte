<script>
	// @ts-nocheck
	import Container from '$lib/components/core/Container.svelte';
</script>

<div class=" bg-brand-white">
	<Container class={'py-56 h-[calc(100vh-22rem)] flex flex-row items-center'}>
		<div class="flex flex-col gap-2">
			<i class="bi bi-balloon-heart text-5xl opacity-30"></i>
			<h1 class="font-branding font-black text-brand-dark text-[3rem] lg:text-[4rem]">
				{`Protected,`}
			</h1>
			<p class="text-brand-dark text-2xl font-sans">
                {`This case study is currently protected as it may still be an ongoing project. To request access, please let me know`}
			</p>
		</div>
	</Container>
</div>
