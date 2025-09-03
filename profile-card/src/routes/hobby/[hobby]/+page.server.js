import { error } from '@sveltejs/kit';
import { hobbies } from "$lib/server/database/hobbies.js";

export function load({ params }) {
	const hobby = hobbies.find((hobby) => hobby.slug === params.hobby);
	if (!hobby) error(404);

	return {
		hobby
	};
}
