import { canvasType } from "../../types/types";
import { CanvasAction, CanvasActionType } from "../actionCreators/editorActionCreator";
import { defaultEditor } from "../initState";

const defaultState = defaultEditor.canvas;

export const canvasReducer = (state: canvasType = defaultState, action: CanvasAction): canvasType => {
    switch (action.type) {
        case CanvasActionType.NEW_CARD:
            return {
                ...state,
                backgroundColor: '#ffffff',
                width: 800,
                height: 600,
            }
        case CanvasActionType.SET_BACKGROUND_COLOR:
            return {
                ...state,
                backgroundColor: action.color,
            }
        case CanvasActionType.SET_BACKGROUND_IMG:
            return {
                ...state,
                backgroundImg: action.src,
            }
        case CanvasActionType.SET_CANVAS_WIDTH:
            return {
                ...state,
                width: action.width,
            }
        case CanvasActionType.SET_CANVAS_HEIGHT:
            return {
                ...state,
                height: action.height,
            }
        default:
            return state;
    }
}

export default canvasReducer;