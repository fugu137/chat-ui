<script lang="ts">
	import type { ButtonSize, ButtonVariant } from "../Button/types";
	import Button from "../Button/Button.svelte";
	import ValidationArea from "../ValidationArea/ValidationArea.svelte";

	export let error: string | undefined = undefined;
	export let buttonText: string;
	export let buttonSize: ButtonSize | undefined = undefined;
	export let buttonVariant: ButtonVariant | undefined = undefined;
	export let onButtonClick: (event: MouseEvent) => void;
</script>

<div class={`button-bar ${buttonSize}`}>
	<ValidationArea ariaId="validation-message" error={error} />
	<Button
		text={buttonText}
		onClick={onButtonClick}
		size={buttonSize}
		variant={buttonVariant}
	/>
</div>

<style>
	.button-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		width: var(--width-regular);
		margin-top: 16px;
	}
	.button-bar.wide {
		flex-direction: column;
	}
</style>
