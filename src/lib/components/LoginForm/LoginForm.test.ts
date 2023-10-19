import { fireEvent, render, screen } from "@testing-library/svelte";
import { describe, it, expect, vi, afterEach } from "vitest";
import LoginForm from "./LoginForm.svelte";
import type { LoginFormProps } from "./types";

describe("Login Form", () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("should display a form", () => {
		render(LoginForm, { onSubmit: vi.fn() });

		const form = screen.getByRole("form");

		expect(form).toBeInTheDocument();
	});

	it("should display a text input labelled 'Username'", () => {
		render(LoginForm, { onSubmit: vi.fn() });

		const usernameInput = screen.getByRole("textbox");

		expect(usernameInput).toBeInTheDocument();
		expect(usernameInput).toHaveAccessibleName("Username");
	});

	it("should display a password input labelled 'Password'", () => {
		render(LoginForm, { onSubmit: vi.fn() });

		const passwordInput = screen.getByLabelText("Password");

		expect(passwordInput).toBeInTheDocument();
		expect(passwordInput).toHaveAttribute("type", "password");
	});

	it("should allow users to enter a username and password", async () => {
		render(LoginForm, { onSubmit: vi.fn() });

		const usernameInput = screen.getByLabelText("Username");
		const passwordInput = screen.getByLabelText("Password");

		await fireEvent.input(usernameInput, { target: { value: "Freddie" } });
		await fireEvent.input(passwordInput, { target: { value: "Pa$sword123" } });

		const form = screen.getByRole("form");

		expect(form).toHaveFormValues({
			username: "Freddie",
			password: "Pa$sword123"
		});
	});

	it("should display a 'Submit' button", () => {
		render(LoginForm, { onSubmit: vi.fn() });

		const submitButton = screen.getByRole("button", { name: "Submit" });

		expect(submitButton).toBeInTheDocument();
	});

	it("should call 'onSubmit' with the form values when the 'Submit' button is clicked", async () => {
		const handleSubmitMock = vi.fn() as LoginFormProps["onSubmit"];

		render(LoginForm, { onSubmit: handleSubmitMock });

		const usernameInput = screen.getByLabelText("Username");
		const passwordInput = screen.getByLabelText("Password");

		await fireEvent.input(usernameInput, { target: { value: "Freddie" } });
		await fireEvent.input(passwordInput, { target: { value: "Pa$sword123" } });

		const submitButton = screen.getByRole("button", { name: "Submit" });
		await fireEvent.click(submitButton);

		expect(handleSubmitMock).toHaveBeenCalledOnce();
		expect(handleSubmitMock).toHaveBeenCalledWith({
			username: "Freddie",
			password: "Pa$sword123"
		});
	});
});
