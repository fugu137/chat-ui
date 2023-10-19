<script lang="ts">
	import ValidationIcon from "../icons/ValidationIcon.svelte";

	export let ariaId: string;
	export let error: string | undefined = undefined;
</script>

<div class="validation-area">
	{#if error}
		<div id={ariaId} class="validation-message" role="alert">
			<ValidationIcon colour="var(--error-colour)" />
			<span class="validation-text">{error}</span>
		</div>
	{/if}
</div>

<style>
	.validation-area {
		height: var(--icon-height-small);
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
		padding-bottom: 1px;
	}
</style>
