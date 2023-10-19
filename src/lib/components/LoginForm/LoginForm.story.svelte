<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
	import type { LoginFormProps } from "./types";
	import { logEvent } from "histoire/client";
	import LoginForm from "./LoginForm.svelte";

	export let Hst: Hst;

	let error: LoginFormProps["error"];
</script>

<div class="histoire-story">
	<svelte:component this={Hst.Story} title="Login Form/Login Form">
		<LoginForm error={error} onSubmit={(formValues) => logEvent("Submit", formValues)} />

		<svelte:fragment slot="controls">
			<svelte:component this={Hst.Text} title="error" bind:value={error} />
		</svelte:fragment>
	</svelte:component>
</div>
