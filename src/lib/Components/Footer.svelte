<script>
 import SurajDrawing from "./Suraj-Drawing.svelte";
	let current_year = new Date().getFullYear();
</script>

<footer>
	<div class="footer">
		<div class="muted logo"><SurajDrawing/></div>
		<p class="muted">
			&copy; suraj goraya {current_year}
		</p>
		<!-- <p class="muted"><a href="/colophon">made with &hearts;</a></p> -->
		<!-- <p class="muted"><em>last updated, {last_updated}</em></p> -->
	</div>
</footer>

<style>
	.logo {
		aspect-ratio: 1/1.85;
		margin-top: 1.5rem !important;
		margin-right: 1rem !important;
		opacity: 0.5;
	}
	.footer{
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	footer {
		border-top: 2px solid var(--colour-bg-alt);
		padding-top: 1rem;
        border-radius: 0.5px;
	}
</style>