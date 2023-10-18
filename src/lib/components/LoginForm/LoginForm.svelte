<script>
	import Button from "../Button/Button.svelte";
	import Input from "../Input/Input.svelte";
</script>

<form name="login-form">
	<Input name="username" label="Username" type="text" value="" />
	<Input name="password" label="Password" type="password" value="" />
	<Button text="Submit" />
</form>
