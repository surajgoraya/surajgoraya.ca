import { MarkdownPageLoad } from '$lib/utils/MarkdownTools.js';

export async function load({ params }) {
  const { slug } = params;
  return await MarkdownPageLoad(import(`../${slug}.md`));
}