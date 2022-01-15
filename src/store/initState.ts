import { artObjType, canvasType, cardImageType, cardTextType, circleType, editorType, kindType, rectangleType, triangleType } from "../types/types";

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
	// selected: false,
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
	// selected: false,
}

const cardImage: cardImageType = {
	id: '4',
	// kind: kindType.img,
	src: "https://images.pexels.com/photos/3337209/pexels-photo-3337209.jpeg?cs=srgb&dl=pexels-mo-3337209.jpg&fm=jpg",
	x: 20,
	y: 20,
	width: 100,
	height: 200,
}


const cardText: cardTextType = {
	id: 'x12ertqw',
	kind: kindType.text,
	value: "hello world",
	fontFamily: "Arial",
	fontSize: '20',
	fontColor: "#3AA0Cf",
	fontWeight: '400',
	x: 20,
	y: 30,
	// selected: false,
}

const artObj: artObjType = {
	id: '2',
	kind: kindType.artObj,
	figure: circle,
	x: 20,
	y: 30,
	width: 50,
	height: 30,
	// selected: false,
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
// const layouts: layoutsType = [cardImage];

const canvas: canvasType = {
	ImgContent: [cardImage],
	TextContent: [cardText],
	ArtObjContent: [artObj],
	backgroundColor: '#ff000f',
	height: 600,
	width: 800,
	minHeight: 100,
	maxHeight: 1080,
	minWidth: 100,
	maxWidth: 1980,
}

// const template = {
// 	layouts,
// }

export const defaultEditor: editorType = {
	//template,
	canvas,
	selectedId: null,
}