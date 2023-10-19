<script lang="ts">
	import Button from "../Button/Button.svelte";
	import Input from "../Input/Input.svelte";
	import type { LoginFormValues } from "./types";

	export let onSubmit: (formValues: LoginFormValues) => void;

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

<form name="login-form">
	<Input name="username" label="Username" type="text" bind:value={username} />
	<Input name="password" label="Password" type="password" bind:value={password} />

	<div class="button-bar">
		<Button text="Log in" onClick={handleSubmit} />
		<div class="validation-area">
		</div>
	</div>
</form>

<style>
	form {
		width: var(--width-regular);
	}
	.button-bar {
		display: flex;
		justify-content: flex-start;
		column-gap: 16px;
		margin-top: 18px;
	}
	.validation-area {
		height: 22px;
	}
</style>
