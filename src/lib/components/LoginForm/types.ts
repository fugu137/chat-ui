import type { ComponentProps } from "svelte";
import type LoginForm from "./LoginForm.svelte";

export type LoginFormProps = ComponentProps<LoginForm>;

export type LoginFormValues = {
    username: string;
    password: string;
}