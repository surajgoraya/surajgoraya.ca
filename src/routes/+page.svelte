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
		class="flex pb-24 flex-col gap-2 lg:flex-row lg:justify-between lg:items-center relative z-10"
	>
		<div class="flex-[0.5]">
			<h1 class="font-branding font-bold leading-tight text-2xl">hey! <br />i'm suraj, a</h1>
			<h2 class="font-branding tracking-wide font-light leading-snug text-xl lg:text-4xl">
				{`computer science graduate student, researching`}
				<span class=" text-brand-blue">{`design systems`}</span>,
				<span class=" text-brand-blue">{`human computer interaction`}</span>
				{`and`} <span class="text-brand-blue">{`UX!`}</span>
				<span class="text-lg font-branding"
					><br />{`(also occasionally coding things and making music)`}</span
				>
			</h2>
		</div>
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img
			src="perma/cover.jpg"
			alt="A black and white photo of Suraj, a turbaned man, with a short beard, standing looking down in a stairwell, surrounded with concrete walls. There appears to be a window just above his head, filled with grass and a bench."
			class="hidden lg:block flex-[0.25] w-1 aspect-square object-cover"
		/>
	</Container>
</section>
<section id="work">
	<Container class={'mt-12 pb-12'}>
		<h1
			class="font-branding font-black text-brand-dark text-[3rem] -mb-8 -mt-4 lg:mt-8 lg:text-[4rem] lg:-mb-12 opacity-20"
		>
			WORK:
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
					alt={snip.alt}
					url={snip.url}
					ongoing={snip.ongoing}
				/>
			{/each}
		</div>
	</Container>
</section>
