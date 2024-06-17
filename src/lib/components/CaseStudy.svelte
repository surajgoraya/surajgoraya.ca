<script>
	export let title, description;
	export let skills;
	export let url, image;
	export let locked;
	let className = '';
	export let id;
	export { className as class };

	import ButtonLink from './ButtonLink.svelte';
</script>

<div
	class={`flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between w-full min-w-full gap-14 first:my-0 my-12 z-10 ${className}`}
	id={`case-study-${id ? id : Math.random() * 100}`}
>
	<div id="left-panel" class="flex flex-col gap-2 flex-[0.5]">
		<p class="text-brand-dark text-2xl font-sans font-bold">{title}</p>
		<div class="flex gap-2">
			{#each skills as skill, i}
				<span class="text-brand-dark opacity-80"
					>{skills.length >= 1 && i !== skills.length - 1 ? skill + ' ·' : skill}</span
				>
			{/each}
		</div>
		<p class="text-brand-dark">{description}</p>
		{#if locked}
			<div class="mt-4 flex flex-row group relative w-max">
				<div
					class="z-0 -translate-x-2 -translate-y-1 opacity-0 bg-brand-dark h-9 w-1 min-w-1 min-h-9 absolute group-hover:w-[9.25rem] group-hover:opacity-100 transition-all duration-300
			ease-out"
				/>
				<p
					class="z-10 flex text-xl font-branding tracking-widest underline-offset-4 group-hover:text-brand-white transition duration-300 group-hover:cursor-not-allowed"
				>
					{`coming soon`}&nbsp;<i class="bi bi-lock"></i>
				</p>
			</div>
		{:else}
			<div class="mt-4 flex flex-row group relative w-max">
				<div
					class="z-0 -translate-x-2 -translate-y-1 opacity-0 bg-brand-blue h-9 w-1 min-w-1 min-h-9 absolute group-hover:w-32 group-hover:opacity-100 transition-all duration-300
                ease-out"
				/>
				<a
					href={url}
					class="z-10 flex text-xl font-branding tracking-widest underline-offset-4 group-hover:underline group-hover:text-brand-white transition duration-300"
					>{`read more`}&nbsp;<i class="bi bi-arrow-right"></i></a
				>
			</div>
		{/if}
	</div>
	<div class="flex-[0.5]">
		<img class="w-full lg:w-3/4 ml-auto" src={image} />
	</div>
</div>
