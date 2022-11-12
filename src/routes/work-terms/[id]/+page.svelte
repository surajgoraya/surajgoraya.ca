<script context="module">
	export async function load({ params }) {
		//To maintain backwards compact of old URLS in-case they are indexed.

		if (params.id === '3') {
			return { status: 301, redirect: '/archived'};
		} else {
			return { status: 404 };
		}
	}
</script>
