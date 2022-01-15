import { InsertImg } from "../store/actionCreators/imgActionCreator";
import { insertText } from "../store/actionCreators/textActionCreator";
import { canvasSize } from "../types/types";

export const fontFamily = [
    { id: '1', value: 'Arial' },
    { id: '2', value: 'Calibri' },
    { id: '3', value: 'Times New Roman' },
    { id: '4', value: 'Verdana' },
]

export const fontWeights = [
    { id: '1', value: '100' },
    { id: '2', value: '200' },
    { id: '3', value: '300' },
    { id: '4', value: '400' },
    { id: '5', value: '500' },
    { id: '6', value: '600' },
    { id: '7', value: '700' },
    { id: '8', value: '800' },
]

export const fontSize = [
    { id: '1', value: '10' },
    { id: '2', value: '12' },
    { id: '3', value: '14' },
    { id: '4', value: '16' },
    { id: '5', value: '18' },
    { id: '6', value: '20' },
    { id: '7', value: '22' },
    { id: '8', value: '24' },
]

export const defaultCanvasSize: canvasSize = {
    height: 600,
    width: 800,
    minHeight: 200,
    maxHeight: 768,
    minWidth: 200,
    maxWidth: 1366,
}
export const clickHandler = (e: React.MouseEvent<HTMLOrSVGElement>) => {
    console.log('hello world!!!');
}







