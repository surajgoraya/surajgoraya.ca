import { error } from '@sveltejs/kit';

export async function load({ params }){
    const { slug } = params;
    try {
      const post = await import(`../${slug}.md`);
      const content = post.default
      return {
        content,
        metadata: post.metadata,
      }
    } catch (exception) {
      if(exception.message.includes('Unknown variable dynamic import')){
        throw error(404, 'Not Found');
      } else {
        throw error(500, '👁️👄👁️');
      }
    }
  }