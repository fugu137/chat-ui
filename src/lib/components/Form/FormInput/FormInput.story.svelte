<script lang="ts">
	import FormInput from "$lib/components/Form/FormInput/FormInput.svelte";
	import type { Hst } from "@histoire/plugin-svelte";
	import type { ComponentProps } from "svelte";

	export let Hst: Hst;

	let id: ComponentProps<FormInput>["id"] = "input";
	let label: ComponentProps<FormInput>["label"] = "Label:";
	let type: ComponentProps<FormInput>["type"] = "text";
	let value: ComponentProps<FormInput>["value"] = "First name";
	let error: ComponentProps<FormInput>["error"] = "Enter a valid username";
</script>

<div class="histoire-story">
	<svelte:component this={Hst.Story} title="Form/Input">
		<FormInput id={id} type={type} label={label} value={value} error={error} />

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
