<script lang="ts">
	import type { Hst } from "@histoire/plugin-svelte";
	import type { FormSubmitProps } from "./types";
    import FormSubmit from "./FormSubmit.svelte";
	import { logEvent } from "histoire/client";

	export let Hst: Hst;

    let buttonText: FormSubmitProps["buttonText"] = "Submit";
    let buttonVariant: FormSubmitProps["buttonVariant"] = "primary";
    let buttonSize: FormSubmitProps["buttonSize"] = "regular";
    let error: FormSubmitProps["error"];
</script>

<div class="histoire-story">
	<svelte:component this={Hst.Story} title="Login Form/Subcomponents/Form Submit">
		<FormSubmit 
            buttonText={buttonText}
            buttonVariant={buttonVariant}
            buttonSize={buttonSize}
            error={error}
            onButtonClick={(event) => logEvent("Submit", event)}
        />

		<svelte:fragment slot="controls">
			<svelte:component this={Hst.Text} title="buttonText" bind:value={buttonText} />
			<svelte:component this={Hst.Text} title="error" bind:value={error} />
			<svelte:component this={Hst.Select} title="buttonVariant" bind:value={buttonVariant} options={["primary", "secondary"]} />
			<svelte:component this={Hst.Select} title="buttonSize" bind:value={buttonSize} options={["small", "regular", "wide"]} />
		</svelte:fragment>
	</svelte:component>
</div>