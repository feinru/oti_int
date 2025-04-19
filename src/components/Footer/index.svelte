<script lang="ts">
	import Background from './Background.svelte';
	import Brand from './Brand.svelte';
	import Copyright from './Copyright.svelte';
	import Divider from './Divider.svelte';
	import Links from './Links.svelte';
</script>

<Divider />

<footer class="footer">
	<div class="cont">
		<div class="grid">
			<Brand />
			<Links />
		</div>

		<Background />
		<Copyright />
	</div>
</footer>

<style lang="postcss" module>
	@reference "tailwindcss";

	.footer {
		@apply relative pt-12;
	}

	.cont {
		@apply px-4 pb-6 pt-8 lg:px-8 lg:pt-16 2xl:px-16;
	}

	.grid {
		@apply flex flex-col justify-between gap-12 sm:flex-row;
	}
</style>
