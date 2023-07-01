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
            throw error(500, '👁️👄👁️');
        }
    }
}

export { MarkdownPageLoad }