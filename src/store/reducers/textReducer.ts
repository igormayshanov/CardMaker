import { act } from "react-dom/test-utils";
import { cardTextType, kindType } from "../../types/types";
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
    x: 250,
    y: 400,
    fontWeight: '500',
    fontColor: '#000000',
    fontFamily: 'Arial',
    fontSize: '24'
}

const changeTextValueById = (contentList: cardTextType[], id: number, str: string): cardTextType[] => {
    const newContent: cardTextType[] = contentList;
    newContent.forEach((item: cardTextType, index: number) => {
        if (index === id) {
            newContent[index].value = str;
        }
    })
    return newContent;
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
                TextArray: changeTextValueById(state.TextArray, action.index, action.value)
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
        default:
            return state;
    }
}