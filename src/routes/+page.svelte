<script>
	import CaseStudy from '$lib/components/CaseStudy.svelte';
	import ResearchSnipit from '$lib/components/ResearchSnipit.svelte';
	import Container from '$lib/components/core/Container.svelte';
	import SEO from '$lib/components/core/SEO.svelte';
	import { CASE_STUDIES, RESEARCH } from '$lib/config/frontpage.config';
	import { DEFAULTS } from '$lib/config/sitewide.config';
</script>

<SEO description={DEFAULTS.description} />
<section id="hello" class="bg-brand-white lg:min-h-[calc(50%-12rem)] pt-48">
	<Container
		class={`flex pb-24 flex-col gap-2 lg:flex-row lg:justify-between lg:items-center relative z-10 data-scroll data-scroll-speed="0.5"`}
	>
		<div class="flex-[0.5]">
			<h1 class="font-branding font-bold leading-tight text-2xl">hello!</h1>
			<h2 class="font-branding tracking-wide font-light leading-snug text-xl lg:text-4xl">
				{`my name is suraj, i'm a `}<span class=" text-tokyo-tower-orange"
					>{`fullstack developer`}</span
				>{`, `}<span class=" text-tokyo-tower-orange">{`designer`}</span>{` and `}<span
					class=" text-tokyo-tower-orange"
					><abbr
						title="human-computer interaction"
						class="underline-offset-4 decoration-2 cursor-help">HCI</abbr
					>{` researcher`}</span
				>
				based in toronto.
				<div class="mt-2">
					i specialize in
					<span class=" text-tokyo-tower-orange">{`design systems`}</span>,
					<span class=" text-tokyo-tower-orange">{`human computer interaction`}</span> and,
					<span class=" text-tokyo-tower-orange">{`accessibility`}</span>
					<span class="text-lg font-branding"><br />{`(i also occasionally make music)`}</span>
				</div>
			</h2>
		</div>
		<img
			src="assets/img/suraj-main.JPG"
			alt="Suraj, a turbaned man, with a short beard, standing looking down in a stairwell, surrounded with concrete walls. There appears to be a window just above his head, filled with grass and a bench."
			class="hidden lg:block flex-[0.25] w-1 aspect-square object-cover"
		/>
	</Container>
</section>
<section>
	<Container class={'mt-12 pb-12'}>
		<h1
			id="work"
			class="font-branding font-black text-brand-dark text-[3rem] -mb-8 -mt-4 lg:mt-8 lg:text-[4rem] lg:-mb-12 opacity-20"
		>
			WORKED ON:
		</h1>
		{#each CASE_STUDIES as study, i}
			<CaseStudy
				title={study.title}
				description={study.description}
				skills={study.skills}
				url={study.url}
				id={i}
				image={study.image}
				locked={study.locked}
				alt={study.alt}
			/>
		{/each}
	</Container>
</section>
<section id="research" class="bg-brand-dark">
	<Container class={'mt-12 pb-24'}>
		<h1
			class="font-branding font-black text-white text-[3rem] lg:text-[4rem] pt-12 pb-8 opacity-20"
		>
			RESEARCH:
		</h1>
		<div class="flex flex-col gap-8">
			{#each RESEARCH as snip, i}
				<ResearchSnipit
					title={snip.title}
					description={snip.description}
					area={snip.area}
					type={snip.type}
					image={snip.image}
					alt={snip.alt ?? ''}
					url={snip.url}
					ongoing={snip.ongoing}
				/>
			{/each}
			<div class="mt-8 flex flex-row group relative w-max self-end">
				<div
					class="z-0 -translate-x-2 -translate-y-1 opacity-0 bg-tokyo-tower-orange h-9 w-1 min-w-1 min-h-9 absolute group-hover:w-[104%] group-hover:opacity-100 transition-all duration-300
                ease-out"
				></div>
				<a
					href={`https://scholar.google.com/citations?user=2l81oYMAAAAJ&hl=en&ref=surajgoraya.ca`}
					target="_blank"
					class=" text-brand-white z-10 flex text-xl font-branding tracking-widest underline-offset-4 group-hover:text-brand-white transition duration-300"
					>{`see Google Scholar`}&nbsp;<i class="bi bi-arrow-right"></i>&nbsp;</a
				>
			</div>
		</div>
	</Container>
</section>
