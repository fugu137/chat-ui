import type { ComponentProps } from "svelte";
import type Button from "./Button.svelte";

export type ButtonProps = ComponentProps<Button>;

export type ButtonSize = "small" | "regular" | "wide";
export type ButtonVariant = "primary" | "secondary";