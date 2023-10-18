<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
	import type { ComponentProps } from "svelte";
    import Button from "./Button.svelte";

	export let Hst: Hst;

    type Props = ComponentProps<Button>;

    let text: Props["text"] = "Submit"
</script>

<div class="histoire-story">
	<svelte:component this={Hst.Story} title="Button/Button">
		<Button text={text} />

		<svelte:fragment slot="controls">
            <svelte:component this={Hst.Text} title="text" bind:value={text} />
		</svelte:fragment>
	</svelte:component>
</div>