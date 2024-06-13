<script>
	import ButtonLink from '$lib/components/ButtonLink.svelte';
	import CaseStudy from '$lib/components/CaseStudy.svelte';
	import ResearchSnipit from '$lib/components/ResearchSnipit.svelte';
	import Shahi from '$lib/components/branding/Shahi.svelte';
	import Container from '$lib/components/core/Container.svelte';
	import { CASE_STUDIES, RESEARCH } from '$lib/config/frontpage.config';
</script>

<section
	id="hello"
	class="bg-brand-white lg:min-h-[calc(50%-12rem)] pt-48"
>
	<Container
		class="flex pb-24 flex-col gap-2 lg:flex-row lg:justify-between lg:items-center relative z-10"
	>
		<div class="flex-[0.5]">
			<h1 class="font-branding font-bold leading-tight text-2xl">hey! <br />i'm suraj, a</h1>
			<h2 class="font-branding tracking-wide font-light leading-snug text-xl lg:text-4xl">
				{`computer science graduate student, researching`}
				<span class=" text-brand-blue">{`design systems`}</span>,
				<span class=" text-brand-blue">{`human computer interaction`}</span>
				{`and`} <span class="text-brand-blue">{`UX`}</span>,
				<span class="text-lg font-"
					><br />{`(also occasionally coding things and making music)`}</span
				>
			</h2>
		</div>
		<img
			src="perma/cover.jpg"
			alt="s"
			class="hidden lg:block flex-[0.25] w-1 aspect-square object-cover"
		/>
		<!-- <Shahi class={'stroke-brand-dark absolute top-0 -translate-y-14 -translate-x-2 z-0 w-20 opacity-5 lg:hidden'}/> -->
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
			/>
		{/each}
		<!-- <div class="w-full min-w-full flex justify-end">
			<ButtonLink href={'/work'}>see all work</ButtonLink>
		</div> -->
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
					url={snip.url}
					ongoing={snip.ongoing}
				/>
			{/each}
		</div>
		<!-- <div class="w-full min-w-full flex justify-end mt-12">
			<ButtonLink class={'text-brand-white'} href={'/research'}>see all research</ButtonLink>
		</div> -->
	</Container>
</section>
