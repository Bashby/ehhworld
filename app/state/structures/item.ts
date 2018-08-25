interface ItemId {
    id: string; // uuid
}

interface ItemBase {
    name: string;
    description: string;

    category: ItemCategory;
    subcategory: ItemSubCategory;

    level: number;
    rarity: ItemRarity;

    durability: number; // 0.0 to 1.0
    weight: number;
}

interface ItemMeta {
    stolen: boolean;
    broken: boolean;
    stackable: boolean;
    maxstack: number;
    count: number;
    equipable: boolean;
    equipped: boolean;
}

enum ItemRarity {
    Trash = 1,
    Common,
    Uncommon,
    Rare,
    Epic,
    Legendary,
    Exotic,
    Mythic,
    Quest,
}

enum ItemCategory {
    Armor = 1,
    Weapon,
    Consumable,
    Projectile, // ammo
    Key,
    Crafting,
    Quest, // quest items
    Miscellaneous,
}

enum ItemSubCategory {
    ///////////
    // Armor //
    ///////////
    // Light
    Cloth = 1,
    Padded,
    Leather,
    StuddedLeather,
    // Medium
    Hide,
    ChainShirt,
    ScaleMail,
    Breastplate,
    HalfPlate,
    // Heavy
    RingMail,
    ChainMail,
    Splint,
    FullPlate,
    // Misc.
    Shield,

    ////////////
    // Weapon //
    ////////////
    // One Handed Melee
    Dagger,
    FistWeapon,
    OneHandedAxe,
    OneHandedMace,
    OneHandedSword,
    // One Handed Range
    Sling,
    Thrown,
    Wand,
    // Two Handed Melee
    Polearm,
    Staff,
    TwoHandedAxe,
    TwoHandedMace,
    TwoHandedSword,
    // Two Handed Range
    Bow,
    Crossbow,
    Gun,
    // Misc.
    FishingPole,

    ////////////////
    // Consumable //
    ////////////////
    Potion,
    Scroll,
    Food,
    Drink,

    ////////////////
    // Projectile //
    ////////////////
    Arrow,
    Bullet,
    Bolt,
    ThrowingRock,

    /////////
    // Key //
    /////////
    Simple,
    Standard,
    Complex,
    Master,

    //////////////
    // Crafting //
    //////////////
    Component,
    Recipe,
    Blueprint,
    Tool,
    Reagent,

    ///////////
    // Quest //
    ///////////
    // ???

    ///////////////////
    // Miscellaneous //
    ///////////////////
    Cosmetic,
}

type AnonymousItem = ItemBase & ItemMeta;
export type Item = ItemId & AnonymousItem;
export type ItemUpdate = ItemId & Partial<AnonymousItem>;
