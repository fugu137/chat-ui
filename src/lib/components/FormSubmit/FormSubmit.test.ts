import { render, screen } from "@testing-library/svelte";
import { describe, it, expect, vi } from "vitest";
import FormSubmit from "./FormSubmit.svelte";

describe("Submit Button", () => {
	it("should display a button with the provided configuration", () => {
		render(FormSubmit, { buttonText: "Button text", buttonSize: "small", buttonVariant: "secondary", onButtonClick: vi.fn() });

        const button = screen.getByRole("button", { name: "Button text"});

        expect(button).toBeInTheDocument();
        expect(button).toHaveClass("small");
        expect(button).toHaveClass("secondary");
	});

    it("should display the passed in error message", () => {
		render(FormSubmit, { buttonText: "Button text", error: "A custom error message", onButtonClick: vi.fn() });
    
        const errorMessage = screen.getByRole("alert");

        expect(errorMessage).toHaveTextContent("A custom error message");
    });
});
