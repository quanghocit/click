// Type definitions for ag-grid v4.1.5
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
import { Column } from "../entities/column";
import { ColumnGroup } from "../entities/columnGroup";
export interface DragSource {
    eElement: HTMLElement;
    dragItem: Column | ColumnGroup;
    dragSourceDropTarget?: DropTarget;
}
export interface DropTarget {
    eContainer: HTMLElement;
    iconName?: string;
    eSecondaryContainers?: HTMLElement[];
    onDragEnter?: (params: DraggingEvent) => void;
    onDragLeave?: (params: DraggingEvent) => void;
    onDragging?: (params: DraggingEvent) => void;
    onDragStop?: (params: DraggingEvent) => void;
}
export interface DraggingEvent {
    event: MouseEvent;
    x: number;
    y: number;
    direction: string;
    dragItem: Column | ColumnGroup;
    dragSource: DragSource;
}
export declare class DragAndDropService {
    private gridOptionsWrapper;
    private dragService;
    static DIRECTION_LEFT: string;
    static DIRECTION_RIGHT: string;
    static ICON_PINNED: string;
    static ICON_ADD: string;
    static ICON_MOVE: string;
    static ICON_LEFT: string;
    static ICON_RIGHT: string;
    static ICON_GROUP: string;
    private logger;
    private dragItem;
    private eventLastTime;
    private dragSource;
    private dragging;
    private eGhost;
    private eGhostIcon;
    private eBody;
    private dropTargets;
    private lastDropTarget;
    private ePinnedIcon;
    private ePlusIcon;
    private eHiddenIcon;
    private eMoveIcon;
    private eLeftIcon;
    private eRightIcon;
    private eGroupIcon;
    private setBeans(loggerFactory);
    addDragSource(params: DragSource): void;
    nudge(): void;
    private onDragStart(dragSource, mouseEvent);
    private onDragStop(mouseEvent);
    private onDragging(mouseEvent);
    addDropTarget(dropTarget: DropTarget): void;
    workOutDirection(event: MouseEvent): string;
    createDropTargetEvent(dropTarget: DropTarget, event: MouseEvent, direction: string): DraggingEvent;
    private positionGhost(event);
    private removeGhost();
    private createGhost();
    private getActualWidth(dragItem);
    private getNameForGhost(dragItem);
    setGhostIcon(iconName: string, shake?: boolean): void;
}
