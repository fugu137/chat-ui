<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
	import type { LoginFormProps } from "./types";
	import { logEvent } from "histoire/client";
	import LoginForm from "./LoginForm.svelte";

	export let Hst: Hst;

	let error: LoginFormProps["error"];
	let buttonVariant: LoginFormProps["buttonVariant"] = "primary";
	let buttonSize: LoginFormProps["buttonSize"] = "regular";
</script>

<div class="histoire-story">
	<svelte:component this={Hst.Story} title="Login Form/Login Form">
		<LoginForm
			error={error}
			buttonSize={buttonSize}
			buttonVariant={buttonVariant}
			onSubmit={(formValues) => logEvent("Submit", formValues)}
		/>

		<svelte:fragment slot="controls">
			<svelte:component
				this={Hst.Select}
				title="buttonVariant"
				bind:value={buttonVariant}
				options={["primary", "secondary"]}
			/>
			<svelte:component
				this={Hst.Select}
				title="buttonSize"
				bind:value={buttonSize}
				options={["small", "regular", "wide"]}
			/>
			<svelte:component this={Hst.Text} title="error" bind:value={error} />
		</svelte:fragment>
	</svelte:component>
</div>
