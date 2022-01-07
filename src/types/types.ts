
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
    // selected: boolean;
}

export type rectangleType = {
    figure: 'rect';
    position: positionType;
    width: number;
    height: number;
    borderColor: string;
    fillColor: string;
    // selected: boolean;
}
export type figureType = circleType | rectangleType | triangleType;

export type artObjType = {
    kind: kindType.artObj;
    figure: figureType;
    // x: number;
    // y: number;
    // width: number;
    // height: number;
    // selected: boolean;
}

// export enum figure { circle, rect, polygon };

export type cardImageType = {
    kind: kindType.img;
    src: string;
    // positionX: number;
    // positionY: number;
    // width: number;
    // height: number;
    // selected: boolean;
}

export type cardTextType = {
    kind: kindType.text;
    value: string;
    font: string;
    fontSize: number;
    fontColor: string;
    // left: number;
    // top: number;
    // width: number;
    // height: number;
    // selected: boolean;
}

export enum kindType {img, text, artObj}

export type contentType = cardImageType | cardTextType | artObjType;

// export type layoutsType = Array<cardImageType>;

export type canvasSize = {
    height: number;
    width: number;
    minHeight: number;
    maxHeight: number;
    minWidth: number;
    maxWidth: number;
}
export type layoutType = {
    id: string;
    position: positionType;
    width: number;
    height: number;
    content: contentType;
}

export type canvasType = {
    layouts: Array<layoutType>;
    //areaOfCanvas: Array<layoutType>;
    backgroundColor: string;
    canvasSize: canvasSize;
}

export interface editorType {
    canvas: canvasType;
}

