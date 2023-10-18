import { fireEvent, render, screen } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";
import Form from "./LoginForm.svelte";

describe("Form", () => {
	it("should display a form", () => {
		render(Form);

		const form = screen.getByRole("form");

		expect(form).toBeInTheDocument();
	});

	it("should display a text input labelled 'Username'", () => {
		render(Form);

		const usernameInput = screen.getByRole("textbox");

		expect(usernameInput).toBeInTheDocument();
		expect(usernameInput).toHaveAccessibleName("Username");
	});

	it("should display a password input labelled 'Password'", () => {
		render(Form);

		const passwordInput = screen.getByLabelText("Password");

		expect(passwordInput).toBeInTheDocument();
		expect(passwordInput).toHaveAttribute("type", "password");
	});

	it("should allow users to enter a username and password", async () => {
		render(Form);

		const usernameInput = screen.getByLabelText("Username");
		const passwordInput = screen.getByLabelText("Password");

		await fireEvent.change(usernameInput, { target: { value: "Freddie" } });
		await fireEvent.change(passwordInput, { target: { value: "Pa$sword123" } });

		const form = screen.getByRole("form");

		expect(form).toHaveFormValues({
			username: "Freddie",
			password: "Pa$sword123"
		});
	});

	it("should display a 'Submit' button", () => {
		render(Form);

		const submitButton = screen.getByRole("button", { name: "Submit"});

		expect(submitButton).toBeInTheDocument();
	});
});
