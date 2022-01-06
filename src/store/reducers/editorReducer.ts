import { isTemplateSpan } from "typescript";
import { editorType } from "../../types/types";
import { EditorAction, EditorActionTypes } from "../actionCreators/actionCreators";
import { defaultEditor } from "../initState";

export const editorReducer = (editor: editorType = defaultEditor, action: EditorAction): editorType => {
    switch (action.type) {
        // case EditorActionTypes.SET_POSITION_BLOCK:
        //     return {
        //         ...editor,
        //         canvas: {
        //             ...editor.canvas,
        //             layouts: editor.canvas.layouts.concat({positionX: action.x, positionY: action.y})
        //         }
        //     }
        case EditorActionTypes.INSERT_IMG:
            return {
                ...editor,
                canvas: {
                    ...editor.canvas,
                    layouts: editor.canvas.layouts.concat({src: action.src , width: 100, height: 100, positionX: 0, positionY:0})
                }
            }
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