<script>
	export let id, title, list;
</script>

<div id={`${id}`} class="">
	<h1 class="font-branding tracking-wider text-2xl font-bold uppercase">{title}</h1>
	<div class="flex flex-col gap-2 mt-2">
		{#each list as item}
			<p>{item}</p>
		{/each}
	</div>
</div>
