<script lang="ts">
	const pricingList = $state([
		{
			tag: 'App Development',
			price: 'Rp3,5Jt',
			href: '/',
			benefits: [
				'Desain UI/UX — 2 revisi',
				'Pengembangan Lintas Platform',
				'Gratis Uji Coba Pengguna',
				'1-Jam Konsultasi Gratis',
				'1-Bulan Dukungan'
			]
		},
		{
			tag: 'Web Development',
			price: 'Rp3,5Jt',
			href: '/',
			benefits: [
				'Layanan Lengkap',
				'UI Responsif dan Mobile Friendly',
				'Optimasi SEO',
				'1-Jam Konsultasi Gratis',
				'1-Bulan Dukungan'
			]
		},
		{
			tag: 'AI Development',
			price: 'Rp5Jt',
			href: '/',
			benefits: [
				'Integrasi AI',
				'Otomatisasi Proses Bisnis',
				'Analisis Data Cerdas',
				'1-Jam Konsultasi Gratis',
				'1-Bulan Dukungan'
			]
		}
	]);
</script>

<div class="pricing">
	<div class="cont">
		<h2 class="heading">View Our Partnership Opportunities</h2>
		<p class="desc">Pilih salah satu paket sesuai dengan preferensi kebutuhanmu!</p>
	</div>
	<div class="prices">
		{#each pricingList as item}
			<div class="card">
				<div class="tag">
					<button class="tag-btn">{item.tag}</button>
				</div>
				<div class="content">
					<ul class="items">
						{#each item.benefits as benefit}
							<li class="item">
								<svg
									class="icon"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414L8.414 15 4.707 11.293a1 1 0 00-1.414 1.414l4.5 4.5a1 1 0 001.414 0l9-9a1 1 0 00-1.414-1.414z"
										clip-rule="evenodd"
									></path>
								</svg>
								<span>{benefit}</span>
							</li>
						{/each}
					</ul>
				</div>
				<div class="bottom">
					<a href={item.href} class="btn">Registration</a>
					<a href={item.href} class="outlined-btn">Download Proposal</a>
				</div>
			</div>
		{/each}
	</div>
</div>

<style lang="postcss" module>
	@reference "tailwindcss";

	.pricing {
		@apply mx-auto max-w-screen-2xl px-4 py-16 lg:px-8 lg:py-32 2xl:px-16;
	}

	.cont {
		@apply mx-auto mb-8 text-left lg:mb-12;
	}

	.prices {
		@apply space-y-8 sm:gap-6 md:grid md:grid-cols-2 md:space-y-0 xl:grid-cols-3 xl:gap-10;
	}

	.heading {
		@apply mb-2 text-2xl font-extrabold tracking-tight;
	}

	.desc {
		@apply mb-4 text-base text-gray-300 opacity-90;
	}

	.card {
		@apply px-17 relative flex aspect-square w-full items-center justify-center rounded-lg border border-[#efeeec14] bg-[#efeeec0f] py-24 transition-colors md:px-20 md:py-32;
	}

	.tag {
		@apply absolute top-10 flex items-center justify-start gap-2 text-[#efeeec];
	}

	.tag-btn {
		@apply relative flex items-center justify-start rounded-sm bg-black px-2 py-1 text-xl font-bold uppercase;
	}

	.content {
		@apply grid w-full flex-col items-center justify-center gap-x-16 gap-y-2 text-center lg:gap-y-8 xl:gap-y-4 2xl:gap-y-8;
	}

	.items {
		@apply mb-8 space-y-4 text-center text-sm opacity-90;
	}

	.item {
		@apply flex items-center justify-center space-x-3;
	}

	.icon {
		@apply h-5 w-5 shrink-0 text-[#f0861a];
	}

	.bottom {
		@apply absolute bottom-10 left-10 right-10 flex space-x-2;
	}

	.btn {
		@apply relative flex h-12 w-1/2 items-center justify-center rounded bg-[#f0861a] px-6 text-center font-medium text-white transition hover:opacity-80;
	}

	.outlined-btn {
		@apply relative flex h-12 w-1/2 items-center justify-center rounded border border-[#f0861a] px-6 text-center font-medium text-white transition hover:bg-[#f0861a];
	}
</style>
