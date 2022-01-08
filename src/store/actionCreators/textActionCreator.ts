export enum TextActionTypes {
    INSERT_TEXT = 'INSERT_TEXT',
}


interface InsertTextAction {
    type: TextActionTypes.INSERT_TEXT,
    x: number, 
    y: number,
  }


  export function InsertImg(x: number, y: number): InsertTextAction {
    return {
      type: TextActionTypes.INSERT_TEXT,
      x: x,
      y: y
    }
  }
