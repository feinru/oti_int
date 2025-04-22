<script lang="ts">
	const benefits = $state([
		'Dibantu atau di-guide langsung oleh PM',
		'Terbuka untuk kritik dan revisi',
		'Resources sudah ada dari OmahTI',
		'Ditangani oleh developer profesional',
		'Waktu meeting dan kerja yang fleksibel'
	]);
	let servicesList = $state([
		{ name: 'UI/UX', price: 1250000, isAdded: true },
		{ name: 'Front End', price: 1250000, isAdded: true },
		{ name: 'Back End', price: 1250000, isAdded: true },
		{ name: 'Data Science', price: 1250000, isAdded: false },
		{ name: 'Game Dev', price: 2500000, isAdded: false },
		{ name: 'App Dev', price: 1250000, isAdded: false },
		{ name: 'AI & ML', price: 3500000, isAdded: false },
		{ name: 'Product Dev', price: 1250000, isAdded: false }
	]);
	let total = $derived(
		servicesList
			.filter((service) => service.isAdded)
			.map((service, index) => {
				let price = service.price;
				if (index >= 1) {
					const extraDiscount = index * 0.0222;
					const totalDiscount = 0.0667 + extraDiscount;
					price = price * (1 - totalDiscount);
				}
				return price;
			})
			.reduce((sum, p) => sum + p, 0)
	);
</script>

<div class="service">
	<p class="desc">atau</p>
	<h3 class="heading">Pilih jasa spesifik dari OmahTI</h3>
	<div class="cont">
		<div class="left">
			<h3 class="left_title">Benefit dari jasa spesifik</h3>
			<ul class="benefits">
				{#each benefits as benefit}
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
		<div class="right">
			<h2 class="right_title">Pilih Jasa</h2>
			<div class="wrapper">
				{#each servicesList as service, i}
					{#if service.isAdded === false}
						<button
							type="button"
							class="unselected"
							onclick={() => (servicesList[i].isAdded = true)}
						>
							{service.name}
						</button>
					{/if}
				{/each}
			</div>
			<div class="mt-8">
				<h2 class="mb-4 text-lg font-semibold">Jasa Terpilih</h2>
				<div class="wrapper mb-4">
					{#each servicesList as service, i}
						{#if service.isAdded === true}
							<div class="selected">
								{service.name}
								<button
									class="remove"
									type="button"
									onclick={() => (servicesList[i].isAdded = false)}>✕</button
								>
							</div>
						{/if}
					{/each}
				</div>
				<button
					class="remove_all"
					onclick={() => {
						servicesList = servicesList.map((service) => ({ ...service, isAdded: false }));
					}}>Clear All</button
				>

				<div class="divider-container">
					<div class="divider"></div>
				</div>

				<p class="total">Total</p>
				<p class="price">
					IDR {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
				</p>
				<p class="tax">Including taxes</p>

				<a href="/" class="btn"> Payment Process </a>
			</div>
		</div>
	</div>
</div>

<style lang="postcss" module>
	@reference "tailwindcss";

	.service {
		@apply mx-auto max-w-screen-2xl px-4 py-16 lg:px-8 lg:py-32 2xl:px-16;
	}

	.desc {
		@apply text-center text-xl;
	}

	.heading {
		@apply mt-8 text-center text-4xl font-extrabold tracking-tight;
	}

	.cont {
		@apply mt-20 flex flex-col gap-6 p-6 lg:flex-row;
	}

	.left {
		@apply mb-12 w-full lg:ml-20 lg:w-1/2;
	}

	.left_title {
		@apply mb-3 text-2xl font-semibold;
	}

	.benefits {
		@apply list-inside list-disc space-y-2 text-base text-white/80;
	}

	.item {
		@apply flex items-center space-x-3;
	}

	.icon {
		@apply h-5 w-5 shrink-0 text-[#f0861a];
	}

	.right {
		@apply w-full space-y-3 lg:w-1/2;
	}

	.right_title {
		@apply mb-4 text-xl font-semibold;
	}

	.wrapper {
		@apply flex flex-wrap gap-2;
	}

	.unselected {
		@apply cursor-pointer rounded-full border border-white px-4 py-2 transition hover:border-[#f0861a] hover:bg-[#f0861a];
	}

	.selected {
		@apply flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-[#000];
	}

	.remove {
		@apply ml-2 cursor-pointer text-base;
	}

	.remove_all {
		@apply cursor-pointer text-sm underline;
	}

	.divider-container {
		@apply my-9;
	}

	.divider {
		background-image: linear-gradient(
			90deg,
			#efeeec00,
			color-mix(in oklab, #ffffff 20%, transparent) 25%,
			color-mix(in oklab, #ffffff 20%, transparent) 75%,
			#efeeec00
		);
		width: 100%;
		height: 1px;
	}

	.total {
		@apply mb-1 text-sm text-white/70;
	}

	.price {
		@apply text-2xl font-bold;
	}

	.tax {
		@apply text-xs text-white/60;
	}

	.btn {
		@apply mt-4 block w-fit rounded bg-[#f0861a] px-6 py-2 font-semibold transition hover:opacity-80;
	}
</style>
