import { store } from "../store";

export enum ContentActionType {
  SET_POSITION_BLOCK = "SET_POSITION_BLOCK",
  SET_SELECTED_BLOCK = 'SET_SELECTED_BLOCK',
  RESET_SELECTED_BLOCK = 'RESET_SELECTED_BLOCK',
}

interface SetPositionBlock {
  type: ContentActionType.SET_POSITION_BLOCK,
  id: string,
  x: number,
  y: number,
}

interface SetSelectedBlock {
  type: ContentActionType.SET_SELECTED_BLOCK,
  id: string,
}

interface ResetSelectedBlock {
  type: ContentActionType.RESET_SELECTED_BLOCK,
}

export type ContentActions = SetPositionBlock | SetSelectedBlock | ResetSelectedBlock;

export function SetSelectedBlock(id: string) {
  return {
    type: 'SET_SELECTED_BLOCK',
    id: id,
  }
}

export function ResetSelectedBlock() {
  return {
    type: 'RESET_SELECTED_BLOCK',
  }
}

export function SetPositionBlock(x: number, y: number) {
  return {
    type: 'SET_POSITION_BLOCK',
    id: store.getState().selectedId,
    x: x,
    y: y,
  }
}