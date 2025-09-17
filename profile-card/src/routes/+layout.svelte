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
			--color-orange: #C03B00;
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


		.profile-card{
			position: relative;
			padding: 80px 36px 60px 36px;
			border-radius: 14px;
			background: #2C1FB8;
			background: var(--color-primary);
			border: 4px solid #0076B1;
			box-shadow: 0 8px 0 0 #0076B1;
			margin-top: 100px;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		picture{
			position: absolute;
			top: 0;
			left: 50%;
			translate: -50% -50%;
		}
		picture img{
			width: 135px;
			height: 135px;
			border: 4px solid #0076B1;
			border: 4px solid var(--color-secondary);
			border-radius: 50%;
		}
		.content-wrapper{
			width: fit-content;
		}
		@view-transition {
			navigation: auto;
		}
		::view-transition-group(*) {
			animation-duration: 1.3s;
			animation-timing-function: linear(
				0, 0.009, 0.035 2.1%, 0.141, 0.281 6.7%, 0.723 12.9%,
				0.938 16.7%, 1.017, 1.077, 1.121, 1.149 24.3%, 1.159,
				1.163, 1.161, 1.154 29.9%, 1.129 32.8%, 1.051 39.6%,
				1.017 43.1%, 0.991, 0.977 51%, 0.974 53.8%, 0.975 57.1%,
				0.997 69.8%, 1.003 76.9%, 1.004 83.8%,1
			);
        }
	</style>
</svelte:head>

{@render children?.()}