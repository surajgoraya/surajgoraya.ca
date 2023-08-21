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
		text-overflow: ellipsis;
		white-space: nowrap;
  		overflow: hidden;
	}
	.downloads__downloadLink:hover{
		border: none;
	}
	
</style>