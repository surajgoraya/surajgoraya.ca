<script>
	/**
	 * @type {String}
	 */
	export let title, description, type;
	export let image, url;
	export let alt = '';
	export let area;
	export let ongoing = false;
</script>

{#if ongoing}
	<div
		class="group transition-all duration-500 flex gap-4 px-2 lg:px-4 justify-between items-center text-brand-white border-t-[1px] border-b-[1px] py-4 hover:text-brand-dark hover:bg-brand-white hover:cursor-not-allowed"
	>
		<div class="flex flex-col flex-grow gap-1">
			<p class="font-sans font-extralight uppercase text-xs">{type} {` · In progress`}</p>
			<h2
				class="font-sans font-bold text-lg lg:text-xl"
				aria-label={`A censored piece of text displaying white bars with the words ${title} displaying in-between`}
			>
				{`██████ ██████ ██ ${title.toUpperCase()} █████`}
			</h2>
			<p class="font-sans font-light text-sm lg:text-md">
				{`██████ ██████ ██████ ██████ ██████ ██ █████`}
			</p>
			<!-- <p>{area}</p> -->
			<!-- <a href={url}>{`Read Case Study`}</a> -->
		</div>
		<i class="text-xl lg:text-3xl"></i>
	</div>
{:else}
	<a href={url}>
		<div
			class="group transition-all duration-500 flex gap-4 px-2 lg:px-4 justify-between items-center text-brand-white border-t-[1px] border-b-[1px] py-4 hover:text-brand-dark hover:bg-brand-white"
		>
			<div class="flex gap-4 items-center">
				{#if image}
				<div class="hidden lg:block">
					<img class="w-[100px] h-[100px] flex-none" {alt} src={image} />
				</div>
				{/if}
				<div class="flex flex-col flex-grow gap-1">
					<p class="font-sans font-extralight uppercase text-xs">{type}</p>
					<p class="font-sans font-bold text-lg lg:text-xl">{title}</p>
					<p class="font-sans font-light text-sm lg:text-md">{description}</p>
					<!-- <p>{area}</p> -->
					<!-- <a href={url}>{`Read Case Study`}</a> -->
				</div>
			</div>
			<i class="text-xl lg:text-3xl bi bi-arrow-right"></i>
		</div>
	</a>
{/if}
