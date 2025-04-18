<div class="brand">
	<img src="/brand.png" alt="OmahTI Logo" class="img" />
	<p class="desc">
		<span class="separate">Departemen Ilmu Komputer dan Elektronika </span> Fakultas Matematika dan Ilmu
		Pengetahuan Alam Universitas Gadjah Mada Gedung C, Lantai 4 Sekip Utara Bulaksumur Yogyakarta 55281
	</p>
</div>

<style lang="postcss" module>
	@reference "tailwindcss";

	.brand {
		@apply flex flex-col items-center sm:items-start;
	}

	.img {
		@apply h-6 w-auto;
	}

	.desc {
		@apply mt-8 max-w-md text-center text-gray-500 sm:max-w-lg sm:text-left;
	}

	.separate {
		@apply block;
	}
</style>
