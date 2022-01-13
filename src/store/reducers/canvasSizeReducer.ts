import { CanvasAction, CanvasActionType } from "../actionCreators/editorActionCreator";
import { defaultEditor } from "../initState";

const defaultState = defaultEditor.canvas;

export const widthReducer = (width: number = defaultEditor.canvas.width, action: CanvasAction): number => {
    switch (action.type) {
        case CanvasActionType.NEW_CARD:
            return 800;
        case CanvasActionType.SET_CANVAS_WIDTH:
            return action.width;
        default:
            return width;
    }
}

export const heightReducer = (height: number = defaultEditor.canvas.height, action: CanvasAction): number => {
    switch (action.type) {
        case CanvasActionType.NEW_CARD:
            return 600;
        case CanvasActionType.SET_CANVAS_HEIGHT:
            return action.height;
        default:
            return height;
    }
}