interface IUiVisibilityId {
    id: string; // uuid
}

interface IUiVisibilityBase {
    visible: boolean;
    visGroups: IUiVisibilityGroup[];
}

export interface IUiVisibilityGroup {
    name: string;
    exclusive: boolean;
    zIndex: number;
}

export type AnonymousUiVisibility = IUiVisibilityBase;
export type UiVisibility = IUiVisibilityId & AnonymousUiVisibility;
export type UiVisibilityUpdate = IUiVisibilityId & Partial<AnonymousUiVisibility>;
