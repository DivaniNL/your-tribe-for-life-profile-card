<script>
    import { onMount } from 'svelte';
    let { data } = $props();
    let feitjes_over_mij = data.feitjes_over_mij;
     let songs = [];
  const playIcon = '▶️';
  const pauseIcon = '⏸️';

  onMount(() => {
    // Create Audio objects for each song
    songs = data.liedjes[0].waarde.map(liedje => ({
      ...liedje,
      audio: new Audio(`/assets/media/${liedje.bestand}`),
      playing: false
    }));

    songs.forEach(song => {
      song.audio.volume = 0.3;
      song.audio.onended = () => (song.playing = false); // reset playing state when ended
    });
  });

  function togglePlay(selectedSong, button) {
    // Pause all other songs
    songs.forEach(song => {
      if (song !== selectedSong && song.playing) {
        song.audio.pause();
        song.playing = false;
        const button = document.querySelector(`.button-${song.key}`);
        if (button) button.textContent = '▶️'; // set to play icon
      }
    });
    if (selectedSong.playing) {
    button.innerHTML = playIcon
      songs[selectedSong.key - 1].audio.pause();
      songs[selectedSong.key - 1].playing = false;
      selectedSong.playing = false;
      
    } else {
    button.innerHTML = pauseIcon
      songs[selectedSong.key - 1].audio.play();
      songs[selectedSong.key - 1].playing = true;
        selectedSong.playing = true;
        
    }
  }
</script>

<div id="container">
    <section class="profile-card">
        <picture>
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
            <h1 class="title-l">Feitjes</h1>
            <p class="text-l">Hieronder feitjes over mij</p>
        </div>

        <table class="table-primary table-feitjes">

            <tbody>
                {#each feitjes_over_mij as feitje}                
                    <tr>
                        {#if feitje.label}
                        <td>{feitje.label}</td>
                        {/if}

                        <td 
                        style={feitje.label === "Favoriete kleur" ? `background-color: ${feitje.waarde} !important; color: #fff !important` : undefined}
                        >
                        {feitje.waarde}
                        </td>
                    </tr>
                {/each}
               <tr class="row-songs">
                    <td class="vat">{data.liedjes[0].label}</td>
                    <td>
                    {#each data.liedjes[0].waarde as liedje, i}
                        <div class="song">
                            <button class="button-{i+1}" on:click={(e) => togglePlay(liedje, e.currentTarget)}>
                                ▶️
                            </button>
                            <span>{liedje.key}. {liedje.titel} - {liedje.artiest}</span>
                        </div>
                    {/each}
                    </td>
                </tr>
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
        color: #2c1fb8;
        color: var(--color-primary);
        font-weight: bold;
        transition: 0.2s ease;
    }

    table.table-primary th a:hover,
    table.table-primary td a:hover {
        color: #fff;
        color: var(--color-white);
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
    .song{
        display: flex;
        align-items: center;
    }
    button{
        cursor: pointer;
        appearance: none;
        background: none;
        border: 0;
        font-size: 20px;
        background-color: var(--color-white);
    }
    @media (max-width: 500px){
        tr{
            display: flex !important;
            flex-direction: column;
            td{
                &:first-child{
                    background-color: #2c1fb8 !important;
                    color: white !important;
                }
                &:last-child{
                    background-color: white !important;
                    color: #2c1fb8 !important;
                }

            }
        }
    }
</style>
