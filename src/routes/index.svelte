<script>

	import Footer from '../lib/Components/Footer.svelte';
	import { fly } from 'svelte/transition';
	import Top from '$lib/Components/Top.svelte';
</script>

<svelte:head>
	<title>suraj goraya - home</title>
	<meta
		name="description"
		content="Fifth year Computer Science student coding things & making music."
	/>
</svelte:head>

<body 
in:fly="{{ y: -50, duration: 250, delay: 300 }}"
out:fly="{{ y: -50, duration: 250 }}" 
>
	<Top/>
	<main>
		<blockquote>
			"[suraj is] a...uh... pretty cool guy, I guess?" &#8212; <em
				>Midnight (dog)</em
			>
		</blockquote>
		<h6 class="h1"><em>It's me! The "pretty cool guy" guy!</em></h6>
		<p>
			I'm a fifth year Computer Science student, with an interest in UI/UX, HCI,
			and computer ethics. When I'm not staring at a screen... I like to stare at a
			screen some more and
			<a href="http://music.surajgoraya.ca">make music</a> from time to time!
		</p>
		<p>
			There's not much here, so I suggest checking out <a
				href="https://github.com/surajgoraya">my GitHub</a
			>
			<sup>&nbsp;(and preparing yourself to be disappointed)</sup>
		</p>
	</main>
	<Footer />
</body>
