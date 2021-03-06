import { RefObject, useEffect } from "react";
import { positionType } from "../../../types/types";

export function useDragAndDrop(
    item: RefObject<HTMLElement>,
    modelPos: positionType,
    setPosition: (position: positionType, id: string) => void,
    id: string,
): void {

    useEffect(() => {

        const currentItem = item.current;

        let startPos: positionType;

        function handleMouseDown(e: MouseEvent): void {
            startPos = {
                x: e.pageX,
                y: e.pageY,
            };
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        }

        let newPos: positionType;

        function handleMouseMove(e: MouseEvent): void {
            if (!e.defaultPrevented) {
                const delta = {
                    x: e.pageX - startPos.x,
                    y: e.pageY - startPos.y
                }
                newPos = {
                    x: modelPos.x + delta.x,
                    y: modelPos.y + delta.y
                }
                if (currentItem != null) currentItem.style.left = String(newPos.x) + 'px';
                if (currentItem != null) currentItem.style.top = String(newPos.y) + 'px';
            }
        }

        function handleMouseUp(): void {
            if (newPos) {
                setPosition(newPos, id);
            }
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        if (currentItem != null) currentItem.addEventListener("mousedown", handleMouseDown);
        return () => {
            if (currentItem) currentItem.removeEventListener("mousedown", handleMouseDown);
        };
    }, [item, modelPos, setPosition, id]);
}