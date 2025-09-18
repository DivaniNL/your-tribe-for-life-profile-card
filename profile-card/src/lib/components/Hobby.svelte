<script>
    const { hobby,i } =  $props()
</script>


<article class="card-hobby animation-slide-in--up" style="--delay: {i * 0.5 + 0.2}s;">
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
<style>
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
</style>