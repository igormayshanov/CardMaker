import { cardImageType } from "../../types/types"
import { ContentActionType } from "../actionCreators/contentActionCreator";
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
                    selected: action.selected,
                })
        case ImgActionTypes.SET_POSITION_IMG:
            return changePositionById(state, action.id, action.x, action.y);
        case ContentActionType.RESIZE_SELECTED_BLOCK:
            return resizeElementById(state, action.id, action.width, action.height);
        case ContentActionType.SET_SELECTED_BLOCK:
            return setSelectedBlockById(state, action.id, action.selected)
        default:
            return state;
    }
}

const changePositionById = (contentList: cardImageType[], id: string, x: number, y: number): cardImageType[] => {
    const newContent: cardImageType[] = contentList;
    return newContent.map((item, index) => {
        if (item.id === id) {
            return {
                ...item,
                x,
                y,
            }
        }
        return item
    })
}

const resizeElementById = (contentList: cardImageType[], id: string, width: number, height: number): cardImageType[] => {
    const newContent: cardImageType[] = contentList;
    return newContent.map((item, index) => {
        if (item.id === id) {
            return {
                ...item,
                width,
                height,
            }
        }
        return item
    })
}

const setSelectedBlockById = (contentList: cardImageType[], id: string, selected: boolean): cardImageType[] => {
    const newContent: cardImageType[] = contentList;
    return newContent.map((item, index) => {
        if (item.id === id) {
            return {
                ...item,
                selected
            }
        }
        return item
    })
}
