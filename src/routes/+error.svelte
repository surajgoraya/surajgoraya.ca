<script>
	// @ts-nocheck

	import { page } from '$app/stores';
	import Container from '$lib/components/core/Container.svelte';
	import Seo from '$lib/components/core/SEO.svelte';
	import SystemPage from '$lib/components/templates/SystemPage.svelte';
	import { DEFAULTS } from '$lib/config/sitewide.config';
</script>

<Seo title={'error'} description={DEFAULTS.description} />
<SystemPage>
	<div class="flex flex-col gap-2">
		<i class="bi bi-heartbreak-fill text-5xl opacity-30"></i>
		<h1 class="font-branding font-black text-brand-dark text-[3rem] lg:text-[4rem]">
			{$page.status}
		</h1>
		<p class="text-brand-dark text-2xl font-sans">
			{$page.error.message ? `${$page.error.message}.` : 'Something went wrong.'}
		</p>
	</div>
</SystemPage>
