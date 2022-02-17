<script>
    import { fade } from 'svelte/transition';

    let vish1 = true;
    let vish5 = true;

    // setTimeout(()=>{
    //     vish1 = true;
    // }, 1000);

    // setTimeout(()=>{
    //     vish5 = true;
    // }, 2500);

    console.log('%c ♥ ', "font-family: 'Helvetica', sans-serif; font-size: 8em; font-weight: 100; color: hsl(355, 52%, 42%); background-color: hsl(0deg 0% 96%); ");
</script>
<svelte:head>
	<title>suraj goraya - home</title>
	<meta
		name="description"
		content="CS student coding things & making music."
	/>
</svelte:head>

<div>
    <main>
        {#if vish1}
        <h1 >hey, it was nice to meet you.</h1>
        {/if}
        {#if vish5}
        <h5 >promise me you'll do amazing things?</h5>
        {/if}
    </main>
</div>

<style>
    @keyframes fadein {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 100%;
        }
    }
    div{
        min-height: 90vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>