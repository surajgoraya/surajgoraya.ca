<script>
	export let href;
	let className = '';
	export { className as class };
</script>

<a
	class={`text-2xl font-branding tracking-widest p-2 transition-colors duration-500 hover:bg-tokyo-tower-orange hover:text-brand-white ${className}`}
	{href}><slot /><i class="bi bi-arrow-right"></i></a
>
