<script>
	import Left from './Left.svelte';
	import Right from './Right.svelte';
</script>

<div class="hero">
	<div class="cont">
		<Left />
		<Right />
	</div>
</div>

<style lang="postcss" module>
	@reference "tailwindcss";

	.hero {
		@apply relative;
	}

	.cont {
		@apply flex flex-col-reverse justify-between overflow-hidden px-4 pb-6 pt-8 lg:flex-row lg:pl-8 lg:pr-0 lg:pt-4 2xl:pl-16 2xl:pr-0;
	}
</style>
