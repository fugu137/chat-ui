<script lang="ts">
	import Input from "$lib/components/Input/Input.svelte";
	import type { Hst } from "@histoire/plugin-svelte";
	import type { InputProps } from "./types";

	export let Hst: Hst;

	let name: InputProps["name"] = "input";
	let label: InputProps["label"] = "Label:";
	let type: InputProps["type"] = "text";
	let value: InputProps["value"] = "First name";
	let error: InputProps["error"];
</script>

<div class="histoire-story">
	<svelte:component this={Hst.Story} title="Input">
		<Input name={name} type={type} label={label} value={value} error={error} />

		<svelte:fragment slot="controls">
			<svelte:component
				this={Hst.Select}
				title="type"
				bind:value={type}
				options={["text", "password"]}
			/>
			<svelte:component this={Hst.Text} title="label" bind:value={label} />
			<svelte:component this={Hst.Text} title="value" bind:value={value} />
			<svelte:component this={Hst.Text} title="error" bind:value={error} />
		</svelte:fragment>
	</svelte:component>
</div>
