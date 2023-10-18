<script lang="ts">
	import ValidationIcon from "$lib/components/Icon/ValidationIcon.svelte";

	export let id: string;
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
	<label for={`input-${id}`}>{label}</label>
	<input
		id={`input-${id}`}
		class={error ? "error" : ""}
		type={type}
		value={value}
		on:input={handleInput}
		aria-invalid={!!error}
		aria-errormessage="validation-content"
	/>

	<div class="validation-area">
		{#if error}
			<div id="validation-content" role="alert">
				<ValidationIcon color="red" width={22} height={22} />
				<span class="validation-message">{error}</span>
			</div>
		{/if}
	</div>
</article>

<style>
	* {
		--error-colour: red;
		--font-size-small: 0.93em;
		font-size: 1em;
		box-shadow: none;
	}
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
		width: 440px;
		padding: 8px;
		border-radius: 3px;
		border: 1px solid grey;
	}
	input.error {
		border-color: var(--error-colour);
	}
	.validation-area {
		height: 22px;
	}
	#validation-content {
		display: flex;
		align-items: center;
		column-gap: 4px;
	}
	.validation-message {
		color: var(--error-colour);
		font-size: var(--font-size-small);
		line-height: var(--font-size-small);
	}
</style>
