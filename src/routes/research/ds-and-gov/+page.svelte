<script>
	import Footer from '$lib/Components/Footer.svelte';
	import { fly } from 'svelte/transition';
	import Top from '$lib/Components/Top.svelte';
</script>

<svelte:head>
	<title>suraj goraya - research</title>
	<meta
		name="description"
		content="During my final year at University I was able to take a course which let undergraduate students explore their own independent computer science project, this resulted in a cursory look into design systems and their use in e-Government initiatives."
	/>
	<meta
		name="keywords"
		content="Design Systems, e-Government, Government of Canada, Government of the United Kingdom, undergraduate research, Canadian Digital Service, Government Digital Service, University of Guelph"
	/>
	<meta name="author" content="Suraj Goraya" />
</svelte:head>

<body in:fly={{ y: -50, duration: 250, delay: 300 }} out:fly={{ y: -50, duration: 250 }}>
	<Top />
	<main>
		<h1 class="top-highlight">RESEARCH</h1>
		<h2 class="h1">Design Systems and Government</h2>
		<h5 class="h2 subtitle">
			<i class="bi bi-arrow-return-right" /> undergraduate<i
				class="bi bi-arrow-right-circle"
			/> design systems
		</h5>
		<h6 class="h2 publish_time">
			<i class="bi bi-clock-history" /> &nbsp; PUBLISHED may 2022
		</h6>
		<p>
			During my final year at University I was able to take a course which let
			undergraduate students explore their own independent computer science
			project. This project could theoretically be anything (app, website), however
			was commonly a thesis or research project.
		</p>
		<p>
			Under the supervision of a professor which specialized in Human Computer
			Interaction (<abbr title="Human Computer Interaction">HCI</abbr>) research I
			was able to undertake a research project exploring Design Systems. More
			specifically, out of my desire to combine my interest in politics and the
			public sector, I looked at Design Systems and their use within governments
			for so-called <em>"e-Government"</em> initiatives.
		</p>
		<p>
			This cursory look into design systems and their use in e-Government
			initiatives resulted in the paper & presentation below, entitled:
			<em
				>An Analysis Into Design Systems, Their Evolution And Their Use In
				Government</em
			>. This paper and presentation provides a quick overview and description of
			Design Systems and their uses and compares design systems used by the
			Government of Canada, as well as the Government of the United Kingdom,
			comparing them to industry leaders such as the Material Design System. The
			abstract is listed below.
		</p>
		<h6 class="mini_headings">DOWNLOADS</h6>
		<div class="downloads">
			<a
				href="https://files.surajgoraya.ca/research/GORAYAS-An_Analysis_Into_Design%20Systems_And_Government.pdf"
				target="_blank"
				><i class="bi bi-file-earmark-arrow-down-fill" /> GORAYAS-An_Analysis_Into_Design
				Systems_And_Government.pdf</a
			>
			<a href="https://files.surajgoraya.ca/research/GORAYAS-CIS4900-Presentation.pdf" target="_blank"
				><i class="bi bi-file-earmark-arrow-down-fill" /> GORAYAS-CIS4900-Presentation.pdf</a
			>
		</div>
		<h6 class="mini_headings">ABSTACT</h6>
		<blockquote>
			Internet use over the past twenty years has grown at an exponential rate
			worldwide and by all estimates, shows no signs of stopping. Canada alone, saw
			nearly 57% of households connected to the Internet in 2003, with that number
			nearly doubling to 92% in just over two decades, in 2020. This
			ever-increasing rate of adoption has pushed many governments to transition
			their traditionally offline presence, online. This, however, has presented a
			new set of challenges for these traditionally offline organizations to
			tackle; how do you have a user friendly, unified, and consistent presence in
			the digital realm? The answer to this complex question for many governments
			in 2022 is to follow in the path of industry and take on creating their own
			design systems to manage and unify their digital presence. This paper aims to
			explore what exactly design systems are, their history, what constitutes a
			“basic design system”, as well as exploring the current design system created
			by the Government of Canada. Additionally, this paper will compare the design
			system offered by the Government of Canada to that offered by the Government
			of the United Kingdom and by industry, with the aim of acting as a primer
			into design systems, analyzing their current state in government (with
			suggestions of improvements), and exploring the challenges they face to
			improve them.
		</blockquote>
	</main>
	<Footer />
</body>

<style>
	
	.downloads {
		margin-top: 1em;
		padding: 0rem 0;
		gap: 1.5rem;
		display: flex;
		flex-direction: column;
		margin-bottom: -1rem;
	}
</style>
