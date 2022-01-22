import { RefObject, useEffect } from "react";
import { store } from "../../../store/store";

export function useStateBlock(
    blockId: string,
    block: RefObject<HTMLElement>,
    setSelectedBlock: (id: string) => void,
    resetSelectedBlock: () => void,
  ): void {
  
    useEffect(() => {
  
      const currentBlock = block.current;
  
      function MouseDownBlock(): void {
        if (store.getState().selectedId !== blockId) {
          setTimeout(() => {
            setSelectedBlock(blockId);
          });
        }
      }
  
      function handleClickDocument(event: Event): void {
        const isDefPrev: boolean = event.defaultPrevented;
        const isSelectedID: boolean = store.getState().selectedId === blockId;
        if (!isDefPrev && isSelectedID && (event.target !== currentBlock)) {
          resetSelectedBlock();
        }
      }

      document.addEventListener("click", handleClickDocument);
      if (currentBlock != null)(currentBlock).addEventListener("mousedown", MouseDownBlock);
      return () => {
        if (currentBlock) currentBlock.removeEventListener("mousedown", MouseDownBlock);
        document.removeEventListener("click", handleClickDocument);
      };
    }, [blockId, block, setSelectedBlock, resetSelectedBlock]);
  }