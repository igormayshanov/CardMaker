import { canvasType, editorType } from "../../types/types";
import { ImgAction } from "../actionCreators/imgActionCreator";
import { defaultEditor } from "../initState";
import bgColorReducer from "./bgColorReducer";
import { heightReducer, widthReducer } from "./canvasSizeReduser";
import { ImgContentReducer } from "./imgReducer";
import { CanvasAction, CanvasActionType } from "../actionCreators/editorActionCreator";

export type EditorAction = CanvasAction | ImgAction;

export const canvasReducer = (canvas: canvasType, action: EditorAction): canvasType => {
    return {
        width: widthReducer(canvas.width, action as CanvasAction),
        height: heightReducer(canvas.height, action as CanvasAction),
        maxHeight: defaultEditor.canvas.maxHeight,
        minHeight: defaultEditor.canvas.minHeight,
        maxWidth: defaultEditor.canvas.maxWidth,
        minWidth: defaultEditor.canvas.minWidth,
        ImgContent: ImgContentReducer(canvas.ImgContent, action as ImgAction),
        ArtObjContent: defaultEditor.canvas.ArtObjContent,
        TextContent: defaultEditor.canvas.TextContent,
        backgroundColor: bgColorReducer(canvas.backgroundColor, action as CanvasAction)
    };
}

export const editorReducer = (editor: editorType = {} as editorType, action: EditorAction): editorType => {
    return {
        canvas: canvasReducer(editor.canvas, action)
    };
}

