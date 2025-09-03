<script>
	let { data } = $props();
	console.log(data)
</script>

<h1>{data.hobby.title}</h1>
<div>{@html data.hobby.content}</div>
