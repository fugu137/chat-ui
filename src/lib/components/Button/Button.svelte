<script lang="ts">
    export let text: string | undefined;
</script>

<button>
    {text}
</button>

<style>
    * {
        outline: none;
        box-shadow: none;
    }
    button {
        font-size: 1em;
        background-color: transparent;
        border: 1px solid black;
        border-radius: 3px;
        padding: 8px 16px;
    }
</style>