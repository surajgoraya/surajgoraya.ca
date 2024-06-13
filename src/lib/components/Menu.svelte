<script>
	import { MENU_ITEMS } from '$lib/config/menu.config';
	import Container from './core/Container.svelte';
	import Logo from './branding/Logo.svelte';
	let mmOpen = false;

	function revealMenu(e) {
		mmOpen = !mmOpen;
	}
</script>

<nav class="fixed top-0 w-full z-40 bg-brand-white backdrop-filter backdrop-blur-lg bg-opacity-95">
	<Container class={'my-4 flex items-center justify-between'}>
		<div
			class="flex flex-col lg:flex-row justify-center lg:justify-between h-14 lg:h-20 lg:items-center w-full"
		>
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
		<div
			id="lines"
			class="block lg:hidden"
			on:click={revealMenu}
			on:keydown={revealMenu}
			role="button"
			tabindex="0"
		>
			<i class="text-4xl bi bi-list"></i>
		</div>
	</Container>
	<div
		id="mobile-menu"
		class:spin-slow={mmOpen === true}
		class={`lg:hidden absolute z-30 bg-brand-white h-screen w-screen backdrop-filter backdrop-blur-lg bg-opacity-95 ${mmOpen ? 'block' : 'hidden'}`}
	>
		<Container class={'h-[calc(100%-4rem)]'}>
			<ul class="flex flex-col gap-4 justify-center h-full">
				{#each MENU_ITEMS as menu_item}
					<li class="text-5xl">
						<a
							on:click={revealMenu}
							class="font-branding tracking-widest underline-offset-4 hover:underline hover:text-brand-blue transition duration-300"
							href={menu_item.link}>{menu_item.name}</a
						>
					</li>
				{/each}
			</ul>
		</Container>
	</div>
</nav>
