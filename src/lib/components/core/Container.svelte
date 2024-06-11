<script>
    let className = '';
    export {className as class}
</script>
<div class={`max-w-[75%] m-auto 2xl:max-w-[2560px] 2xl:px-80 xl:max-w-[100%] xl:px-80 md:max-w-[100%] md:px-20 font-sans ${className ? className : ''}`}>
    <slot/>
</div>