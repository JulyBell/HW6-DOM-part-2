console.log('------------- # 3');

// описываем стили фигур:
let rectangular = 'width: 150px; height: 100px; background-color: black;   -moz-border-radius: 0%; -webkit-border-radius: 0%; border-radius: 0%; margin-top: 10px;';

let square = 'width: 100px; height: 100px; background-color: black;   -moz-border-radius: 0%; -webkit-border-radius: 0%; border-radius: 0%; margin-top: 10px;'

let circle = 'width: 100px; height: 100px; background-color: black; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; margin-top: 10px';


//получаем элементы по id:
let select = document.querySelector('#selectFigure');
let colorInput = document.querySelector('#colorInput');
let colorBtn = document.querySelector('#colBtn');
let figureArea = document.querySelector('#figures');

//глобальная переменная выбора отображаемой фигуры:
let figureToShow;

//обработчики:
select.addEventListener('change', showSelectedFigure);
colorBtn.addEventListener('click', colorProcessing);

//получаем цвет из инпута, меняем стили выбранной фигуры
function colorProcessing(e){
	e.preventDefault();
	let color = colorInput.value;

	
	figureArea.style["background-color"] = color;
	
}

//выбираем фигуру, применяем соответствующие стили:
function showSelectedFigure(){

	let selectedFigure = select.value;
	console.log(selectedFigure);

	figureToShow = selectedFigure;

	console.log('figureToShow', figureToShow);

	switch(figureToShow){
		case 'Rectangle':
		figureArea.style = rectangular;
		break;

		case 'Square':
		figureArea.style = square;
		break;

		case 'Circle':
		figureArea.style = circle;
		break;

		default:
		break;
			
		}
}







