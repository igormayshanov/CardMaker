import { generateID } from "../function";
import { store } from "../store"
import { TextActionTypes } from "./TextActionTypes";

interface newCardTextAction {
  type: TextActionTypes.NEW_CARD_TEXT
}

interface InsertTextAction {
  type: TextActionTypes.INSERT_TEXT,
  id: string,
  // x: number,
  // y: number,
}

interface SetFontFamilyAction {
  type: TextActionTypes.SET_FONT_FAMILY,
  fontFamily: string,
}

interface SetFontSizeAction {
  type: TextActionTypes.SET_FONT_SIZE,
  fontSize: string,
}

interface SetFontColorAction {
  type: TextActionTypes.SET_FONT_COLOR,
  color: string,
}

interface SetFontWeightAction {
  type: TextActionTypes.SET_FONT_WEIGHT,
  fontWeight: string,
}

export type TextAction = InsertTextAction | SetFontFamilyAction | SetFontSizeAction | SetFontColorAction | SetFontWeightAction | newCardTextAction;

export function insertText(): InsertTextAction {
  console.log('insert text');
  return {
    type: TextActionTypes.INSERT_TEXT,
    id: generateID(),
  }
}

export function clearText(): newCardTextAction {
  return {
      type: TextActionTypes.NEW_CARD_TEXT,
  }
}

export function setFontFamily(fontFamily: string): SetFontFamilyAction {
  return {
    type: TextActionTypes.SET_FONT_FAMILY,
    fontFamily: fontFamily,
  }
}

export function setFontSize(fontSize: string): SetFontSizeAction {
  return {
    type: TextActionTypes.SET_FONT_SIZE,
    fontSize: fontSize,
  }
}

export function setColorText(color: string): SetFontColorAction {
  return {
    type: TextActionTypes.SET_FONT_COLOR,
    color: color,
  }
}

export function setFontWeight(fontWeight: string): SetFontWeightAction {
  return {
    type: TextActionTypes.SET_FONT_WEIGHT,
    fontWeight: fontWeight,
  }
}

// export function setFontBold(isBold: boolean) {
//   return {
//     type: 'SET_BOLD_TEXT',
//     isBold: isBold,
//   }
// }

// export function setFontItalic(isItalic: boolean) {
//   return {
//     type: 'SET_ITALIC_TEXT',
//     isItalic: isItalic,
//   }
// }

// export function setFontUnderline(isUnderline: boolean) {
//   return {
//     type: 'SET_UNDERLINE_TEXT',

//     isUnderline: isUnderline,
//   }
// }


