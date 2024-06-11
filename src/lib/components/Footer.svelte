<script>
	import { MENU_ITEMS } from '$lib/config/menu.config';
	import { SOCIAL_LINKS } from '$lib/config/sitewide.config';
	import Shahi from './branding/Shahi.svelte';
	import Container from './core/Container.svelte';
</script>

<footer class="bg-brand-darker py-24 text-brand-white">
	<Container class={'flex flex-col lg:flex-row gap-8 justify-between'}>
		<div class="flex flex-col gap-8">
			<p class="text-2xl font-branding tracking-wide font-bold uppercase text-brand-white">
				&copy; {new Date().getFullYear()} Suraj Goraya
			</p>
			<Shahi class={'hidden lg:block stroke-brand-white opacity-15 w-[4rem]'} />
		</div>
		<div class="flex gap-12">
			<div class="flex flex-col gap-2">
				<p class="font-branding tracking-wide font-bold text-2xl uppercase mb-2">Connect</p>
				{#each SOCIAL_LINKS as social_link}
					<a
						class="font-branding tracking-widest capitalize font-normal hover:text-brand-blue hover:underline underline-offset-4 transition-colors duration-300"
						href={social_link.link}
						><span class={`bi bi-${social_link.icon}`}></span>&nbsp;{social_link.site}</a
					>
				{/each}
			</div>
			<div class="font-bold">
				<div class="flex flex-col gap-2">
					<p class="font-branding tracking-wide font-bold text-2xl uppercase mb-2">Menu</p>
					{#each MENU_ITEMS as menu_link}
						<a
							class="font-branding tracking-widest capitalize font-normal hover:text-brand-blue hover:underline underline-offset-4 transition-colors duration-300"
							href={menu_link.link}>{menu_link.name}</a
						>
					{/each}
				</div>
			</div>
		</div>
	</Container>
</footer>
