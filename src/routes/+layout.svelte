<script>
	import Footer from '$lib/components/Footer.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import { onMount } from 'svelte';
	import '../app.css';
	import 'locomotive-scroll/dist/locomotive-scroll.css';
	import LocomotiveScroll from 'locomotive-scroll';

	onMount(() => {
		const locomotiveScroll = new LocomotiveScroll({
			lenisOptions: {
				wrapper: window,
				content: document.documentElement,
				lerp: 0.1,
				duration: 1,
				orientation: 'vertical',
				gestureOrientation: 'vertical',
				smoothWheel: true,
				wheelMultiplier: 1,
				touchMultiplier: 2,
				easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // https://www.desmos.com/calculator/brs54l4xou
			}
		});
	});
</script>

<Menu />
<slot id="body" class="data-scroll" />
<Footer />
