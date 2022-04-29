<script>
    import { onMount } from 'svelte';
    import Logo from "./Logo.svelte";
    let url = '';
    onMount(() => {url = window.location.pathname;} );

</script>

<header>
    <div class="h-container" >
        <Logo/>
        <h1 class="h1 branding">suraj<br>goraya.</h1>
    </div>
    <div class="h-container-internal">
        <!-- <h2 class="h2 by-line">
            5th year computer science student, making music and coding things.
        </h2> -->
        <hr>
        <div class="links-menu">
            <a href="/" class:active="{url === '/'}">home</a>
            <!-- <a href='/research' class:active="{url === '/research'}">research</a> -->
        </div>
        <hr/>
    </div>
</header>

<style>
    .links-menu > a {
        font-weight: 400;
    }

    a.active {
        font-weight: 800 !important;
    }
    .links-menu {
        margin: 0.8rem 0rem 0.5rem 0rem;
        text-transform: uppercase;
        font-size: 1.5rem;
        /* letter-spacing: .5px; */
        font-family: 'forma-djr-banner', -apple-system, BlinkMacSystemFont, 'Segoe UI',
            Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 600;
    }

  

    .links-menu > a:not(:nth-child(1)) {
        margin: 0rem 0rem 0rem 0.5rem !important;
    }

    header {
        width: 100%;
    }
    .branding {
        margin: -0.75rem 0 0 1rem;
        line-height: 2.75rem;
        text-align: left;
    }
    .by-line {
        font-size: 2rem;
        margin: 0.5rem 0 0.5rem 0;
    }
    .h-container {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .h-container-internal{
        margin-top: 0.5rem;
        flex: 1 ;
        width: 100%;
    }
</style>