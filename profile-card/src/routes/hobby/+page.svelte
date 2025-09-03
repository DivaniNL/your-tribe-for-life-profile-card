<script>
	let { data } = $props();
</script>

<h1>blog</h1>

<ul>
	{#each data.hobbies as { slug, title }}
		<li><a href="/hobby/{slug}">{title}</a></li>
	{/each}
</ul>