import "@testing-library/jest-dom/vitest";
import { render, fireEvent, screen } from "@testing-library/svelte";
import { describe, expect, it } from "vitest";
import Button from "./Button.svelte"

describe("Button", () => {
	it("should render a button with the correct text", () => {
		render(Button, { text: "Button text" });

		const button = screen.getByRole("button");

		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent("Button text")
	})
});