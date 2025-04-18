<script lang="ts">
	import LinkedIn from 'lucide-svelte/icons/linkedin';
	import Instagram from 'lucide-svelte/icons/instagram';
	import Twitter from 'lucide-svelte/icons/twitter';

	const socialLinks = $state([
		{ name: 'LinkedIn', icon: LinkedIn },
		{ name: 'Instagram', icon: Instagram },
		{ name: 'Twitter', icon: Twitter }
	]);
</script>

<div class="copyright">
	<p class="text">&copy;{new Date().getFullYear()} OmahTI. All rights reserved.</p>

	<ul class="socials">
		{#each socialLinks as social}
			<li>
				<a href="/" aria-label={social.name} class="icon">
					<span class="size">
						<social.icon />
					</span>
				</a>
			</li>
		{/each}
	</ul>

	<p class="text">
		<span>By Neural Network - OmahTI</span>
	</p>
</div>

<style lang="postcss" module>
	@reference "tailwindcss";

	.copyright {
		@apply mt-12 flex flex-col items-center justify-center gap-4 pt-6 text-center capitalize sm:flex-row sm:items-end sm:justify-between sm:gap-0;
	}

	.socials {
		@apply flex justify-center gap-6 sm:justify-start md:gap-8;
	}

	.icon {
		@apply text-amber-600 transition hover:opacity-70;
		color: #f0861a;
	}

	.size {
		@apply h-6 w-6;
	}

	.text {
		@apply text-sm text-gray-500;
	}
</style>
