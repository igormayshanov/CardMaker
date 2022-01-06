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
	selected: false,
}

const cardImage: cardImageType = {
	src: "https://images.pexels.com/photos/3337209/pexels-photo-3337209.jpeg?cs=srgb&dl=pexels-mo-3337209.jpg&fm=jpg",
	positionX: 30,
	positionY: 30,
	width: 200,
	height: 300,
	//selected: false,
}

const cardImage1: cardImageType = {
	src: "blob:http://localhost:3000/4fba31e2-f214-4ee0-a4ca-b7bba9cd0029",
	positionX: 30,
	positionY: 30,
	width: 200,
	height: 300,
	//selected: false,
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
	selected: false,
}

const artObj: artObjType = {
	figure: circle,
	selected: false,
}

// const artObjTest: layoutType = {
// 	layout: artObj,
// 	selected: true,
// }

// const textTest: layoutType = {
// 	layout: cardText,
// 	selected: true,
// }

// const imageTest: layoutType = {
// 	layout: cardImage,
// 	selected: true,
// }

// const layouts: layoutsType = [
// 	{
// 		layout: cardImage,
// 		selected: true,
// 	},
// 	{
// 		layout: artObj,
// 		selected: true,
// 	},
// 	{
// 		layout: cardText,
// 		selected: true,
// 	},
// ]

// const areaOfCanvas = [{
// 	layout,
// }]
const layouts: layoutsType = [cardImage];

const canvas: canvasType = {
	layouts: [cardImage, cardImage1],
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