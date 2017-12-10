export interface Item {
    id: string // uuid
    name: string
    description: string

    stackable: boolean
    stacksize: number

    rarity: ItemRarity
    
    durability: number // 0.0 to 1.0
    broken: boolean

    unidentified: boolean
}

export enum ItemRarity {
    Trash = 1,
    Common,
    Uncommon,
    Rare,
    Legendary,
    Exotic,
    Mythic,
    Quest,
}
