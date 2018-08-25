interface UiVisibilityId {
    id: string; // uuid
}

interface UiVisibilityBase {
    visible: boolean;
    visGroups: UiVisibilityGroup[];
}

export interface UiVisibilityGroup {
    name: string;
    exclusive: boolean;
    zIndex: number;
}

export type AnonymousUiVisibility = UiVisibilityBase;
export type UiVisibility = UiVisibilityId & AnonymousUiVisibility;
export type UiVisibilityUpdate = UiVisibilityId & Partial<AnonymousUiVisibility>;
