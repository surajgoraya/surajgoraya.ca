import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	redirect(307, `https://archive.surajgoraya.ca/research/${params.slug}`);
}
