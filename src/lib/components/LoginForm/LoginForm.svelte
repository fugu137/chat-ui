<script lang="ts">
	import ButtonBar from "./ButtonBar/ButtonBar.svelte";
	import type { ButtonSize, ButtonVariant } from "../Button/types";
	import Input from "../Input/Input.svelte";
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

	<ButtonBar
		buttonText="Log in"
		buttonSize={buttonSize}
		buttonVariant={buttonVariant}
		onButtonClick={handleSubmit}
		error={error}
	/>
</form>

<style>
	form {
		width: var(--width-regular);
	}
</style>
