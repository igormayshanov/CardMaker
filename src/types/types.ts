
export type positionType = {
    x: number;
    y: number;
}

export type sizeType = {
    width: number;
    height: number
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
    // selected: boolean;
} & genericBlockFieldsType & sizeType

// export enum figure { circle, rect, polygon };

export type cardImageType = {
    // kind: kindType.img;
    src: string;
    // selected: boolean;
} & genericBlockFieldsType & sizeType

export type cardTextType = {
    kind: kindType.text;
    value: string;
    fontFamily: string;
    fontSize: string;
    fontColor: string;
    fontWeight: string;
    // selected: boolean;
} & genericBlockFieldsType

export type genericBlockFieldsType = {
    id: string;
} & positionType

export enum kindType { img, text, artObj }

export type contentType = cardImageType | cardTextType | artObjType;

// export type layoutsType = Array<cardImageType>;

export type canvasSize = {
    minHeight: number;
    maxHeight: number;
    minWidth: number;
    maxWidth: number;
} & sizeType
// export type ArtObjContentType = {
//     id: string;
//     position: positionType;
//     size: sizeType;
//     content: artObjType;
// }

// export type ImgContentType = {
//     id: string;
//     position: positionType;
//     size: sizeType;
//     content: cardImageType;
// }

// export type TextContentType = {
//     id: string;
//     position: positionType;
//     size: sizeType;
//     content: cardTextType;
// }

export type canvasType = {
    TextContent: Array<cardTextType>;
    ImgContent: Array<cardImageType>;
    ArtObjContent: Array<artObjType>;
    //areaOfCanvas: Array<layoutType>;
    backgroundColor: string;
} & canvasSize

export interface editorType {
    canvas: canvasType;
    selectedId: string | null;
}