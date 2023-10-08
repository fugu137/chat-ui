<script lang="ts">
	export let id: string;
	export let type: 'text' | 'password';
	export let label: string;
	export let value: string;
	export let error: string | undefined;

	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement;
		value = target.value;
	}
</script>

<article>
	<label for={`input-${id}`}>{label}</label>
	<input class={error ? 'error' : ''} {type} {value} on:input={handleInput} />

	{#if error}
		<div class="validation-message">{error}</div>
	{/if}
</article>

<style>
	* {
		--error-colour: red;
		font-size: 1em;
		box-shadow: none;
	}
	label {
		display: block;
		font-size: 0.9em;
		padding: 6px 0;
	}
	input {
		display: block;
		width: 440px;
		padding: 8px;
		border-radius: 3px;
		outline: none;
		border: 1px solid grey;
	}
	input.error {
		border-color: lightgray;
		outline: 2px solid var(--error-colour);
	}
	.validation-message {
		font-size: 0.9em;
		padding: 12px 0;
		color: var(--error-colour);
	}
</style>
