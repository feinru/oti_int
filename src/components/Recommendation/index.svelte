<script lang="ts">
	import toast, { Toaster } from 'svelte-french-toast';
	let firstName = $state(''),
		lastName = $state(''),
		email = $state(''),
		problem = $state(''),
		loading = $state(false);

	const postData = async (e: Event) => {
		e.preventDefault();
		loading = true;
		toast
			.promise(
				fetch('https://feedbacks-production.up.railway.app/feedback', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						name: firstName + ' ' + lastName,
						email,
						problem
					})
				}).then(async (res) => {
					if (!res.ok) throw new Error('Failed to post data');
					return await res.json();
				}),
				{
					loading: 'Mengirim...',
					success: 'Terkirim!',
					error: 'Terjadi kesalahan saat mengirim'
				},
				{
					style: 'background: #333; color: #fff;'
				}
			)
			.finally(() => {
				loading = false;
			});
	};
</script>

<div class="recommendation">
	<h3 class="heading">Masih bingung memilih yang tepat?</h3>
	<p class="desc">
		Temukan solusi terbaik untuk permasalahanmu bersama para ahli berpengalaman dari OmahTI yang
		siap membantumu kapan saja.
	</p>
	<form onsubmit={postData} class="form">
		<div class="cont">
			<div>
				<label for="first-name" class="label">Nama depan</label>
				<div class="mt-2.5">
					<input
						type="text"
						name="first-name"
						id="first-name"
						autocomplete="given-name"
						placeholder="Ellen"
						oninput={(e) => (firstName = e.currentTarget.value)}
						class="input"
						required
					/>
				</div>
			</div>
			<div>
				<label for="last-name" class="label">Nama belakang</label>
				<div class="mt-2.5">
					<input
						type="text"
						name="last-name"
						id="last-name"
						autocomplete="family-name"
						placeholder="Joe"
						oninput={(e) => (lastName = e.currentTarget.value)}
						class="input"
						required
					/>
				</div>
			</div>
			<div class="sm:col-span-2">
				<label for="email" class="label">Email</label>
				<div class="mt-2.5">
					<input
						type="email"
						name="email"
						id="email"
						autocomplete="email"
						placeholder="you@example.com"
						oninput={(e) => (email = e.currentTarget.value)}
						class="input"
						required
					/>
				</div>
			</div>
			<div class="sm:col-span-2">
				<label for="message" class="label">Masalah</label>
				<div class="mt-2.5">
					<textarea
						name="message"
						id="message"
						rows="4"
						placeholder="Masalah yang kamu miliki"
						oninput={(e) => (problem = e.currentTarget.value)}
						class="input"
						required
					></textarea>
				</div>
			</div>
		</div>
		<div class="mt-10">
			<button type="submit" disabled={loading} class="btn"> Submit </button>
		</div>
	</form>
	<Toaster />
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

	.form {
		@apply mx-auto mt-20 max-w-3xl;
	}

	.cont {
		@apply grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2;
	}

	.label {
		@apply block text-sm font-semibold;
	}

	.input {
		@apply block w-full rounded-md border border-white/10 bg-white/10 px-3.5 py-2 text-base backdrop-blur-md placeholder:text-gray-400 focus:outline-none;
	}

	.btn {
		@apply relative block h-12 w-full items-center rounded bg-[#f0861a] px-6 font-medium transition hover:opacity-80;
	}
</style>
