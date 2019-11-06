
let num = document.querySelector('#user-num');
document.querySelector('#horoscope').onclick = checkNum;

function checkNum() {
	let userNum = num.value;
	let result = userNum % 12;
	
	if (result == 4) {
		document.write('Вы родились в год крысы!');
		
		document.write(image);		
	}
	else if (result == 5) {
		document.write('Вы родились в год быка!');
	}
	else if (result == 6) {
		document.write('Вы родились в год тигра!');
	}	
	else if (result == 7) {
		document.write('Вы родились в год кролика!');
	}
	else if (result == 8) {
		document.write('Вы родились в год дракона!');
	}
	else if (result == 9) {
		document.write('Вы родились в год змеи!');
	}
	else if (result == 10) {
		document.write('Вы родились в год лошади!');
	}
	else if (result == 11) {
		document.write('Вы родились в год козы!');
	}
	else if (result == 0) {
		document.write('Вы родились в год обезьяны!');
	}
	else if (result == 1) {
		document.write('Вы родились в год петуха!');
	}
	else if (result == 2) {
		document.write('Вы родились в год собаки!');
	}
	else if (result == 3) {
		document.write('Вы родились в год свиньи!');
	}
	else {
		alert('Введите ваш год рождения!');
	}
}


