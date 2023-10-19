<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
	import { logEvent } from "histoire/client";
    import LoginForm from "./LoginForm.svelte";

	export let Hst: Hst;
</script>

<div class="histoire-story">
	<svelte:component this={Hst.Story} title="Login Form/Login Form">
		<LoginForm onSubmit={(formValues) => logEvent("Submit", formValues)}/>
	</svelte:component>
</div>
