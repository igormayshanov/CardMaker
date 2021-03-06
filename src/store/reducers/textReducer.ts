import { cardTextType, kindType } from "../../types/types";
import { ContentActionType } from "../actionCreators/contentActionCreator";
import { TextAction } from "../actionCreators/textActionCreator";
import { TextActionTypes } from "../actionCreators/TextActionTypes";
import { defaultEditor } from "../initState";

type InsertTextType = {
    TextArray: Array<cardTextType>,
    fontColor: string,
    fontSize: string,
    fontFamily: string,
    fontWeight: string,
    x: number,
    y: number,
}

const defaultState: InsertTextType = {
    TextArray: defaultEditor.canvas.TextContent,
    x: 50,
    y: 50,
    fontWeight: '500',
    fontColor: '#000000',
    fontFamily: 'Arial',
    fontSize: '24'
}

const changeTextValueById = (contentList: cardTextType[], id: string, value: string): cardTextType[] => {
    const newContent: cardTextType[] = contentList;
    return newContent.map((item, index) => {
        if (item.id === id) {
            return {
                ...item,
                value,
            }
        }
        return item
    })
}

const changePositionById = (contentList: cardTextType[], id: string, x: number, y: number): cardTextType[] => {
    const newContent: cardTextType[] = contentList;
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


export const TextContentReducer = (state: InsertTextType = defaultState, action: TextAction): InsertTextType => {
    switch (action.type) {
        case TextActionTypes.INSERT_TEXT:
            return {
                ...state,
                TextArray: state.TextArray.concat
                    ({
                        kind: kindType.text,
                        value: 'Text...',
                        x: state.x,
                        y: state.y,
                        fontWeight: state.fontWeight,
                        fontColor: state.fontColor,
                        fontFamily: state.fontFamily,
                        fontSize: state.fontSize,
                        id: action.id,
                    }),
            };
        case TextActionTypes.CHANGE_TEXT:
            return {
                ...state,
                TextArray: changeTextValueById(state.TextArray, action.id, action.value)
            }
        case TextActionTypes.NEW_CARD_TEXT:
            return {
                ...state,
                TextArray: []
            };
        case TextActionTypes.SET_FONT_COLOR:
            return {
                ...state,
                fontColor: action.color,
            };
        case TextActionTypes.SET_FONT_FAMILY:
            return {
                ...state,
                fontFamily: action.fontFamily,
            };
        case TextActionTypes.SET_FONT_SIZE:
            return {
                ...state,
                fontSize: action.fontSize,
            };
        case TextActionTypes.SET_FONT_WEIGHT:
            return {
                ...state,
                fontWeight: action.fontWeight,
            };
        case ContentActionType.SET_POSITION_BLOCK:
            return {
                ...state,
                TextArray: changePositionById(state.TextArray, action.id, action.x, action.y)
    }
        default:
return state;
    }
}