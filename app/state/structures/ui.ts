type UiVisibilityId = {
    id: string // uuid
}

type UiVisibilityBase = {
    visible: boolean,
    visGroups: UiVisibilityGroup[]
}

export type UiVisibilityGroup = {
    name: string,
    exclusive: boolean,
    zIndex: number
}

export type AnonymousUiVisibility = UiVisibilityBase;
export type UiVisibility = UiVisibilityId & AnonymousUiVisibility;
export type UiVisibilityUpdate = UiVisibilityId & Partial<AnonymousUiVisibility>;
