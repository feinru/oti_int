<div class="left">
	<h1 class="heading">
		MAKE <span class="anime">IT</span> FOR EVERYONE
	</h1>
	<p class="desc">
		Memberdayakan Organisasi dan Bisnis dengan Solusi Berbasis TI, Kompetisi, dan Pembelajaran
	</p>
	<div class="group">
		<a href="/#about" class="btn">Get Started</a>
	</div>
</div>

<style lang="postcss" module>
	@reference "tailwindcss";

	.left {
		@apply mt-12 flex flex-col justify-center rounded-sm p-6 text-center lg:mt-0 lg:max-w-md lg:text-left xl:max-w-lg;
	}

	.heading {
		@apply text-5xl font-bold leading-none sm:text-6xl;
	}

	.anime {
		@apply bg-gradient-to-r from-[#f0861a] via-[#f29e3d] to-[#f0861a] bg-clip-text text-transparent;
		background-size: 500% auto;
		animation: shine 5s ease-in-out infinite alternate;
	}

	@keyframes shine {
		0% {
			background-position: 0% 50%;
		}
		100% {
			background-position: 100% 50%;
		}
	}

	.desc {
		@apply mb-8 mt-6 text-lg sm:mb-12;
	}

	.group {
		@apply flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0 lg:justify-start;
	}

	.btn {
		@apply rounded bg-[#f0861a] px-8 py-3 text-base font-semibold transition hover:opacity-80;
	}
</style>
