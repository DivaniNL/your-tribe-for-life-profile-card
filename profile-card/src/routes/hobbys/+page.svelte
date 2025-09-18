<script>
  let { data } = $props();
  let hobbies = data.hobbies;
  console.log(data.person)
  import { Hobby } from '$lib';
</script>
<div id="container">
    <section class="profile-card" style="view-transition-name: card">
        <div class="breadcrumbs">
            <p>
                <a href="/" class="home-link" aria-current="false">Home</a> &gt;
                <a href="#" class="detail-link" aria-current="true">Hobby's</a>
            </p>
        </div>
        <picture style="view-transition-name: mugshot">
            <source srcset="https://fdnd.directus.app/assets/{data.person.mugshot.id}?width=600&height=600&format=avif" type="image/avif">
            <source srcset="https://fdnd.directus.app/assets/{data.person.mugshot.id}?width=600&height=600&format=webp" type="image/webp">
            <img src="https://fdnd.directus.app/assets/{data.person.mugshot.id}?width=600&height=600" alt="test" width="600" height="600">
        </picture>
        <div class="content-wrapper flex-v-center">
            <h1 class="title-l">Hobby's</h1>
            <p class="text-l">Hieronder mijn Hobby's</p>
        </div>
    </section>
    <section class="hobbies">
        {#each hobbies as hobby}
           <Hobby {hobby}/>
        {/each}
    </section>

</div>

<style>

    #container{
        max-width: 1024px;
    }
    section.hobbies{
        margin-bottom: 100px;
    }
    
</style>