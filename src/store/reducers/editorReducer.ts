import { editorType } from "../../types/types";
import { EditorAction, EditorActionTypes } from "../actionCreators/actionCreators";
import { defaultEditor } from "../initState";

export const editorReducer = (editor: editorType = defaultEditor, action: EditorAction): editorType => {
    switch (action.type) {
        case EditorActionTypes.SET_CANVAS_WIDTH:
            return {
                ...editor,
                canvas: {
                    ...editor.canvas,
                    canvasSize: {
                        ...editor.canvas.canvasSize,
                        width: action.width,
                    }
                }
            }
            case EditorActionTypes.SET_CANVAS_HEIGHT:
            return {
                ...editor,
                canvas: {
                    ...editor.canvas,
                    canvasSize: {
                        ...editor.canvas.canvasSize,
                        height: action.height,
                    }
                }
            }
        case EditorActionTypes.SET_BACKGROUND_COLOR:
            return {
                ...editor,
                canvas: {
                    ...editor.canvas,
                    backgroundColor: action.color
                }
            }
        default:
            return editor
    }
}