<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
    import LoginForm from "./LoginForm.svelte";

	export let Hst: Hst;
</script>

<div class="histoire-story">
	<svelte:component this={Hst.Story} title="Login Form/Login Form">
		<LoginForm />

		<svelte:fragment slot="controls">
		</svelte:fragment>
	</svelte:component>
</div>
