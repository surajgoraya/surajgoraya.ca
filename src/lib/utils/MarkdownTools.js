import { error } from "@sveltejs/kit";

async function MarkdownPageLoad(importPath) {
    try {
        const post = await importPath;
        const content = post.default
        return {
            content,
            metadata: post.metadata,
        }
    } catch (exception) {
        if (exception.message.includes('Unknown variable dynamic import')) {
            throw error(404, 'Not Found');
        } else {
            throw error(500, 'Something went wrong when processing your request. Please try again later');
            //TODO: Log this? Seems pretty serious if this happens.
        }
    }
}

export { MarkdownPageLoad }