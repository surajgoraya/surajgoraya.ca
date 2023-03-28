<script>
	import rizz from '$lib/resources/rizz.jpg';
	import rizz2 from '$lib/resources/rizzapple.png';
</script>

<img src={rizz} alt="rizz" />
<img class="ryan" src={rizz2} alt="rizz" />

<style>
	@keyframes aple {
		0% {
			transform: translateY(-100px) scale(0);
		}
		50% {
			transform: translateY(0) scale(1.5);
		}
		75% {
			transform: translateY(50px) scale(0.5);
		}
		100% {
			transform: translateY(0) scale(0.7);
		}
	}
	.ryan {
		animation: aple 10s ease-in-out 2ms infinite;
	}
	img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
	}
	img:hover {
		cursor: url('rizzapple.png'), auto;
	}
</style>
