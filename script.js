window.onload = function load() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const page = urlParams.get('page');
	console.log(`https://micahlaster.github.io/?page=${page}`);
	window.location.assign(`https://micahlaster.github.io/?page=${page}`);
}