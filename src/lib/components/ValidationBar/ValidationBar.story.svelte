<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
	import type { ValidationBarProps } from "./types";
	import ValidationBar from "./ValidationBar.svelte";

	export let Hst: Hst;

    let ariaId: ValidationBarProps["ariaId"] = "validation-message";
	let error: ValidationBarProps["error"] = "Please enter a valid username and password";
</script>

<div class="histoire-story">
	<svelte:component this={Hst.Story} title="Validation/ValidationBar">
		<ValidationBar ariaId={ariaId} error={error}/>

		<svelte:fragment slot="controls">
			<svelte:component this={Hst.Text} title="ariaId" bind:value={ariaId} />
			<svelte:component this={Hst.Text} title="error" bind:value={error} />
		</svelte:fragment>
	</svelte:component>
</div>