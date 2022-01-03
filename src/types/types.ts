
export type positionType = {
    x: number;
    y: number;
}

export type triangleType = {
    figure: 'polygon';
    points: {
        point1: positionType;
        point2: positionType;
        point3: positionType;
    }
    borderColor: string;
    fillColor: string;
}

export type circleType = {
    figure: 'circle';
    position: positionType;
    radius: number;
    borderColor: string;
    fillColor: string;
    selected: boolean;
}

export type rectangleType = {
    figure: 'rect';
    position: positionType;
    width: number;
    height: number;
    borderColor: string;
    fillColor: string;
    selected: boolean;
}

export type artObjType = {
    figure: circleType | rectangleType | triangleType;
    // x: number;
    // y: number;
    // width: number;
    // height: number;
    selected: boolean;
}

// export enum figure { circle, rect, polygon };

export type cardImageType = {
    src: string;
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
    fontColor: string;
    left: number;
    top: number;
    width: number;
    height: number;
    selected: boolean;
}

export type layoutType = {
    layout: cardTextType | cardImageType | artObjType;
    selected: boolean;
}

export type layoutsType = Array<layoutType>;

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
    //areaOfCanvas: Array<layoutType>;
    backgroundColor: string;
    canvasSize: canvasSize;
}

export interface editorType {
    canvas: canvasType;
}

