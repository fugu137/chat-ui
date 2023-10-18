import { render, screen } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";
import Form from "./Form.svelte";

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

        const passwordInput = screen.getByLabelText("Password")

		expect(passwordInput).toBeInTheDocument();
        expect(passwordInput).toHaveAttribute("type", "password")
	});

    it("should display a 'Submit' button", () => {

    });
    
    it("should allow users to enter a username and password", () => {

    });
});
