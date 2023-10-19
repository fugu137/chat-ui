<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
	import { logEvent } from "histoire/client";
	import type { ButtonProps } from "./types";
	import Button from "./Button.svelte";

	export let Hst: Hst;

	let text: ButtonProps["text"] = "Submit";
	let variant: ButtonProps["variant"] = "primary";
	let size: ButtonProps["size"] = "medium";
</script>

<div class="histoire-story">
	<svelte:component this={Hst.Story} title="Button/Button">
		<Button
			text={text}
			variant={variant}
			size={size}
			onClick={(event) => logEvent("Click", event)}
		/>

		<svelte:fragment slot="controls">
			<svelte:component this={Hst.Text} title="text" bind:value={text} />
			<svelte:component
				this={Hst.Select}
				title="variant"
				bind:value={variant}
				options={["primary", "secondary"]}
			/>
			<svelte:component
				this={Hst.Select}
				title="size"
				bind:value={size}
				options={["small", "medium", "large"]}
			/>
		</svelte:fragment>
	</svelte:component>
</div>
