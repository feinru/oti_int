<script lang="ts">
	const awardList = $state([
		{
			title: 'Cerita dengan Hati',
			desc: '4C – Universitas Brawijaya',
			href: '/',
			img: '/awards/1.png',
			challenge: 'UX Challenge',
			place: 'Champion',
			category: 'Produk Digital',
			year: '2024'
		},
		{
			title: 'Cerita dengan Wawasan',
			desc: 'Universitas Indonesia',
			href: '/',
			img: '/awards/2.jpg',
			challenge: 'Datathon',
			place: 'Champion',
			category: 'Data & Inovasi',
			year: '2024'
		},
		{
			title: 'Pola dengan Tujuan',
			desc: 'Universitas Negeri Yogyakarta',
			href: '/',
			img: '/awards/3.jpg',
			challenge: 'Data Mining',
			place: 'Runner Up',
			category: 'Data & Analisis',
			year: '2024'
		},
		{
			title: 'Cerita dengan Hati',
			desc: '4C – Universitas Brawijaya',
			href: '/',
			img: '/awards/1.png',
			challenge: 'UX Challenge',
			place: 'Champion',
			category: 'Digital Product',
			year: '2024'
		}
	]);
</script>

{#each awardList as award}
	<a href={award.href} class="card group">
		<img src={award.img} alt={award.challenge} class="img" />

		<div class="blur"></div>

		<div class="info">
			<div class="details">
				<span>{award.place}</span>
				<span>Kategori:</span>
			</div>
			<div class="details">
				<span>{award.challenge}</span>
				<span>{award.category}</span>
			</div>
		</div>

		<div class="wrapper">
			<h2 class="heading">
				{award.title}
			</h2>
			<p class="desc">{award.desc}</p>
		</div>

		<div class="cont">
			<span>{award.year}</span>
			<span class="btn">Visit</span>
		</div>
	</a>
{/each}

<style lang="postcss" module>
	@reference "tailwindcss";

	.card {
		@apply relative block h-[400px] w-[400px] flex-shrink-0 cursor-pointer overflow-hidden rounded-xl bg-black;
	}

	.img {
		@apply absolute inset-0 h-full w-full object-cover object-center opacity-60 transition duration-500 group-hover:scale-105;
	}

	.blur {
		@apply absolute inset-0 z-10 backdrop-blur-md transition;
	}

	.info {
		@apply absolute left-4 right-4 top-4 z-20 space-y-1 text-xs uppercase tracking-widest text-gray-300 opacity-0 transition-all duration-300 group-hover:opacity-100;
	}

	.details {
		@apply flex justify-between;
	}

	.wrapper {
		@apply relative z-20 flex h-full flex-col items-center justify-center px-6 text-center;
	}

	.heading {
		@apply text-3xl font-extrabold leading-tight tracking-tight text-white;
	}

	.desc {
		@apply mt-2 text-sm text-gray-300;
	}

	.cont {
		@apply absolute bottom-4 left-4 right-4 z-20 flex justify-between text-xs uppercase tracking-wide text-white opacity-80;
	}

	.btn {
		@apply rounded border border-[#f0861a] px-2 py-0.5 transition group-hover:bg-[#f0861a];
	}
</style>
