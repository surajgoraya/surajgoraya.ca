<script>
	import Container from '$lib/components/core/Container.svelte';
	import Seo from '$lib/components/core/SEO.svelte';
	import { DEFAULTS } from '$lib/config/sitewide.config';
</script>

<Seo title={'archived'} description={DEFAULTS.description} noIndex/>
<div class=" bg-brand-white">
	<Container class={'py-56 h-[calc(100vh-22rem)] flex flex-row items-center'}>
		<div class="flex flex-col gap-2">
			<i class="bi bi-box2-heart-fill text-5xl opacity-30"></i>
			<h1 class="font-branding font-black text-brand-dark text-[3rem] lg:text-[4rem]">
				{`Archived,`}
			</h1>
			<h2 class="text-brand-dark text-xl font-sans">
				{`Hey there! I'm sorry but the page you requested has been archived, and is no longer available
			:(.`}
			</h2>
			<p class="text-brand-dark text-lg font-sans mt-2">
				This is likely because the content on the page is old, or maybe from my undergraduate work
				and is no longer relevant. If by chance there's a reason you'd like it to be put back up,
				please reach out to this email:&nbsp;<i><u> archive [at] surajgoraya.ca</u></i>. I'd be happy
				to help!
			</p>
            <p class="font-sans italic mt-8">-Nice talking to you! See you around on the Internet! Suraj.</p>
		</div>
	</Container>
</div>