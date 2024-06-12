<script>
	import { MENU_ITEMS } from '$lib/config/menu.config';
	import Container from './core/Container.svelte';
	import Logo from './branding/Logo.svelte';

	function revealMenu() {}
</script>

<nav class="fixed top-0 w-full z-40 bg-brand-white backdrop-blur-sm">
	<Container class={'my-4 flex items-center justify-between'}>
		<div class="flex flex-col lg:flex-row justify-center lg:justify-between h-14 lg:h-20 lg:items-center w-full">
			<div id="logo-branding">
				<a href="/">
					<Logo class={'h-12 lg:h-14'} />
				</a>
			</div>
			<ul
				class="hidden flex-col lg:flex lg:flex-row gap-4 lg:gap-8 lg:items-center font-branding font-bold text-2xl lg:text-xl lg:font-light"
			>
				{#each MENU_ITEMS as menu_item}
					<li class="lg:text-right">
						<a
							class="font-branding tracking-widest underline-offset-4 hover:underline hover:text-brand-blue transition duration-300"
							href={menu_item.link}>{menu_item.name}</a
						>
					</li>
				{/each}
			</ul>
		</div>
		<div id="lines" class="block lg:hidden">
			<i class="text-4xl bi bi-list"></i>
		</div>
	</Container>
</nav>
