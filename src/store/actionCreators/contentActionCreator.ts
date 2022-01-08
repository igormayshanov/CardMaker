export enum EditorActionTypes {
    SET_POSITION_BLOCK = "SET_POSITION_BLOCK",
    SET_SELECTED_BLOC = 'SET_SELECTED_BLOCK',
    RESET_SELECTED_BLOCK = 'RESET_SELECTED_BLOCK',
  }


  
  export function setSelectedBlock(id: string) {
    return {
      type: 'SET_SELECTED_BLOCK',
      id: id,
    }
  }
  
  export function resetSelectedBlock() {
    return {
      type: 'RESET_SELECTED_BLOCK',
    }
  }

  export function SetPositionBlock(x: number, y: number) {
    return {
      type: 'SET_POSITION_BLOCK',
      x: x,
      y: y,
    }
  }