window.addEventListener('keypress', function (e) {
	if (e.keyCode === 13 || e.which === 13) {
		e.preventDefault();
		return false;
	}
});

var winners = {//note all values in this dictionary match ids in the html
    "row1": ['a1','b1','c1','d1','e1'],
    "row2": ['a2','b2','c2','d2','e2'],
    "row3": ['a3','b3','c3','d3','e3'],
    "row4": ['a4','b4','c4','d4','e4'],
    "row5": ['a5','b5','c5','d5','e5'],
    "column1": ['a1','a2','a3','a4','a5'],
    "column2": ['b1','b2','b3','b4','b5'],
    "column3": ['c1','c2','c3','c4','c5'],
    "column4": ['d1','d2','d3','d4','d5'],
    "column5": ['e1','e2','e3','e4','e5'],
    "topLeftBottomRight": ['a1','b2','c3','d4','e5'],
    "topRightBottomLeft": ['a5','b4','c3','d2','e1']
}
var selected = [];//list of ids for all clicked cells
function display(object){
	object.style.display = 'block';
}
function hide(object){
	object.style.display = '';
}
function toggleDisplay(object){
	if(object.style.display === '')
	{
		display(object);
		return true;
	}else{
		hide(object);
		return false;
	}
}
function toggle(id) {
	var marker = document.getElementById(id);
	var displayed = toggleDisplay(marker);
	if(displayed){
		selected.push(id);
	}else{
		var index = selected.findIndex(v => v === id);
		selected.splice(index,1);
	}
	bingoCount()
}
function bingoCount() {
	var bingos = 0;
	for(let key in winners)
	{
		var marker = document.getElementById(key);
		var contains = winners[key].every(element => {
			return selected.indexOf(element) !== -1;
		});
		if(contains){
			bingos=bingos+1;
			display(marker);
		}else{
			hide(marker);
		}
	}
	var bingoTotal = document.getElementById("bingos");
	bingoTotal.innerHTML = bingos;
}

window.onload = function load() {
	var goals = document.getElementsByClassName("goal");
	for(goal in goals){
		goals[goal].src ="assets/"+goal+".png"
	}
	var markers = document.getElementsByClassName("marker");
	for(marker in markers){
		markers[marker].src = "assets/marked.png";
	}
	var columns = document.getElementsByClassName("column");
	for(column in columns){
		columns[column].src = "assets/column.png";
	}
	var rows = document.getElementsByClassName("row");
	for(row in rows){
		rows[row].src = "assets/row.png";
	}
	var topLeftBottomRight = document.getElementById("topLeftBottomRight");
	topLeftBottomRight.src ="assets/topLeftBottomRight.png";
	var topRightBottomLeft = document.getElementById("topRightBottomLeft");
	topRightBottomLeft.src ="assets/topRightBottomLeft.png";
}
function darkModeToggle() {
	//if already in dark mode set variable to false indicating now in light mode else set variable to true indicating now in dark mode
	//this variable is used to keep dark mode state between all pages on site as well as to keep between page reloads
	if(window.localStorage.getItem("darkModeEnabled")=="true"){
		window.localStorage.setItem("darkModeEnabled","false");
	}else{
		window.localStorage.setItem("darkModeEnabled","true");
	}
	//after changing the variable toggle the dark mode state of current page
	document.body.classList.toggle("dark-mode");
	document.getElementById("table").classList.toggle("dark-mode");

}