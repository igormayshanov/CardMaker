import { canvasSize } from "../types/types";

export const font = [
    { id: '1', value: 'Arial' },
    { id: '2', value: 'Calibri' },
    { id: '3', value: 'Verdana' },
]
export const fontSize = [
    { id: '1', value: '10' },
    { id: '2', value: '12' },
    { id: '3', value: '14' },
    { id: '4', value: '16' },
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

export const icons = [
    { id: '1', value: 'InsertImageIcon', onClick: () => { }},
    { id: '2', value: 'CircleIcon', onClick: clickHandler},
    { id: '3', value: 'RectangleIcon', onClick: () => { }},
    { id: '4', value: 'TriangleIcon', onClick: () => { }},
    { id: '5', value: 'TextIcon', onClick: () => { }}]


    

    