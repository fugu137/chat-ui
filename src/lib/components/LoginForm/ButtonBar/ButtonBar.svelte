<script lang="ts">
	import type { ButtonSize, ButtonVariant } from "../../Button/types";
	import Button from "../../Button/Button.svelte";
	import ValidationArea from "../../ValidationArea/ValidationArea.svelte";

	export let error: string | undefined = undefined;
	export let buttonText: string;
	export let buttonSize: ButtonSize | undefined = undefined;
	export let buttonVariant: ButtonVariant | undefined = undefined;
	export let onButtonClick: (event: MouseEvent) => void;
</script>

<div class={`form-submit ${buttonSize}`}>
	<ValidationArea ariaId="validation-message" error={error} />
	<Button
		text={buttonText}
		onClick={onButtonClick}
		size={buttonSize}
		variant={buttonVariant}
	/>
</div>

<style>
	.form-submit {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		width: var(--width-regular);
		margin-top: 12px;
		padding-left: 8px;
	}
	.form-submit.wide {
		flex-direction: column;
		padding-left: 0;
	}
</style>
