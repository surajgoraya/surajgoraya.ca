// src/routes/blog/[slug]/+page.js
export async function load({ params }){
    const { slug } = params;
    const post = await import(`../${slug}.md`);
    const content = post.default
  
    return {
      content,
      metadata: post.metadata,
    }
  }