import { redirect } from '@sveltejs/kit';

export function load(){
	//To maintain backwards compact of old URLS in-case they are indexed.
	throw redirect(301, '/archived');
}
