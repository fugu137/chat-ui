import type { ComponentProps } from "svelte";
import type Button from "./Button.svelte";

export type ButtonProps = ComponentProps<Button>;

export type ButtonSize = "small" | "medium" | "large";
export type ButtonVariant = "primary" | "secondary";