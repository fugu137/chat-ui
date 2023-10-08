<script lang="ts">
	export let id: string;
	export let type: 'text' | 'password';
	export let label: string;
	export let value: string;
	export let error: string | null;

	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement;
		value = target.value;
	}

	$: {
		console.log(value);
	}
</script>

<article class="form-input">
	<label for={`input-${id}`}>{label}</label>
	<input class={error ? 'error' : ''} {type} {value} on:input={handleInput} required />

	{#if error}
		<div class="validation-message">{error}</div>
	{/if}
</article>

<style>
	.form-input * {
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
        border-radius: 4px;
        outline: none;
	}
	input.error {
		outline: 2px solid red;
       
	}
	.validation-message {
		padding: 12px 0;
		color: red;
	}
</style>
