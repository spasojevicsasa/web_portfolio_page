function slideBar(argument) {
	var x = document.getElementById('myTopnav');

	if (x.className === 'topnav') {
		x.className += ' responsive';
	} else {
		x.className = 'topnav';
	}
}

function myFunction(x) {
	x.classList.toggle('change');
}