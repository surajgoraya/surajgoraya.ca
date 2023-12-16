<script>
    /**
     * The anchor you would like the "Skip to main content" link to jump to. This is most often "content"
     * @type {String | null}
     */
    export let Identifier;
</script>

<a href={Identifier ? `#${Identifier}` : '#content'}>Skip to main content</a>