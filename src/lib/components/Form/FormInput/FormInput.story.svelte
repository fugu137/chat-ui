<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	import type { ComponentProps } from 'svelte';
	import FormInput from '$lib/components/Form/FormInput/FormInput.svelte';

	export let Hst: Hst;

	const defaultStory = {
		id: 'form-input--default',
		label: 'Label:',
		type: 'text',
		value: 'First name',
		error: undefined
	} satisfies ComponentProps<FormInput>;

	const errorStory = {
		id: 'form-input--error',
		label: 'Label:',
		type: 'text',
		value: '',
		error: 'Please enter a username between 0 and 12 characters'
	} satisfies ComponentProps<FormInput>;

	const passwordStory = {
		id: 'form-input--password',
		label: 'Password:',
		type: 'password',
		value: 'password123',
		error: undefined
	} satisfies ComponentProps<FormInput>;
</script>

<div class="histoire-story">
	<Hst.Story title="Form/Input/Variants" layout={{ type: 'grid', width: 500 }}>
		<Hst.Variant title="Default">
			<FormInput
				id={defaultStory.id}
				type={defaultStory.type}
				label={defaultStory.label}
				value={defaultStory.value}
				error={defaultStory.error}
			/>

			<svelte:fragment slot="controls">
				<Hst.Select
					title="type"
					bind:value={defaultStory.type}
					options={['text', 'password']}
				/>
				<Hst.Text title="label" bind:value={defaultStory.label} />
				<Hst.Text title="error" bind:value={defaultStory.error} />
			</svelte:fragment>
		</Hst.Variant>

		<Hst.Variant title="Error">
			<FormInput
				id={errorStory.id}
				type={errorStory.type}
				label={errorStory.label}
				value={errorStory.value}
				error={errorStory.error}
			/>

			<svelte:fragment slot="controls">
				<Hst.Select
					title="type"
					bind:value={errorStory.type}
					options={['text', 'password']}
				/>
				<Hst.Text title="label" bind:value={errorStory.label} />
				<Hst.Text title="error" bind:value={errorStory.error} />
			</svelte:fragment>
		</Hst.Variant>

		<Hst.Variant title="Password">
			<FormInput
				id={passwordStory.id}
				type={passwordStory.type}
				label={passwordStory.label}
				value={passwordStory.value}
				error={passwordStory.error}
			/>

			<svelte:fragment slot="controls">
				<Hst.Select
					title="type"
					bind:value={passwordStory.type}
					options={['text', 'password']}
				/>
				<Hst.Text title="label" bind:value={passwordStory.label} />
				<Hst.Text title="error" bind:value={passwordStory.error} />
			</svelte:fragment>
		</Hst.Variant>
	</Hst.Story>
	
</div>
