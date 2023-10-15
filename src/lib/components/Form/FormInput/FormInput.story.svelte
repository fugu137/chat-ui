<script lang="ts">
	import FormInput from "$lib/components/Form/FormInput/FormInput.svelte";
	import type { Hst } from "@histoire/plugin-svelte";
	import type { ComponentProps } from "svelte";

	export let Hst: Hst;

	type Props = ComponentProps<FormInput>;

	let id: Props["id"] = "input";
	let label: Props["label"] = "Label:";
	let type: Props["type"] = "text";
	let value: Props["value"] = "First name";
	let error: Props["error"];
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
