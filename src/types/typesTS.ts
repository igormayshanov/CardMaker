export type artObjType = {
	x: number;
	y: number;
	width: number;
	height: number;
	selected: boolean;
}

export enum figure {circle, rect, polygon};

export type cardImageType = {
	positionX: number;
	positionY: number;
	width: number;
	height: number;
	selected: boolean;
}

export type cardTextType = {
	value: string;
	font: string;
	fontSize: number;
	fontColor: colorType;
	positionX: number;
	positionY: number;
	width: number;
	height: number;
	selected: boolean;
}

export type layoutType = {
	layout: cardTextType | cardImageType | artObjType;
	selected: boolean;
}

export type layoutsType = Array<layoutType>;

export type colorType = {
	color: string;
} 

export type canvasSize = {
	height: number;
	width: number;
	minHeight: number;
	maxHeight: number;
	minWidth: number;
	maxWidth: number;
}

export type canvasType = {
	layouts: layoutsType;
	areaOfCanvas: Array<layoutType>;
	color: colorType;
	canvasSize: canvasSize;
}

export type templateType = {
	layouts: layoutsType;
}

export type editorType = {
	template: templateType;
	canvas: canvasType;
}

