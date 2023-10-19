import "@testing-library/jest-dom/vitest";
import { render, fireEvent, screen } from "@testing-library/svelte";
import { describe, expect, it, vi } from "vitest";
import Button from "./Button.svelte"

describe("Button", () => {
	it("should render a button with the correct text", () => {
		render(Button, { text: "Button text", onClick: vi.fn() });

		const button = screen.getByRole("button");

		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent("Button text")
	});

	it("should call 'onClick when the button is clicked", async () => {
		const handleClickMock = vi.fn();

		render(Button, { text: "Button text", onClick: handleClickMock });

		const button = screen.getByRole("button");

		await fireEvent.click(button);

		expect(handleClickMock).toHaveBeenCalledOnce();
	});

	describe("Variants", () => {
		it("should have the primary colour if the 'variant' prop is set to 'primary'", async () => {
			render(Button, { text: "Button text", variant: "primary", onClick: vi.fn() });
	
			const button = screen.getByRole("button");
	
			expect(button).toHaveClass("primary");
		});

		it("should have the primary colour if the 'variant' prop isn't set", async () => {
			render(Button, { text: "Button text", onClick: vi.fn() });
	
			const button = screen.getByRole("button");
	
			expect(button).toHaveClass("primary");
		});

		it("should have the secondary colour if the 'variant' prop is set to 'secondary'", async () => {
			render(Button, { text: "Button text", variant: "secondary", onClick: vi.fn() });
	
			const button = screen.getByRole("button");
	
			expect(button).toHaveClass("secondary");
		});
	});

	describe("Sizes", () => {
		it("should be regular sized if 'size' prop isn't set", async () => {
			render(Button, { text: "Button text", onClick: vi.fn() });
	
			const button = screen.getByRole("button");
	
			expect(button).toHaveClass("regular");
		});

		it("should be regular sized if the 'size' prop is set to 'regular'", async () => {
			render(Button, { text: "Button text", size: "regular", onClick: vi.fn() });
	
			const button = screen.getByRole("button");
	
			expect(button).toHaveClass("regular");
		});
	
		it("should be small sized if the 'size' prop is set to 'small'", async () => {
			render(Button, { text: "Button text", size: "small", onClick: vi.fn() });
	
			const button = screen.getByRole("button");
	
			expect(button).toHaveClass("small");
		});
	
		it("should be wide if the 'size' prop is set to 'wide'", async () => {
			render(Button, { text: "Button text", size: "wide", onClick: vi.fn() });
	
			const button = screen.getByRole("button");
	
			expect(button).toHaveClass("wide");
		});
	});
});