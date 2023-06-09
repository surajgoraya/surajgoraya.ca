<script>
	export let href;
	export let name;
</script>

<a
	class="downloads__downloadLink"
	href={`${href}`}
	target="_blank">
    <i class="bi bi-file-earmark-arrow-down-fill" />&nbsp;{`${name}`}</a
>

<style>
	.downloads__downloadLink {
		width: max-content;
	}
	.downloads__downloadLink:hover{
		border: none;
	}
	
</style>