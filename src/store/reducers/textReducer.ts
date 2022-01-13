import { act } from "react-dom/test-utils";
import { cardTextType, kindType } from "../../types/types";
import { TextAction, TextActionTypes } from "../actionCreators/textActionCreator";
import { defaultEditor } from "../initState";

type InsertTextType = {
    TextArray: Array<cardTextType>,
    fontColor: string,
    fontSize: string,
    fontFamily: string,
    fontWeight: string,
    x: string,
    y: string,
}

const defaultTextArray = defaultEditor.canvas.TextContent;

const defaultState: InsertTextType = {
    TextArray: defaultTextArray,
    x: '250px',
    y: '400px',
    fontWeight: '500',
    fontColor: '#000000',
    fontFamily: 'Arial',
    fontSize: '24'
}

export const TextContentReducer = (state: InsertTextType = defaultState, action: TextAction): InsertTextType => {
    switch (action.type) {
        case TextActionTypes.INSERT_TEXT:
            return {
                ...state,
                TextArray: state.TextArray.concat({
                    id: action.id,
                    kind: kindType.text,
                    value: 'Text...',
                    x: action.x,
                    y: action.y,
                    fontWeight: state.fontWeight,
                    fontColor: state.fontColor,
                    fontFamily: state.fontFamily,
                    fontSize: state.fontSize,
                })
            };
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