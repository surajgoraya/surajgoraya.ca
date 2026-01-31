<script>
	import CaseStudy from '$lib/components/CaseStudy.svelte';
	import ResearchSnipit from '$lib/components/ResearchSnipit.svelte';
	import Container from '$lib/components/core/Container.svelte';
	import SEO from '$lib/components/core/SEO.svelte';
	import { CASE_STUDIES, RESEARCH } from '$lib/config/frontpage.config';
	import { DEFAULTS } from '$lib/config/sitewide.config';
</script>

<SEO title={'home'} description={DEFAULTS.description} />
<section id="hello" class="bg-brand-white lg:min-h-[calc(50%-12rem)] pt-48">
	<Container
		class={`flex pb-24 flex-col gap-2 lg:flex-row lg:justify-between lg:items-center relative z-10 data-scroll data-scroll-speed="0.5"`}
	>
		<div class="flex-[0.5]">
			<h1 class="font-branding font-bold leading-tight text-2xl">hi! <br />i'm suraj, a</h1>
			<h2 class="font-branding tracking-wide font-light leading-snug text-xl lg:text-4xl">
				{`a fullstack developer and designer based in `}<span class=" text-tokyo-tower-orange"
					>{`toronto`}</span
				>. {`i specialize in `}
				<span class=" text-tokyo-tower-orange">{`design systems`}</span>,
				<span class=" text-tokyo-tower-orange">{`human computer interaction`}</span> and,
				<span class=" text-tokyo-tower-orange">{`accessibility`}</span>
				<span class="text-lg font-branding"><br />{`(i also occasionally make music)`}</span>
			</h2>
		</div>
		<img
			src="assets/img/suraj-main.JPG"
			alt="Suraj, a turbaned man, with a short beard, standing looking down in a stairwell, surrounded with concrete walls. There appears to be a window just above his head, filled with grass and a bench."
			class="hidden lg:block flex-[0.25] w-1 aspect-square object-cover"
		/>
	</Container>
</section>
<section id="work">
	<Container class={'mt-12 pb-12'}>
		<h1
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
		</div>
	</Container>
</section>
