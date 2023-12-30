<script>
	export let PublishTime;
	export let UpdateTime;

	$: HAS_BEEN_UPDATED = UpdateTime !== undefined;
	$: switchPublish = !HAS_BEEN_UPDATED;

	function renderLastUpdate(switchPublish) {
		if (HAS_BEEN_UPDATED && switchPublish === false) {
			return `LAST UPDATED ${UpdateTime}`;
		} else if (HAS_BEEN_UPDATED && switchPublish === true) {
			return `PUBLISHED ${PublishTime}`;
		} else {
			return `PUBLISHED ${PublishTime}`;
		}
	}

	$: pub_time_meta = switchPublish
		? renderLastUpdate(true)
		: renderLastUpdate(false);
	$: pub_time_rev = switchPublish
		? renderLastUpdate(false)
		: renderLastUpdate(true);

	/**
	 * Handle the switching between update time and publish time.
	 * @param {Event} event The type of event
	 */
	function handleLastUpdateSwitch(event) {
		if (
			event.type === 'KeyboardEvent' &&
			(event.code === 'Enter' || event.code === 'Space')
		) {
			switchPublish = !switchPublish;
		} else {
			switchPublish = !switchPublish;
		}
	}
</script>

{#if !HAS_BEEN_UPDATED}
	<p class="h2 publish_time non_clickable">
		<i class={switchPublish ? 'bi bi-clock-fill' : 'bi bi-clock-history'}></i>
		{pub_time_meta}
	</p>
{:else}
	<button class="h2 publish_time" on:click={handleLastUpdateSwitch}>
		<i class={switchPublish ? 'bi bi-clock-fill' : 'bi bi-clock-history'}></i>
		{pub_time_meta}
	</button>
{/if}

<style>
	.publish_time {
		text-decoration: underline dotted;
		text-underline-offset: 3px;
		background-color: transparent;
		border: none;
		color: var(--colour-text);
		text-transform: uppercase;
		font-size: 0.8em;
		font-weight: 500;
		margin-bottom: 0.5rem;
	}

	.publish_time:hover,
	.publish_time:focus,
	.publish_time:focus-within {
		background-color: transparent;
		color: var(--colour-text);
	}
	.publish_time:focus-visible {
		border: 1px var(--colour-text);
		border-style: solid;
	}

	.publish_time > i {
		margin-right: 0.5rem;
	}

	.non_clickable {
		text-decoration: solid;
	}
</style>
