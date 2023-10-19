<script lang="ts">
	import type { ButtonSize, ButtonVariant } from "./types";

    export let text: string | undefined;
    export let size: ButtonSize = "regular";
    export let variant: ButtonVariant = "primary";
    export let onClick: (event: MouseEvent) => void;
</script>

<button class={`${variant} ${size}`} on:click={onClick}>
    {text}
</button>

<style>
    button {
        color: black;
        background-color: transparent;
        border: 1px solid black;
        font-size: var(--font-size-small);
        border-radius: 3px;
        padding: 8px 16px;
        cursor: pointer;
    }
    button.small {
        font-size: var(--font-size-xsmall);
        padding: 6px 12px;
    }
    button.wide {
        width: var(--width-regular);
    }
    button.primary {
        color: white;
        background-color: var(--primary-colour);
        border-color: var(--primary-colour);
    }
    button.primary.wide {
        border-width: 2px;
    }
    button.primary:hover {
        background-color: var(--primary-colour-light);
        border-color: var(--primary-colour-light);
    }
    button.primary:active {
        background-color: var(--primary-colour-dark);
        border-color: var(--primary-colour-dark);
    }
    button.secondary {
        color: white;
        background-color: var(--secondary-colour);
        border: 1px solid var(--secondary-colour);
    }
    button.secondary.wide {
        border-width: 2px;
    }
    button.secondary:hover {
        background-color: var(--secondary-colour-light);
        border-color: var(--secondary-colour-light);
    }
    button.secondary:active {
        background-color: var(--secondary-colour-dark);
        border-color: var(--secondary-colour-light);
    }
</style>