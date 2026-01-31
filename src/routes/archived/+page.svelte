<script>
	import Seo from '$lib/components/core/SEO.svelte';
	import { DEFAULTS } from '$lib/config/sitewide.config';
	import SystemPage from '$lib/components/templates/SystemPage.svelte';
</script>

<Seo title={'archived'} description={DEFAULTS.description} noIndex />
<SystemPage>
	<div class="flex flex-col gap-2">
		<i class="bi bi-box2-heart-fill text-5xl opacity-30"></i>
		<h1 class="font-branding font-black text-brand-dark text-[3rem] lg:text-[4rem]">
			{`Archived.`}
		</h1>
		<h2 class="text-brand-dark text-xl font-sans">
			{`Hey there! I'm sorry but the page you requested has been archived, and is no longer available
			:(.`}
		</h2>
		<p class="text-brand-dark text-lg font-sans mt-4">
			This is likely because the content on the page is old, or maybe from my undergraduate work and
			is no longer relevant. If by chance there's a reason you'd like it to be put back up, please
			reach out to this email! Link below. I'd be happy to help!
		</p>
		<p class="font-sans italic mt-2 text-tokyo-tower-orange">
			&mdash; Nice talking to you! See you around on the Internet! Suraj.
		</p>
	</div>
</SystemPage>
