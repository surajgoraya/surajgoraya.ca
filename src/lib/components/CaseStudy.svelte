<script>
    export let title, description;
    export let skills;
    export let url, image;
    export let locked;
    let className = '';
    export let id;

    export {className as class} 
</script>

<div class={`flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between w-full min-w-full gap-14 first:my-0 my-12 z-10 ${className}`} id={`case-study-${id ? id : (Math.random()*100)}`}>
    <div id="left-panel" class="flex flex-col gap-2 flex-[0.5]">
        <p class="text-brand-dark text-2xl font-sans font-bold">{title}</p>
        <div class="flex gap-2">
            {#each skills as skill,i }
                <span class="text-brand-dark opacity-80">{skills.length >= 1 && i !== skills.length-1  ? skill + ' ·' : skill}</span>
            {/each}
        </div>
        <p class="text-brand-dark">{description}</p>
        <a href={url}>{`Read Case Study`}</a>
    </div>
    <div class="flex-[0.5] ">
        <img class="w-full lg:w-3/4 ml-auto" src={image}/>
    </div>
</div>