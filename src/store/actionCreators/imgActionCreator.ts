import { setID } from "../function";
import { store } from "../store";

export enum ImgActionTypes {
    INSERT_IMG = 'INSERT_IMG',
}

interface InsertImgAction {
    type: ImgActionTypes.INSERT_IMG,
    src: string,
    // width: number,
    // height: number,
    // x: number,
    // y: number,
    id: string,
}

export type ImgAction = InsertImgAction;

export function InsertImg(src: string): InsertImgAction {
    return {
        type: ImgActionTypes.INSERT_IMG,
        id: setID(),
        src: src,
        // x: 100,
        // y: 100,
        // width: width,
        // height: height,
        // x: (store.getState().canvas.canvasSize.size.width / 2) - (width / 2),
        // y: (store.getState().canvas.canvasSize.size.height / 2) - (height / 2),
    }
}

