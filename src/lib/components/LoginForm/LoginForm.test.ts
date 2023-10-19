import { fireEvent, render, screen } from "@testing-library/svelte";
import { afterEach, describe, expect, it, vi } from "vitest";
import LoginForm from "./LoginForm.svelte";

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

	it("should display a 'Log in' button", () => {
		render(LoginForm, { onSubmit: vi.fn() });

		const loginButton = screen.getByRole("button", { name: "Log in" });

		expect(loginButton).toBeInTheDocument();
	});

	it("should set the size of the 'Log in' button based on the 'buttonSize' prop", () => {
		render(LoginForm, { onSubmit: vi.fn(), buttonSize: "small" });

		const loginButton = screen.getByRole("button", { name: "Log in" });

		expect(loginButton).toHaveClass("small")
	});

	it("should set the variant of the 'Log in' button based on the 'buttonVariant' prop", () => {
		render(LoginForm, { onSubmit: vi.fn(), buttonVariant: "secondary" });

		const loginButton = screen.getByRole("button", { name: "Log in" });

		expect(loginButton).toHaveClass("secondary")
	});

	describe("Submission and Validation", () => {
		it("should call 'onSubmit' with the form values when the 'Log in' button is clicked", async () => {
			const handleSubmitMock = vi.fn();

			render(LoginForm, { onSubmit: handleSubmitMock });

			const usernameInput = screen.getByLabelText("Username");
			const passwordInput = screen.getByLabelText("Password");

			await fireEvent.input(usernameInput, { target: { value: "Freddie" } });
			await fireEvent.input(passwordInput, { target: { value: "Pa$sword123" } });

			const loginButton = screen.getByRole("button", { name: "Log in" });
			await fireEvent.click(loginButton);

			expect(handleSubmitMock).toHaveBeenCalledOnce();
			expect(handleSubmitMock).toHaveBeenCalledWith({
				username: "Freddie",
				password: "Pa$sword123"
			});
		});

		it("should display an error message if one is passed in", async () => {
			render(LoginForm, {
				onSubmit: vi.fn(),
				error: "Please enter a valid username and password"
			});

			const errorMessage = screen.getByRole("alert");

			expect(errorMessage).toHaveTextContent(
				"Please enter a valid username and password"
			);
		});

		it("should mark the form as invalid if an error message is passed in", async () => {
			render(LoginForm, {
				onSubmit: vi.fn(),
				error: "Please enter a valid username and password"
			});

			const form = screen.getByRole("form");

			expect(form).toBeInvalid();
		});
	});
});
