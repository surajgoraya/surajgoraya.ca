<script>
	// @ts-nocheck
	import Container from '$lib/components/core/Container.svelte';
	import Seo from '$lib/components/core/SEO.svelte';
	import SystemPage from '$lib/components/templates/SystemPage.svelte';
	import { DEFAULTS } from '$lib/config/sitewide.config';
</script>

<Seo title={'protected'} description={DEFAULTS.description} />
<SystemPage>
	<div class="flex flex-col gap-2">
		<i class="bi bi-balloon-heart-fill text-6xl opacity-30"></i>
		<h1 class="font-branding font-black text-brand-dark text-[3rem] lg:text-[4rem]">
			{`Protected,`}
		</h1>
		<p class="text-brand-dark text-2xl font-sans">
			{`This case study is currently protected as it may still be an ongoing project. To request access, please let me know.`}
		</p>
	</div>
</SystemPage>
