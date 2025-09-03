import { hobbies } from '$lib/server/database/hobbies.js';

export function load() {
	return {
		hobbies: hobbies.map((hobby) => ({
			slug: hobby.slug,
			title: hobby.title
		}))
	};
}