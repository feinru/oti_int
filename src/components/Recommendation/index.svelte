<script lang="ts">
</script>

<div class="recommendation">
	<h3 class="heading">Masih bingung memilih yang tepat?</h3>
	<p class="desc">
		Temukan solusi terbaik untuk permasalahanmu bersama para ahli berpengalaman dari OmahTI yang
		siap membantumu kapan saja.
	</p>
	<form action="#" method="POST" class="mx-auto mt-20 max-w-3xl">
		<div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
			<div>
				<label for="first-name" class="block text-sm font-semibold">Nama depan</label>
				<div class="mt-2.5">
					<input
						type="text"
						name="first-name"
						id="first-name"
						autocomplete="given-name"
						placeholder="Ellen"
						class="block w-full rounded-md border border-white/10 bg-white/10 px-3.5 py-2 text-base backdrop-blur-md placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
					/>
				</div>
			</div>
			<div>
				<label for="last-name" class="block text-sm font-semibold">Nama belakang</label>
				<div class="mt-2.5">
					<input
						type="text"
						name="last-name"
						id="last-name"
						autocomplete="family-name"
						placeholder="Joe"
						class="block w-full rounded-md border border-white/10 bg-white/10 px-3.5 py-2 text-base backdrop-blur-md placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
					/>
				</div>
			</div>
			<div class="sm:col-span-2">
				<label for="company" class="block text-sm font-semibold">Perusahaan</label>
				<div class="mt-2.5">
					<input
						type="text"
						name="company"
						id="company"
						autocomplete="organization"
						placeholder="Perusahaan"
						class="block w-full rounded-md border border-white/10 bg-white/10 px-3.5 py-2 text-base backdrop-blur-md placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
					/>
				</div>
			</div>
			<div class="sm:col-span-2">
				<label for="email" class="block text-sm font-semibold">Email</label>
				<div class="mt-2.5">
					<input
						type="email"
						name="email"
						id="email"
						autocomplete="email"
						placeholder="you@example.com"
						class="block w-full rounded-md border border-white/10 bg-white/10 px-3.5 py-2 text-base backdrop-blur-md placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
					/>
				</div>
			</div>
			<div class="sm:col-span-2">
				<label for="message" class="block text-sm font-semibold">Masalah</label>
				<div class="mt-2.5">
					<textarea
						name="message"
						id="message"
						rows="4"
						placeholder="Masalah yang kamu miliki"
						class="block w-full rounded-md border border-white/10 bg-white/10 px-3.5 py-2 text-base backdrop-blur-md placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
					></textarea>
				</div>
			</div>
		</div>
		<div class="mt-10">
			<button
				type="submit"
				class="relative block h-12 w-full items-center rounded bg-[#f0861a] px-6 font-medium text-white transition hover:opacity-80"
			>
				Let's talk
			</button>
		</div>
	</form>
</div>

<style lang="postcss" module>
	@reference "tailwindcss";

	.recommendation {
		@apply mx-auto max-w-screen-2xl px-4 py-16 pt-8 lg:px-8 lg:py-32 2xl:px-16;
	}

	.heading {
		@apply mx-auto mt-8 max-w-screen-md text-center text-4xl font-extrabold tracking-tight;
	}

	.desc {
		@apply mx-auto mb-8 mt-4 max-w-screen-md text-center text-base text-gray-300 opacity-90;
	}
</style>
