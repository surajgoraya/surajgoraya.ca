
<script>
 import Template from "$lib/Components/Template.svelte";
import Top from "$lib/Components/Top.svelte";
</script>
<svelte:head>
    <title>suraj goraya - archived</title>
    
    <!--likely don't want this indexed since it's more of a utility page than a page we want google to index.-->
    <meta name="robots" content="noindex">
</svelte:head>

<Template>
<h1>content archived.</h1>
<i><p>Hey there! I'm sorry but the page you requested has been archived, and is no longer available :(.</p></i>
<p>This is likely because the content on the page is old, or maybe from my undergraduate work and is no longer relevant. 
If by chance there's a reason you'd like it to be put back up, please reach out to this email:&nbsp;<i><u> archive at surajgoraya.ca</u></i>. I'd be happy to help!</p>

<p class="highlight">-Nice talking to you! See you around on the Internet! Suraj.</p>
</Template>
<style>
    .highlight {
        font-style: italic;
        color: var(--colour-blossom);
    }
</style>