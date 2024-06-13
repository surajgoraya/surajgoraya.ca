<script>
	import Container from '$lib/components/core/Container.svelte';
	import ItemList from '$lib/components/portfolio/ItemList.svelte';
</script>

<div id="header" class="bg-brand-white">
	<Container class={`pt-28 lg:pb-0`}>
		<div class="flex lg:flex-row flex-col-reverse mb-4 gap-8 items-center">
			<div class="flex-1 flex flex-col gap-2">
				<h1 class="font-branding lg:text-5xl text-3xl font-bold tracking-wider uppercase">
					ASSETS'24 DESIGN SYSTEM AND WEBSITE
				</h1>
				<h2 class="font-sans">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt sed lorem mattis
					malesuada. In ut enim tempus, condimentum purus vitae, accumsan dui.
				</h2>
				<span class="font-sans italic tracking-wide opacity-85 text-xs my-4"
					>{`design systems · UI/UX design · development`}</span
				>
			</div>
			<div class="flex-[1.75] w-screen lg:w-auto">
				<img src={`/assets/works/assets-2024/hero.jpg`} alt="s" class="aspect-video object-cover w-full min-w-screen lg:ml-8 !h-full !min-h-full" />
			</div>
		</div>
	</Container>
</div>
<div id="metadata">
	<Container class={'flex gap-8 justify-center lg:justify-between lg:flex-row flex-col my-8 lg:m-32'}>
		<ItemList id={`team`} title={'Team'} list={['Suraj Goraya', 'Jaipreet Singh', 'Ryan Paul']} />
		<ItemList id={`timeline`} title={'Timeline'} list={['October 2023 - Present']} />
		<ItemList
			id={`what`}
			title={'What Did I Do?'}
			list={[
				'Research and Planning',
				'High and Low-Fidelity Prototyping',
				'UI Design',
				'Development and Implementation'
			]}
		/>
	</Container>
</div>
<div id="problem" class="bg-brand-dark">
	<Container class={'text-brand-white py-8'}>
		<h1
			class="font-branding font-black text-4xl lg:text-5xl tracking-wide uppercase"
		>
			Background:
		</h1>
		<div id="content" class="mt-4 mb-4">
			<p>ASSETS or, the ACM SIGACCESS Conference on Computers and Accessibility is  </p>
		</div>
	</Container>
</div>
