<script>
  let { data } = $props();
  let hobbies = data.hobbies;
  console.log(data.person)
</script>
<div id="container">
    <section class="profile-card" style="view-transition-name: card;">
        <picture style="view-transition-name: mugshot;">
            <source srcset="https://fdnd.directus.app/assets/{data.person.mugshot.id}?width=600&height=600&format=avif" type="image/avif">
            <source srcset="https://fdnd.directus.app/assets/{data.person.mugshot.id}?width=600&height=600&format=webp" type="image/webp">
            <img src="https://fdnd.directus.app/assets/{data.person.mugshot.id}?width=600&height=600" alt="test" width="600" height="600">
        </picture>
        <div class="content-wrapper">
            <h1 class="title-l">Hobby's</h1>
            <p class="text-l">Hieronder mijn Hobby's</p>
        </div>
    </section>
    <section class="hobbies">
        {#each hobbies as hobby, i}
            <article class="card-hobby" >
                {#if hobby.titel }
                        <h2 class="title-m">{hobby.titel}</h2>
                    {/if }
                    {@html hobby.content}
                    {#if hobby.afbeelding } 
                        <figure>
                            <img src="{hobby.afbeelding[0]['src']}" alt="{hobby.afbeelding[0].afbeelding_alt}" title="{hobby.afbeelding[0].afbeelding_titel}">
                            <figcaption>{hobby.afbeelding[0].caption}</figcaption>
                        </figure>
                    {/if }
            </article>
        {/each}
        
    </section>

</div>

<style>
    body{
        /* overflow-x: hidden; */
    }
    #container{
        max-width: 1024px;
        
    }
    section.hobbies{
        margin-bottom: 100px;
    }
    .card-hobby{
        position: relative;
        padding: 40px 36px 40px 36px;
        border-radius: 14px;
        background: #2C1FB8;
        background: var(--color-primary);
        border: 4px solid #0076B1;
        box-shadow: 0 8px 0 0 #0076B1;
        margin-top: 50px;
    }
    .card-hobby .title-m{
        margin-bottom: 20px;
    }
    .card-hobby figure{
        img{
            width: 100%;
            margin-top: 10px;
            border-radius: 24px;
            border: 4px solid var(--color-secondary);
             box-shadow: 0 8px 0 0 #0076B1;
        }
        figcaption{
            color: var(--color-white);
            font-size: 16px;  
            margin-top: 10px;
            font-weight: bold;
        }

        &:not(:last-child){
            margin-bottom: 10px;
        }
    }
    @keyframes animate-left {
        0% { 
            translate: -100vw 0;
            opacity: 0;
        }
        100% { 
            opacity: 1; 
            translate: 0 0;
        }
    }
    @keyframes animate-right{
        0% { 
            translate: 100vw 0;
            opacity: 0;
        }
        100% { 
            opacity: 1; 
            translate: 0 0;
        }
    }
    .card-hobby{
        animation: animate-left 2s linear;
        animation-timeline: view();
        animation-range: entry, exit;
        &:nth-child(even){

            animation: animate-right 2s linear backwards;
            animation-timeline: view();
            animation-range: 20%, 50%;
        }
    }
</style>