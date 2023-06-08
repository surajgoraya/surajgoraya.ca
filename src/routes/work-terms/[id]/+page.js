import { redirect, error } from '@sveltejs/kit';

export async function load({ params }) {
	//To maintain backwards compact of old URLS in-case they are indexed.

	if (params.id === '3') {
		throw redirect(301, '/archived');
	} else {
		throw error(404, { message: 'Not Found' });
	}
}
