import { render, screen } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";
import ValidationBar from "./ValidationArea.svelte";

describe("Validation Bar", () => {
	it("should display an error message if an error is passed in", () => {
		render(ValidationBar, { ariaId: "id", error: "Error message to display" });

		const errorMessage = screen.getByRole("alert");

        expect(errorMessage).toHaveTextContent("Error message to display");
	});

    it("should not display an error message if no error is passed in", () => {
		render(ValidationBar, { ariaId: "id" });

		const errorMessage = screen.queryByRole("alert");

        expect(errorMessage).not.toBeInTheDocument();
	});
});
