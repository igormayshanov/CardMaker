import { canvasType, cardImageType, kindType } from "../../types/types"
import { ContentActions, ContentActionType } from "../actionCreators/contentActionCreator";
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
                    x: action.x,
                    y: action.y,
                    width: action.width,
                    height: action.height,
                })
        case ImgActionTypes.SET_POSITION_IMG:
            return changePositionById(state, action.id, action.x, action.y);
        default:
            return state;
    }
}

const changePositionById = (contentList: cardImageType[], id: number, x: number, y: number): cardImageType[] => {
    const newContent: cardImageType[] = contentList;
    return newContent.map((item, index) => {
        if (index == id) {
            return {
                ...item,
                x,
                y,
            }
        }
        return item
    })
}

