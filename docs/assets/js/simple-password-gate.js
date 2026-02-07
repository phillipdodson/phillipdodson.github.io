/**
 * This is a super-simple password-gating script
 * designed to keep my portfolio barely-private.
 * 
 * GravCMS didn't (at this time) have a basic password-protection
 * plugin that was lightweight enough to do what I needed,
 * so I rolled my own.
 * 
 * This is not sensitive information, so it doesn't bother me 
 * if a dev reverse engineers this. Go nuts and have fun.
 */
(function () {
	const PASSWORD    = 'letmein';
	const STORAGE_KEY = 'siteUnlocked';
	const LOCK_CLASS  = 'simple-password-gate';

	// If already unlocked, reveal content immediately.
	if (sessionStorage.getItem(STORAGE_KEY) === 'true') {
		document.documentElement.classList.remove(LOCK_CLASS);
		return;
	}

	const main               = document.querySelector('main');
	const originalContent    = main.innerHTML;
	const lastFocusedElement = document.activeElement;

	// Replace main content with gate
	main.innerHTML = `
<!--
░██     ░██            ░██ ░██            ░██ 
░██     ░██            ░██ ░██            ░██ 
░██     ░██  ░███████  ░██ ░██  ░███████  ░██ 
░██████████ ░██    ░██ ░██ ░██ ░██    ░██ ░██ 
░██     ░██ ░█████████ ░██ ░██ ░██    ░██ ░██ 
░██     ░██ ░██        ░██ ░██ ░██    ░██     
░██     ░██  ░███████  ░██ ░██  ░███████  ░██ 
-->
	<section aria-labelledby="pw-title" class="simple-password-gate">
		<div class="wrap">
			<h1 id="pw-title" class="display-1">This content is protected.</h1>

			<form id="pw-form" novalidate>
				
				<label for="pw-input">Enter the password to continue.</label>
				<input
					id="pw-input"
					type="password"
					autocomplete="current-password"
					aria-describedby="pw-desc"
					required
				>

				<p
					id="pw-error"
					role="alert"
					aria-live="assertive"
					hidden
				>
					Incorrect password. Please try again.
				</p>

				<button type="submit" class="c-button">Unlock</button>
			</form>
		</div>
	</section>
	`;

	// Reveal gated main content area (only the gate UI)
	document.documentElement.classList.remove(LOCK_CLASS);

	const input = main.querySelector("#pw-input");
	const form  = main.querySelector("#pw-form");
	const error = main.querySelector("#pw-error");

	// Move focus into the gate
	input.focus();

	function unlock() {
		sessionStorage.setItem(STORAGE_KEY, "true");
		main.innerHTML = originalContent;
		document.documentElement.classList.remove(LOCK_CLASS);

		if (lastFocusedElement) {
			lastFocusedElement.focus();
		}
	}

	form.addEventListener("submit", function (e) {
		e.preventDefault();

		if (input.value === PASSWORD) {
			unlock();
		} else {
			error.hidden = false;
			input.value = "";
			input.focus();
		}
	});
})();
