
var hello = 'здравствуй дорогой: '

var name = prompt('введите имя');
var helloName = hello+name;

var hello_name = document.getElementById('span_one');
hello_name.textContent = helloName;

var bukva = 10 + '$';
var bukva_otwo = document.getElementById('span_two');
span_two.textContent = bukva;


var how = name.length + ' букв(а/ы)';
var three = document.getElementById('span_three');
three.textContent = how;

var summ = name.length * 10 + '$';
var four = document.getElementById('span_four');
four.textContent = summ;

function get(wid, he){
	var one = wid * he;
	var two = wid + he;
	var three = [one, two]
	return three;
}
var One =  get(10, 1)[0];
var Two = get(33, 4)[1];
console.log( get(10, 1))