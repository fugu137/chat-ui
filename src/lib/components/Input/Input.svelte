<script lang="ts">
	import ValidationBar from "../ValidationBar/ValidationBar.svelte";

	export let name: string;
	export let type: "text" | "password";
	export let label: string;
	export let value: string;
	export let error: string | undefined = undefined;

	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement;
		value = target.value;
	}
</script>

<article>
	<label for={`input-${name}`}>{label}</label>
	<input
		id={`input-${name}`}
		name={name}
		class={error ? "error" : ""}
		type={type}
		value={value}
		on:input={handleInput}
		aria-invalid={!!error}
		aria-errormessage="validation-message"
	/>

	<ValidationBar id="validation-message" error={error} />
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		row-gap: 8px;
	}
	label {
		display: block;
		font-size: var(--font-size-small);
		line-height: var(--font-size-small);
	}
	input {
		display: block;
		max-width: var(--width-regular);
		padding: 8px;
		border-radius: 3px;
		border: 1px solid grey;
	}
	input.error {
		border-color: var(--error-colour);
	}
</style>
