window.onload = function load() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const page = urlParams.get('page');
	window.location.assign(`https://micahlaster.github.io/${page}/index.html`);
}