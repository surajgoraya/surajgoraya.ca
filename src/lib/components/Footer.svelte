<script>
	import { MENU_ITEMS } from '$lib/config/menu.config';
	import { SOCIAL_LINKS } from '$lib/config/sitewide.config';
	import Shahi from './branding/Shahi.svelte';
	import Container from './core/Container.svelte';

	import { onMount } from 'svelte';

	onMount(() => {
		const email = document.getElementById('envelope-heart');

		email?.setAttribute(
			'href',
			'm' +
				'a' +
				'i' +
				'l' +
				't' +
				'o' +
				':' +
				'h' +
				'e' +
				'l' +
				'l' +
				'o' +
				'@' +
				's' +
				'u' +
				'r' +
				'a' +
				'j' +
				'g' +
				'o' +
				'r' +
				'a' +
				'y' +
				'a' +
				'.' +
				'c' +
				'a'
		);
	});
</script>

<footer class="bg-brand-darker py-24">
	<Container class={'flex-row'}>
		<div class="flex flex-col lg:flex-row gap-8 justify-between text-brand-white">
			<div class="flex flex-col gap-8">
				<p
					class="text-2xl font-branding tracking-wide font-bold uppercase text-brand-white lg:translate-y-16"
				>
					&copy; {new Date().getFullYear()} suraj goraya //
					<span class="font-punjabi font-bold">ਸੂਰਜ ਗੋਰਾਇਆ</span>
				</p>
				<div class="flex-row gap-8 justify-between hidden lg:flex">
					<Shahi
						class={' stroke-brand-white opacity-10 w-[6rem] relative -translate-y-12 -translate-x-12'}
					/>
					<!-- <img
						alt="The text 'Developed In Canada!' in a pixelated font, next to a Canadian Flag"
						class="fill-brand-white opacity-15 w-40 lg:w-48"
						src="/assets/branding/sg_developedinCA.svg"
					/> -->
				</div>
			</div>
			<div class="flex gap-12">
				<div class="flex flex-col gap-2">
					<p class="font-branding tracking-wide font-bold text-2xl uppercase mb-2">Connect</p>
					<a
						id="envelope-heart"
						class="font-branding tracking-widest lowercase font-normal hover:text-tokyo-tower-orange hover:underline underline-offset-4 transition-colors duration-300"
						href="?"><span class={`bi bi-envelope-heart`}></span>&nbsp;Email</a
					>
					{#each SOCIAL_LINKS as social_link}
						<a
							class="font-branding tracking-widest lowercase font-normal hover:text-tokyo-tower-orange hover:underline underline-offset-4 transition-colors duration-300"
							href={`${social_link.link}?ref=surajgoraya.ca`}
							><span class={`bi bi-${social_link.icon}`}></span>&nbsp;{social_link.site}</a
						>
					{/each}
				</div>
				<div class="font-bold">
					<div class="flex flex-col gap-2">
						<p class="font-branding tracking-wide font-bold text-2xl uppercase mb-2">Menu</p>
						{#each MENU_ITEMS as menu_link}
							<a
								class="font-branding tracking-widest lowercase font-normal hover:text-tokyo-tower-orange hover:underline underline-offset-4 transition-colors duration-300"
								href={menu_link.link}>{menu_link.name}</a
							>
						{/each}
					</div>
				</div>
			</div>
		</div>
		<div class="flex-row gap-8 mt-12 flex lg:hidden">
			<Shahi class={' stroke-brand-white opacity-15 w-[3rem]'} />
		</div>
	</Container>
</footer>
