<script lang="ts">
	import { MapPin, Mail, Phone } from 'lucide-svelte';

	const sections = $state([
		{
			title: 'Kontak Kami',
			links: [
				{ icon: Mail, text: 'abc@gmail.com' },
				{ icon: Phone, text: '0123456789' },
				{ icon: MapPin, text: 'Yogyakarta, Sleman' }
			]
		}
	]);
</script>

<div class="links">
	{#each sections as section}
		<div class="cont">
			<p class="title">{section.title}</p>
			<ul class="items">
				{#each section.links as link}
					<li>
						<span class="item">
							<span class="size">
								<link.icon />
							</span>
							{link.text}
						</span>
					</li>
				{/each}
			</ul>
		</div>
	{/each}
</div>

<style lang="postcss" module>
	@reference "tailwindcss";

	.links {
		@apply grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2;
	}

	.cont {
		@apply text-center sm:text-left;
	}

	.title {
		@apply text-lg font-medium text-white;
	}

	.items {
		@apply mt-4 space-y-2 text-sm;
	}

	.item {
		@apply flex items-center justify-center gap-2 text-gray-500 transition hover:text-gray-500 sm:justify-start;
	}

	.size {
		@apply h-6 w-6;
	}
</style>
