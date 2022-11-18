<script>
	let current_year = new Date().getFullYear();
	// export let last_updated;
</script>

<footer>
	<!-- <hr /> -->
	<div class="footer">
		<p class="muted">
			&copy; suraj goraya {current_year}
		</p>
		<p class="muted"><a href="/colophon">made with &hearts;</a></p>
		<!-- <p class="muted"><em>last updated, {last_updated}</em></p> -->
	</div>
</footer>

<style>
	.footer{
		flex-direction: row;
		justify-content: space-between;
	}
	footer {
		
		border-top: 2px solid var(--colour-bg-alt);
		padding-top: 1rem;
        border-radius: 0.5px;
	}
</style>