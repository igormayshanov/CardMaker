import { positionType } from "../../types/types";
import { generateID } from "../function";
import { store } from "../store";

export enum ImgActionTypes {
    INSERT_IMG = 'INSERT_IMG',
    SET_POSITION_IMG = "SET_POSITION_IMG",
}

interface InsertImgAction {
    type: ImgActionTypes.INSERT_IMG,
    src: string,
    width: number,
    height: number,
    x: number,
    y: number,
    id: string,
}

interface SetPositionImg {
    type: ImgActionTypes.SET_POSITION_IMG,
    id: number,
    x: number,
    y: number,
}

export type ImgAction = InsertImgAction | SetPositionImg;


export function InsertImg(src: string): InsertImgAction {
    return {
        type: ImgActionTypes.INSERT_IMG,
        id: generateID(),
        src: src,
        // x: 300,
        // y: 300,
        width: 100,
        height: 100,
        x: 100,
        y: 100,
    }
}

export function SetPositionImg(position: positionType, id: number): SetPositionImg {
    return {
        type: ImgActionTypes.SET_POSITION_IMG,
        id: id,
        x: position.x,
        y: position.y,
    }
}




