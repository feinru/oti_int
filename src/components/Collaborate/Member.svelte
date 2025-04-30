<script lang="ts">
	const memberList = $state([
		{
			name: 'Sultan Risqinta',
			division: 'External Affairs',
			department: 'Ketua',
			href: '/',
			age: '20',
			img: '/misc/2.jpg',
			generation: '2023'
		},
		{
			name: 'Sultan Risqinta',
			division: 'External Affairs',
			department: 'Ketua',
			href: '/',
			age: '20',
			img: '/misc/2.jpg',
			generation: '2023'
		},
		{
			name: 'Sultan Risqinta',
			division: 'External Affairs',
			department: 'Ketua',
			href: '/',
			age: '20',
			img: '/misc/2.jpg',
			generation: '2023'
		},
		{
			name: 'Sultan Risqinta',
			division: 'External Affairs',
			department: 'Ketua',
			href: '/',
			age: '20',
			img: '/misc/2.jpg',
			generation: '2023'
		},
		{
			name: 'Sultan Risqinta',
			division: 'External Affairs',
			department: 'Ketua',
			href: '/',
			age: '20',
			img: '/misc/2.jpg',
			generation: '2023'
		},
		{
			name: 'Sultan Risqinta',
			division: 'External Affairs',
			department: 'Ketua',
			href: '/',
			age: '20',
			img: '/misc/2.jpg',
			generation: '2023'
		},
		{
			name: 'Sultan Risqinta',
			division: 'External Affairs',
			department: 'Ketua',
			href: '/',
			age: '20',
			img: '/misc/2.jpg',
			generation: '2023'
		},
		{
			name: 'Sultan Risqinta',
			division: 'External Affairs',
			department: 'Ketua',
			href: '/',
			age: '20',
			img: '/misc/2.jpg',
			generation: '2023'
		}
	]);
</script>

<div class="member">
	<div class="cont">
		<h2 class="heading">View Our Partnership Opportunities</h2>
		<p class="desc">Pilih salah satu paket sesuai dengan preferensi kebutuhanmu!</p>
	</div>
	<div class="wrapper">
		{#each memberList as member}
			<div class="card group">
				<img src="/misc/2.jpg" alt={member.name} class="img" />
				<div class="blur"></div>
				<div class="info">
					<p><span class="txt">Divisi:</span> {member.division}</p>
					<p><span class="txt">Jabatan:</span> {member.department}</p>
					<p><span class="txt">Angkatan:</span> {member.generation}</p>
					<p><span class="txt">Umur:</span> {member.age} tahun</p>
				</div>
				<div class="bottom">
					<div>
						<h3 class="title">{member.name}</h3>
						<p class="desc">{member.department} {member.division}</p>
					</div>
					<a href="/" class="btn">Hubungi</a>
				</div>
			</div>
		{/each}
	</div>
</div>

<style lang="postcss" module>
	@reference "tailwindcss";

	.member {
		@apply mx-auto max-w-screen-2xl px-4 py-16 lg:px-8 lg:py-24 2xl:px-16;
	}

	.cont {
		@apply mx-auto mb-8 text-left lg:mb-12;
	}

	.heading {
		@apply mb-2 text-2xl font-extrabold tracking-tight;
	}

	.desc {
		@apply mb-4 text-base text-gray-300 opacity-90;
	}

	.wrapper {
		@apply grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4;
	}

	.card {
		@apply relative block aspect-square w-full flex-shrink-0 cursor-pointer overflow-hidden rounded-xl bg-black;
	}

	.img {
		@apply absolute inset-0 h-full w-full object-cover object-center opacity-60 transition duration-500 group-hover:scale-105;
	}

	.blur {
		@apply absolute inset-0 z-10 opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100;
	}

	.info {
		@apply -translate-1/2 absolute left-1/2 top-1/2 z-20 space-y-1 text-xs tracking-wide opacity-0 transition duration-300 group-hover:opacity-100;
	}

	.txt {
		@apply font-semibold;
	}

	.bottom {
		@apply absolute bottom-0 left-0 right-0 z-30 flex items-center justify-between px-4 py-3;
	}

	.title {
		@apply text-lg font-bold;
	}

	.desc {
		@apply text-xs text-gray-300;
	}

	.btn {
		@apply rounded border border-[#f0861a] px-2 py-0.5 text-xs transition hover:bg-[#f0861a];
	}
</style>
