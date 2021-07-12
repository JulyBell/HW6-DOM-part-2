console.log('------------- # 3');


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
		figureArea.className = 'rectangular';
		break;

		case 'Square':
		figureArea.className = 'square';
		break;

		case 'Circle':
		figureArea.className = 'circle';
		break;

		default:
		break;
			
		}
}







