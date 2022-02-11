<script>
	import Logo from '../lib/Components/Logo.svelte';
	import Footer from '../lib/Components/Footer.svelte';
	import { fly } from 'svelte/transition';
</script>

<svelte:head>
	<meta
		name="description"
		content="Fifth year Computer Science student coding things & making music."
	/>
	<title>suraj goraya - home</title>
</svelte:head>

<body>
	<header>
		<div class="h-container" id="logo">
			<Logo />
			<div>
				<h1 class="main-line">suraj goraya.</h1>
				<h4 class="by-line">5th year computer science student, making music and coding things.</h4>
				<!-- <div class="links-menu">
                    <a href='/words'>words</a>
                </div> -->
			</div>
		</div>
	</header>
	<main>
		<blockquote>
			"[suraj is] a...uh... pretty cool guy, I guess?" &#8212; <em>Midnight (dog)</em>
		</blockquote>
		<h6><em>It's me! The "pretty cool guy" guy!</em></h6>
		<p>
			I'm a fifth year Computer Science student, with an interest in UI/UX, HCI, and computer
			ethics. When I'm not staring at a screen... I like to stare at a screen some more and
			<a href="http://music.surajgoraya.ca">make music</a> from time to time!
		</p>
		<p>
			There's not much here, so I suggest checking out <a href="https://github.com/surajgoraya"
				>my GitHub</a
			>
			<sup>&nbsp;(and preparing yourself to be disappointed)</sup>
		</p>
	</main>
	<Footer />
</body>
