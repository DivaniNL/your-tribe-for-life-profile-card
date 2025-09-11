<script>
	import { page } from '$app/state';
	import favicon from '$lib/assets/favicon.svg';
	let { children } = $props();
</script>

<svelte:head>
	<title>Profile Card Dylan</title>
	<meta name="description" content="Dit is de Profile card van Dylan van Nierop, student aan de AD FDND">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
	<link rel="icon" href={favicon} />
	<style>
		*{
			margin: 0;
			padding: 0;
			box-sizing: border-box; /* Stupid Flanders : ) */
		}
		html{
			font-size: 16px; /* 1rem */
		}
		body{
			--color-primary: #2C1FB8;
			--color-secondary: #0076B1;
			--color-bg: #88ABCF;
			--color-cta: #C03B00;
			--color-pink: #B12581;
			--color-red: #921F10;
			--color-purple: #7020A9;
			--color-green: #008A42;
			--color-white: #fff;
			--color-black: #000;
			--text-s: 0.875rem; /* 14px */
			--text-m: 1rem; /* 16px */
			--text-l: 1.25rem; /* 20px */
			--title-m: 1.5rem; /* 24px */
			--title-l: 2.5rem; /* 40px */
			font-family: "Montserrat", sans-serif;
			background-color: #88ABCF;
			background-color: var(--color-bg);
			color: white;
		}
		#container{
			    padding: 0 16px;
				max-width: 650px;
				margin: 0 auto;
		}

		/* Base styling if no modern CSS */
		ul{
			list-style-type: none;
			padding: 0;
			margin: 0;
		}
		/* svg > * {
			fill: black;
		} */
		a{
			color: inherit;
			text-decoration: none;
		}
		.title-l, .title-m{
			margin-bottom: 10px;
		}
		.title-l{
			font-size: 1.5rem;
			font-size: var(--title-m);
			@media (min-width: 720px){
				font-size: 2.5rem;
				font-size: var(--title-l);
			}
		}
		.title-m{
			font-size: 1.25rem;
			font-size: var(--text-l);
			@media (min-width: 720px){
				font-size: 1.5rem;
				font-size: var(--title-m);
			}
		}
	</style>
</svelte:head>

{@render children?.()}