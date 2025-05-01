<div class="interested">
	<div class="cont">
		<div class="left">
			<h2 class="heading">
				GET UP TO <span class="highlight">25% OFF</span><br />
				FROM REFERRAL!
			</h2>
			<p class="desc">
				Ajak minimal 5 orang untuk membeli jasa OmahTI dan nikmati potongan harga sebesar 25% untuk
				layanan pilihanmu!
			</p>
			<a
				href="https://docs.google.com/forms/d/e/1FAIpQLScSNDYtD9X7pl0ezqKhgyHco3LP0NspZZ4KHSoS1AMWPI-lAg/viewform"
				target="_blank"
				rel="noopener noreferrer"
				class="btn">Daftar Sekarang</a
			>
		</div>

		<div class="right">
			<img src="/referral/1.png" alt="Referral Discount" class="img" />
			<img src="/referral/2.png" alt="Referral Discount" class="img abs_img" />
		</div>
	</div>
</div>

<style lang="postcss" module>
	@reference "tailwindcss";

	.interested {
		@apply my-24 flex w-full flex-col items-center pt-16;
	}

	.cont {
		@apply flex flex-col-reverse items-center justify-between gap-8 rounded-2xl lg:flex-row;
	}

	.left {
		@apply max-w-lg space-y-4 text-center lg:text-left;
	}

	.heading {
		@apply text-4xl font-bold uppercase leading-tight;
	}

	.highlight {
		@apply text-[#f0861a];
	}

	.desc {
		@apply text-base text-gray-300;
	}

	.btn {
		@apply mx-auto mt-6 block w-fit rounded bg-[#f0861a] px-6 py-3 font-semibold transition hover:opacity-80 lg:mx-0;
	}

	.right {
		@apply relative w-64 max-w-[45%] flex-shrink-0 lg:w-80;
	}

	.img {
		@apply h-auto w-full;
	}

	.abs_img {
		@apply absolute -bottom-16 -right-20 rotate-[345deg] lg:-bottom-20 lg:-right-8 xl:-bottom-24 xl:-right-28;
	}
</style>
