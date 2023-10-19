<script lang="ts">
	import ValidationIcon from "../Icon/ValidationIcon.svelte";

    export let id: string;
    export let error: string | undefined;
</script>

<div class="validation-area">
    {#if error}
        <div id={id} class="validation-message" role="alert">
            <ValidationIcon color="var(--error-colour)" width={22} height={22} />
            <span class="validation-text">{error}</span>
        </div>
    {/if}
</div>

<style>
    .validation-area {
		height: 22px;
	}
	.validation-message {
		display: flex;
		align-items: center;
		column-gap: 4px;
	}
	.validation-text {
		color: var(--error-colour);
		font-size: var(--font-size-small);
		line-height: var(--font-size-small);
	}
</style>