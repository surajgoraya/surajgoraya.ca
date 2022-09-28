<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export async function load({ error }) {
		//To maintain backwards compact of old URLS in-case they are indexed.
		return { status: 301, redirect: '/archived'};
	}
</script>
