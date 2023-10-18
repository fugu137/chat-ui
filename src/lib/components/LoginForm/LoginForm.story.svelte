<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
	import type { ComponentProps } from "svelte";
    import Form from "./LoginForm.svelte";

	export let Hst: Hst;
</script>

<div class="histoire-story">
	<svelte:component this={Hst.Story} title="Login Form/Login Form">
		<Form />

		<svelte:fragment slot="controls">
		</svelte:fragment>
	</svelte:component>
</div>
