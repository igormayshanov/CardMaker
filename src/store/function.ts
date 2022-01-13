import { contentType } from "../types/types";

export function generateID() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);;
  }
  


  // проверка выделен ли блок
export function isSelectedBlock(id: string | null): boolean {
  return Boolean(id)
}

// установка значений полю/полям одного элемента из списка элементов
export function setBlockFields(contentBlock: contentType[], id: string, modifiableFields: object): contentType[] {
  let newCotentBlock: contentType[] = [];
  contentBlock.forEach((component: contentType) => {
    if (component.id === id) {
      newCotentBlock.push({
        ...component,
        ...modifiableFields,
      });
    } else {
      newCotentBlock.push(component);
    }
  });
  return newCotentBlock;
}

// получить индекс элемента по id
export function getIndexById(contentBlock: contentType[], id: string): number {
  let currentIndex: number = -1;
  contentBlock.forEach((item: contentType, index: number) => {
    if (item.id === id) {
      currentIndex = index;
    }
  });
  return currentIndex;
}