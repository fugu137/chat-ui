<script lang="ts">
	export let solid: boolean = false;
	export let colour: string = "black";
	export let width: string | number = "var(--icon-height-small)";
	export let height: string | number = "var(--icon-height-small)";
</script>

{#if solid}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={width}
		height={height}
		viewBox="0 0 24 24"
	>
		<path
			fill={colour}
			fill-rule="evenodd"
			d="M3.25 12a8.75 8.75 0 1 1 17.5 0a8.75 8.75 0 0 1-17.5 0ZM13 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-1 2.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75Z"
			clip-rule="evenodd"
		/>
	</svg>
{:else}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={width}
		height={height}
		viewBox="0 0 24 24"
	>
		<path
			fill={colour}
			d="M12 10.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75ZM12 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
		/>
		<path
			fill={colour}
			fill-rule="evenodd"
			d="M3.25 12a8.75 8.75 0 1 1 17.5 0a8.75 8.75 0 0 1-17.5 0ZM12 4.75a7.25 7.25 0 1 0 0 14.5a7.25 7.25 0 0 0 0-14.5Z"
			clip-rule="evenodd"
		/>
	</svg>
{/if}
