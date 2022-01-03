import { artObjType, canvasType, cardImageType, cardTextType, circleType, editorType, layoutsType, layoutType, rectangleType, triangleType } from "../types/types";

const rectangle: rectangleType = {
	figure: 'rect',
	position: {
		x: 100,
		y: 300,
	},
	width: 180,
	height: 70,
	borderColor: '#ffA0Cf',
	fillColor: '#3AA0Cf',
	selected: false,
};

const triangle: triangleType = {
	figure: 'polygon',
	points: {
		point1: {
			x: 50,
			y: 200,
		},
		point2: {
			x: 280,
			y: 190,
		},
		point3: {
			x: 160,
			y: 200,
		}
	},
	borderColor: '#ffA0Cf',
	fillColor: '#3AA0Cf',
};


const circle: circleType = {
	figure: 'circle',
	position: {
		x: 100,
		y: 100,
	},
	radius: 40,
	borderColor: '#ffA0Cf',
	fillColor: '#3AA0Cf',
	selected: true,
}

const cardImage: cardImageType = {
	src: '../../public/logo192.png',
	positionX: 30,
	positionY: 30,
	width: 200,
	height: 300,
	selected: true,
}

const cardText: cardTextType = {
	value: "hello world",
	font: "Arial",
	fontSize: 14,
	fontColor: "black",
	left: 0,
	top: 0,
	width: 200,
	height: 100,
	selected: true,
}

const artObj: artObjType = {
	figure: circle,
	selected: false,
}

const layout1: layoutType = {
	layout: artObj,
	selected: true,
}

const layout2: layoutType = {
	layout: cardText,
	selected: true,
}

const layout3: layoutType = {
	layout: cardImage,
	selected: true,
}

const layouts: layoutsType = [
	{
		layout: cardImage,
		selected: true,
	},
	{
		layout: artObj,
		selected: true,
	},
	{
		layout: cardText,
		selected: true,
	},
]

// const areaOfCanvas = [{
// 	layout,
// }]

const canvas: canvasType = {
	layouts,
	backgroundColor: '#ff000f',
	canvasSize: {
		height: 600,
		width: 800,
		minHeight: 100,
		maxHeight: 1080,
		minWidth: 100,
		maxWidth: 1980,
	},
}

// const template = {
// 	layouts,
// }

export const defaultEditor: editorType = {
	//template,
	canvas,
}