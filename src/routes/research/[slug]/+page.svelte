<!-- src/routes/[slug]/+page.svelte -->
<script>
	import PublishTime from '$lib/Components/PublishTime.svelte';
	import Template from '$lib/Components/Template.svelte';
	import { date_format } from '$lib/utils/common.js';
	import { MetaTags } from 'svelte-meta-tags';
	export let data;
	const { content, metadata } = data;
	const {
		title,
		meta_title,
		filed_under,
		published,
		description,
		keywords,
		type,
		author,
		permalink,
	} = metadata;
</script>

<MetaTags
	title={`${meta_title}`}
	{description}
	additionalMetaTags={[
		{
			name: 'keywords',
			content: keywords,
		},
		{
			name: 'author',
			content: author,
		},
	]}
	openGraph={{
		title: title,
		description: description,
		url: `https://surajgoraya.ca/${type}/${permalink}`,
		type: 'website',
		images: [
			{
				url: 'https://surajgoraya.ca/perma/cover.jpg',
				width: 4000,
				height: 2250,
				alt: 'A black and white picture of Suraj, standing looking down',
			},
		],
	}}
	twitter={{
		site: '@surajgoraya',
		handle: 'surajgoraya',
		title: `${title}`,
		description: `${description}`,
		url: 'https://surajgoraya.ca/perma/cover.jpg',
		imageAlt: 'A black and white picture of Suraj, standing looking down',
	}}
/>

<Template>
	<!-- <p class="directory-tree">
		<a href="/thoughts"
			><i class="bi bi-arrow-left-circle-fill" />&nbsp;BACK TO ALL POSTS</a
		>
	</p> -->
	<article>
		<hgroup>
			<h1 class="h1">{title}</h1>
			{#if filed_under}
				<p class="h5 subtitle">
					{#each filed_under as category, i}
						{#if i == 0}
							<i class="bi bi-arrow-return-right" />
							{category}
						{:else}
							<i class="bi bi-arrow-right-circle" />
							{category}
						{/if}
					{/each}
				</p>
			{/if}
		</hgroup>
		<div class="meta-information">
			<PublishTime PublishTime={date_format(published)} />
		</div>
		<svelte:component this={content} />
		<!-- <p class="h2 publish_time subtitle">
			<i class="bi bi-clock-fill" /> PUBLISHED {date_format(published)}
		</p> -->
	</article>
</Template>

<style>
	article {
		overflow-x: hidden;
	}
	.meta-information {
		margin: -1rem auto 1rem auto;
	}
	/* .directory-tree {
		font-weight: 700;
		font-size: 1.4rem;
		margin-top: 2rem;
		margin-bottom: -2rem;
		color: var(--colour-blossom);
	} */
</style>
