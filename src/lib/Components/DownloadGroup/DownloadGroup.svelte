<script>
 import DownloadLink from "./DownloadLink.svelte";
	/**
	 * @typedef {Object} DownloadLinks
	 * @property {string} name Name that appears on the link
	 * @property {string} href URL of the link.
	*/
    /**
     * @type {DownloadLinks[]} A Collection of DownloadLinks
     */
    export let DownloadLinks;
</script>
<div class="downloads">
    {#each DownloadLinks as dl }
		<DownloadLink href={dl.href} name={dl.name}/>
    {/each}
</div>

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