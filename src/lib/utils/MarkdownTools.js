// @ts-nocheck
import { error } from '@sveltejs/kit';

async function MarkdownPageLoad(slug, type) {
	try {
		const post = await import(type === 'research' ? `../content/research/${slug}.md` : '');
		const content = post.default;
		return {
			content,
			metadata: post.metadata
		};
	} catch (exception) {
		if (exception.message.includes('Unknown variable dynamic import')) {
			error(404, { message: 'Not Found' });
		} else {
			error(500, {
				message: 'Something went wrong when processing your request. Please try again later'
			});
			//TODO: Log this? Seems pretty serious if this happens.
		}
	}
}

export { MarkdownPageLoad };
