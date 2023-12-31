import "@testing-library/jest-dom/vitest";
import { render, fireEvent, screen } from "@testing-library/svelte";
import { describe, expect, it } from "vitest";
import Input from "./Input.svelte";

describe("Input", () => {
	it("should render an input with the correct label", () => {
		render(Input, { name: "1", type: "text", label: "A label", value: "" });

		const input = screen.getByRole("textbox");

		expect(input).toBeInTheDocument();
		expect(input).toHaveAccessibleName("A label");
	});

	it("should display user-entered text", async() => {
		render(Input, { name: "1", type: "text", label: "A label", value: "" });

		const input = screen.getByRole("textbox");

		await fireEvent.input(input, { target: { value: "abc123@email.com" } });

		expect(input).toHaveValue("abc123@email.com");
	});

	it("should have type='text' when type prop is set to 'text'", () => {
		render(Input, { name: "1", type: "text", label: "A label", value: "" });

		const input = screen.getByLabelText("A label");

		expect(input).toHaveAttribute("type", "text");
	});

	it("should have type='password' when type prop is set to 'password", () => {
		render(Input, { name: "1", type: "password", label: "A label", value: "" });

		const input = screen.getByLabelText("A label");

		expect(input).toHaveAttribute("type", "password");
	});

	it("should display the provided error message", () => {
		render(Input, {
			name: "1",
			type: "text",
			label: "A label",
			value: "",
			error: "Please enter a username"
		});

		const input = screen.getByRole("textbox");

		expect(input).toHaveAccessibleErrorMessage("Please enter a username");
	});
});
