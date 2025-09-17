<script>
    let { data } = $props();
    let werkervaringen = data.werkervaringen;
</script>

<div id="container">
    <section class="profile-card" style="view-transition-name: card;">
        <picture style="view-transition-name: mugshot;">
            <source
                srcset="https://fdnd.directus.app/assets/{data.person.mugshot
                    .id}?width=600&height=600&format=avif"
                type="image/avif"
            />
            <source
                srcset="https://fdnd.directus.app/assets/{data.person.mugshot
                    .id}?width=600&height=600&format=webp"
                type="image/webp"
            />
            <img
                src="https://fdnd.directus.app/assets/{data.person.mugshot
                    .id}?width=600&height=600"
                alt="test"
                width="600"
                height="600"
                
            />
        </picture>
        <div class="content-wrapper">
            <h1 class="title-l">Opleidingen</h1>
            <p class="text-l">Hieronder mijn Opleidingen</p>
        </div>

        <table class="table-primary table-opleidingen">
            <thead>
                <tr>
                    <th>Periode</th>
                    <th>Studie</th>
                </tr>
            </thead>

            <tbody>
                {#each werkervaringen as werkervaring}
                    {#if werkervaring.functie}
                        <tr>
                            {#if werkervaring.periode}
                                <td>{werkervaring.periode}</td>
                            {:else}
                                <td>Onbekende periode</td>
                            {/if}

                            <td>
                            {werkervaring.functie} bij
                            {#if werkervaring.link}
                                <a class="link-werkervaring" target="_blank" href={werkervaring.link}>
                                {werkervaring.bedrijf}
                                </a>
                            {:else}
                                {werkervaring.bedrijf}
                            {/if}
                            </td>
                        </tr>
                    {/if}
                {/each}
            </tbody>
        </table>
    </section>
</div>

<style>
    .profile-card{
        padding-left: 16px;
        padding-right: 16px;
        margin-bottom: 100px;
    }
    #container {
        max-width: 1024px;
    }
    table {
        border-collapse: separate;
        border-spacing: 0;
    }

    table.table-primary {
        border-radius: 27px;
        overflow: hidden;
        margin-top: 10px;
        border: 3px solid white;
    }

    table.table-primary th,
    table.table-primary td {
        padding: 10px;
        text-align: left;
    }

    table.table-primary th a,
    table.table-primary td a {
        font-weight: bold;
        transition: 0.2s ease;
        text-decoration: underline;
    }

    table.table-primary th a:hover,
    table.table-primary td a:hover,
    table.table-primary th a:focus,
    table.table-primary td a:focus
    {
        color: black;
        text-decoration: underline;
    }

    table.table-primary thead tr th {
        background-color: #2c1fb8;
        background-color: var(--color-primary);
        color: #fff;
        color: var(--color-white);
        border-bottom: 1px solid #2c1fb8;
        border-bottom: 1px solid var(--color-primary);
    }

    table.table-primary tbody tr:nth-child(even) td {
        background-color: #2c1fb8;
        background-color: var(--color-primary);
        color: #fff;
        color: var(--color-white);
        border: 1px solid #fff;
        border: 1px solid var(--color-white);
        font-weight: bold;
    }

    table.table-primary tbody tr:nth-child(odd) td {
        background-color: #fff;
        background-color: var(--color-white);
        border: 1px solid #2c1fb8;
        border: 1px solid var(--color-primary);
        color: #2c1fb8;
        color: var(--color-primary);
        font-weight: bold;
    }


    table.table-primary tbody tr:last-child td:first-child {
        border-bottom-left-radius: 24px;
    }

    table.table-primary tbody tr:last-child td:last-child {
        border-bottom-right-radius: 24px;
    }

    table.table-primary tbody tr td {
        font-size: 12px;
    }
    @media (max-width: 500px){
            tr{
                display: flex !important;
                flex-direction: column;
                th{
                    display: none
                }
                td{
                    &:first-child{
                        background-color: #2c1fb8 !important;
                        color: white !important;
                        border-bottom-left-radius: 0 !important
                    }
                    &:last-child{
                        background-color: white !important;
                        color: #2c1fb8 !important;
                    }

                }
            }
        }
</style>
