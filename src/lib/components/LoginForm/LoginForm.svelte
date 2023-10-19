<script lang="ts">
	import Button from "../Button/Button.svelte";
	import type { ButtonSize, ButtonVariant } from "../Button/types";
	import Input from "../Input/Input.svelte";
	import ValidationBar from "../ValidationBar/ValidationBar.svelte";
	import type { LoginFormValues } from "./types";

	export let onSubmit: (formValues: LoginFormValues) => void;
	export let error: string | undefined = undefined;
	export let buttonSize: ButtonSize | undefined = undefined;
	export let buttonVariant: ButtonVariant | undefined = undefined;

	let username: string = "";
	let password: string = "";

	function handleSubmit(event: MouseEvent) {
		event.preventDefault();

		onSubmit({
			username: username,
			password: password
		});
	}
</script>

<!-- svelte-ignore a11y-role-supports-aria-props -->
<form name="login-form" aria-invalid={!!error}>
	<Input name="username" label="Username" type="text" bind:value={username} />
	<Input name="password" label="Password" type="password" bind:value={password} />

	<div class="button-bar">
		<ValidationBar ariaId="validation-message" error={error} />
		<Button
			text="Log in"
			onClick={handleSubmit}
			size={buttonSize}
			variant={buttonVariant}
		/>
	</div>
</form>

<style>
	form {
		width: var(--width-regular);
	}
	.button-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		column-gap: 16px;
		width: 100%;
		margin-top: 18px;
	}
</style>
