<script>
	import Footer from './Footer.svelte';
	import { fly, blur, fade } from 'svelte/transition';
	import Top from '$lib/Components/Top.svelte';

	//TODO: Allow for logoOnly to be specified by caller, as well as noFooter.
</script>

<body
	in:fly={{ y: -15, duration: 250, delay: 300 }}
	out:fly={{ y: -15, duration: 250 }}
>
	<Top logoOnly={false} />
	<main in:fade={{ duration: 300, delay: 400 }} out:fade={{ duration: 250 }}>
		<slot />
	</main>
	<Footer />
</body>
