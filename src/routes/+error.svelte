<script>
	import { page } from '$app/stores';
	import Top from '$lib/Components/Top.svelte';
</script>



<svelte:head>
	<title>{`suraj goraya | ${$page.error.message.toLocaleLowerCase()}`}</title>
</svelte:head>
<body>
	<main>
		<Top logoOnly={false}/>
		<div class="main">
			<h4><b>{$page.status}</b> | {$page.error.message}</h4>
			<br />
			<p>Looks like something went wrong, don't worry though! You can still find your way back home by clicking below!</p>
			<br />
		</div>
		<div class="larr">
			<a href="/">&larr; Head home?</a>
		</div>
	</main>
</body>

<style>
	h4{
		font-weight: 300;
	}
	div.main {
		opacity: 0.5;
		padding: 4rem;
		flex-direction: column;
		display: flex;
		align-items: center;
		justify-content: center;
		align-content: center;
	}
	div.larr {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
</style>
