<script>
	import { MENU_ITEMS } from '$lib/config/menu.config';
	import Container from './core/Container.svelte';
	import Logo from './branding/Logo.svelte';
	let mmOpen = false;

	// @ts-ignore
	function revealMenu(e) {
		mmOpen = !mmOpen;
	}
</script>

<nav class="fixed top-0 w-full z-40 bg-brand-white backdrop-filter backdrop-blur-lg bg-opacity-75">
	<Container class={'my-4 flex items-center justify-between'}>
		<div
			class="flex flex-col lg:flex-row justify-center lg:justify-between h-14 lg:h-20 lg:items-center w-full"
		>
			<div id="logo-branding" class="w-max">
				<a href="/" aria-label="Home">
					<Logo class={'h-12 lg:h-14'} />
				</a>
			</div>
			<ul
				class="hidden flex-col lg:flex lg:flex-row gap-4 lg:gap-8 lg:items-center font-branding font-bold text-2xl lg:text-xl lg:font-light"
			>
				{#each MENU_ITEMS as menu_item}
					<li class="lg:text-right">
						<a
							class="font-branding tracking-widest underline-offset-4 hover:underline hover:text-tokyo-tower-orange transition duration-300"
							href={menu_item.link}>{menu_item.name}</a
						>
					</li>
				{/each}
			</ul>
		</div>
		<div
			id="lines"
			class="block lg:hidden"
			on:click={revealMenu}
			on:keydown={revealMenu}
			role="button"
			tabindex="0"
		>
			<i
				class={` absolute text-4xl bi bi-list transition-all duration-500 ${mmOpen ? 'opacity-0 ' : 'opacity-100'}`}
			></i>
			<i
				class={` text-4xl bi bi-x-lg transition-all duration-500 ${mmOpen ? 'opacity-100' : 'opacity-0 '}`}
			></i>
		</div>
	</Container>

	<div
		id="mobile-menu"
		aria-hidden={!mmOpen}
		class={`lg:hidden absolute bg-brand-white backdrop-filter h-screen w-screen backdrop-blur-lg bg-opacity-95 transition-allbutheight duration-500 ${
			mmOpen
				? 'z-30 opacity-100'
				: `opacity-0 blur-2xl overflow-hidden !h-0 -translate-y-screen !-z-30`
		}`}
	>
		<Container class={`h-[calc(100%-4rem)] ${mmOpen ? 'z-30' : ' overflow-hidden !-z-30'}`}>
			<ul class="flex flex-col gap-4 justify-center h-full">
				{#each MENU_ITEMS as menu_item, i}
					<li
						class={`text-5xl transition-all translate-y-0 duration-1000 ${mmOpen ? `translate-y-[${i}em]` : ``}`}
					>
						<a
							on:click={revealMenu}
							class="font-branding tracking-widest underline-offset-4 hover:underline hover:text-tokyo-tower-orange transition duration-300"
							href={menu_item.link}>{menu_item.name}</a
						>
					</li>
				{/each}
			</ul>
		</Container>
	</div>
</nav>
