export enum CanvasActionType {
  SET_BACKGROUND_COLOR = "SET_BACKGROUND_COLOR",
  SET_BACKGROUND_IMG = "SET_BACKGROUND_IMG",
  SET_CANVAS_WIDTH = "SET_CANVAS_WIDTH",
  SET_CANVAS_HEIGHT = "SET_CANVAS_HEIGHT",
  NEW_CARD = "NEW_CARD",
}

interface SetBackgroundImgAction {
  type: CanvasActionType.SET_BACKGROUND_IMG,
  src: string,
}

interface SetBackgroundColorAction {
  type: CanvasActionType.SET_BACKGROUND_COLOR,
  color: string,
}

interface SetCanvasWidthAction {
  type: CanvasActionType.SET_CANVAS_WIDTH,
  width: number,
}

interface SetCanvasHeightAction {
  type: CanvasActionType.SET_CANVAS_HEIGHT,
  height: number,
}

interface NewCard {
  type: CanvasActionType.NEW_CARD
}

export type CanvasAction = SetBackgroundColorAction | SetCanvasWidthAction | SetCanvasHeightAction | NewCard | SetBackgroundImgAction;
export function SetBackgroundImg(newSrc: string) {
  return {
    type: CanvasActionType.SET_BACKGROUND_IMG,
    src: newSrc,
  }
}

export function NewCard(): CanvasAction {
  return {
    type: CanvasActionType.NEW_CARD,
  }
}

export function SetCanvasWidthAction(newWidth: number): CanvasAction {
  return {
    type: CanvasActionType.SET_CANVAS_WIDTH,
    width: newWidth,
  }
}

export function SetCanvasHeightAction(newHeight: number): CanvasAction {
  return {
    type: CanvasActionType.SET_CANVAS_HEIGHT,
    height: newHeight,
  }
}

export function setBackgroundColor(newColor: string): CanvasAction {
  return {
    type: CanvasActionType.SET_BACKGROUND_COLOR,
    color: newColor,
  }
}