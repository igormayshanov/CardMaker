import { positionType } from "../../types/types";
import { generateID } from "../function";
import { ResizeBlock, SetSelectedBlock } from "./contentActionCreator";

export enum ImgActionTypes {
    INSERT_IMG = 'INSERT_IMG',
    SET_POSITION_IMG = "SET_POSITION_IMG",
    DELETE_IMG = "DELETE_IMG",
}

interface InsertImgAction {
    type: ImgActionTypes.INSERT_IMG,
    src: string,
    width: number,
    height: number,
    x: number,
    y: number,
    id: string,
    selected: boolean,
}

interface SetPositionImg {
    type: ImgActionTypes.SET_POSITION_IMG,
    id: string,
    x: number,
    y: number,
}

interface DeleteImg {
    type: ImgActionTypes.DELETE_IMG,
    id: string,
}

export type ImgAction = InsertImgAction | SetPositionImg | ResizeBlock | SetSelectedBlock | DeleteImg;


export function InsertImg(src: string, width: number, height: number): InsertImgAction {
    return {
        type: ImgActionTypes.INSERT_IMG,
        id: generateID(),
        src,
        width,
        height,
        x: 100,
        y: 100,
        selected: false,
    }
}

export function SetPositionImg(position: positionType, id: string): SetPositionImg {
    return {
        type: ImgActionTypes.SET_POSITION_IMG,
        id: id,
        x: position.x,
        y: position.y,
    }
}

export function DeleteImg (id: string): DeleteImg {
    return {
        type: ImgActionTypes.DELETE_IMG,
        id: id,
    }
}