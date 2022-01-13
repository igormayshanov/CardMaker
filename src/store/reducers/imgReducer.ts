import { canvasType, cardImageType, kindType } from "../../types/types"
import { ImgAction, ImgActionTypes } from "../actionCreators/imgActionCreator"
import { defaultEditor } from "../initState"

const defaultSate = defaultEditor.canvas.ImgContent;

export const ImgContentReducer = (state: cardImageType[] = defaultSate, action: ImgAction): cardImageType[] => {
    switch (action.type) {
        case ImgActionTypes.INSERT_IMG:
            return state.concat
                ({
                    src: action.src,
                    id: action.id,
                    x: 100,
                    y: 100,
                    width: 100,
                    height: 100,
                })
        default:
            return state
    }
}

