<script>
  let { data } = $props();
  let me = data.member;
  import { page } from "$app/state";
  console.log(me)
</script>
<div id="container">
    <section class="profile-card">
        <picture>
            <source srcset="https://fdnd.directus.app/assets/{me.mugshot.id}?width=600&height=600&format=avif" type="image/avif">
            <source srcset="https://fdnd.directus.app/assets/{me.mugshot.id}?width=600&height=600&format=webp" type="image/webp">
            <img src="https://fdnd.directus.app/assets/{me.mugshot.id}?width=600&height=600" alt="test" width="600" height="600">
        </picture>
        <div class="content-wrapper">
            <h1 class="title-l">{me.name}</h1>
            <h2 class="title-m">{me.bio}</h2>
            <p>{me.age} jaar oud</p>
        </div>

        <nav>
            <ul class="link_bubbles">
                <li class="link-bubble">
                    <a href="/education">
                        <div class="svg-container bg-pink">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" viewBox="0 0 640 640">
                                <path d="M80 259.8L289.2 345.9C299 349.9 309.4 352 320 352C330.6 352 341 349.9 350.8 345.9L593.2 246.1C602.2 242.4 608 233.7 608 224C608 214.3 602.2 205.6 593.2 201.9L350.8 102.1C341 98.1 330.6 96 320 96C309.4 96 299 98.1 289.2 102.1L46.8 201.9C37.8 205.6 32 214.3 32 224L32 520C32 533.3 42.7 544 56 544C69.3 544 80 533.3 80 520L80 259.8zM128 331.5L128 448C128 501 214 544 320 544C426 544 512 501 512 448L512 331.4L369.1 390.3C353.5 396.7 336.9 400 320 400C303.1 400 286.5 396.7 270.9 390.3L128 331.4z"/>
                            </svg>
                        </div>
                        <span>Opleidingen</span>
                    </a>
                </li>
                <li class="link-bubble">
                    <a href="/work">
                        <div class="svg-container bg-red">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" viewBox="0 0 640 640">
                                <path d="M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z"/>
                            </svg>
                        </div>
                        <span>Werk</span>
                    </a>
                </li>
                <li class="link-bubble">
                    <a href="/hobbys">
                        <div class="svg-container bg-purple">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" viewBox="0 0 640 640">
                                <path d="M448 128C554 128 640 214 640 320C640 426 554 512 448 512L192 512C86 512 0 426 0 320C0 214 86 128 192 128L448 128zM192 240C178.7 240 168 250.7 168 264L168 296L136 296C122.7 296 112 306.7 112 320C112 333.3 122.7 344 136 344L168 344L168 376C168 389.3 178.7 400 192 400C205.3 400 216 389.3 216 376L216 344L248 344C261.3 344 272 333.3 272 320C272 306.7 261.3 296 248 296L216 296L216 264C216 250.7 205.3 240 192 240zM432 336C414.3 336 400 350.3 400 368C400 385.7 414.3 400 432 400C449.7 400 464 385.7 464 368C464 350.3 449.7 336 432 336zM496 240C478.3 240 464 254.3 464 272C464 289.7 478.3 304 496 304C513.7 304 528 289.7 528 272C528 254.3 513.7 240 496 240z"/>
                            </svg>
                        </div>
                        <span>Hobby's</span>
                    </a>
                </li>
                <li class="link-bubble">
                    <a href="/facts">
                        <div class="svg-container bg-green">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" viewBox="0 0 640 640">
                                <path d="M420.9 448C428.2 425.7 442.8 405.5 459.3 388.1C492 353.7 512 307.2 512 256C512 150 426 64 320 64C214 64 128 150 128 256C128 307.2 148 353.7 180.7 388.1C197.2 405.5 211.9 425.7 219.1 448L420.8 448zM416 496L224 496L224 512C224 556.2 259.8 592 304 592L336 592C380.2 592 416 556.2 416 512L416 496zM312 176C272.2 176 240 208.2 240 248C240 261.3 229.3 272 216 272C202.7 272 192 261.3 192 248C192 181.7 245.7 128 312 128C325.3 128 336 138.7 336 152C336 165.3 325.3 176 312 176z"/>
                            </svg>
                        </div>
                        <span>Feitjes</span>
                    </a>
                </li>
            </ul>
        </nav>
    </section>
</div>
<style>
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
    /* .profile-card::after{
        background-color: #2C1FB8;
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        border-radius: 14px;
    } */
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
    nav{
        top: 100%;
        position: absolute;
        translate: 0 calc(-50% + 11px);
    }
    nav ul{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    nav ul li a{
        display: flex;
        flex-direction: column;
        justify-self: center;
        align-items: center;
        gap: 10px;
        padding: 0 8px;
    }
    .svg-container{
        width: 40px;
        height: 40px;
        border: 2px solid white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        outline: 6px solid #0076B1;
        transition: 0.2s ease;
        &:hover{
            outline-color: white;
            scale: 1.1;
        }
    }
    .svg-container svg{
        width: 20px;
    }
    
    nav::after{
        content: '';
        width: 100%;
        top: 100%;
        height: 100%;
        translate: 0 calc(-70% + 11px);
        left: 0;
        background-color: var(--color-secondary);
        border-bottom-left-radius: 14px;
        border-bottom-right-radius: 14px;
        position: absolute;
        z-index: -1;
    }
    .svg-container > svg > * {
        fill: white;
    }
    .svg-container.bg-pink{
        background: #b12581;
        background: var(--color-pink);
    }
    .svg-container.bg-red{
        background: #921F10;
        background: var(--color-red);
    }
    .svg-container.bg-purple{
        background: #7020A9;
        background: var(--color-purple);
    }
    .svg-container.bg-green{
        background: #008A42;
        background: var(--color-green);
    }
    .link-bubble span{
        font-size: 12px;
    }
    @media (min-width: 500px){
        .svg-container svg{
            width: 35px;
        }
        .svg-container{
            width: 60px;
            height: 60px;
        }
        .link-bubble span{
            font-size: 16px;
        }
        nav ul li a{
            padding: 0 12px;
        }
    }
</style>