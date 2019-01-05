/* tslint:disable:no-bitwise no-namespace */

// Local imports
import { UUID } from "../../game/util/types";
import { NamespaceBase } from "protobufjs";

interface ItemId {
    id: UUID;
}

interface ItemBase {
    name: string;
    description: string;
    flavorText?: string;

    category: ItemCategory;
    subcategory: ItemSubCategory;

    level: number;
    rarity: ItemRarity;

    durability: number; // 0.0 to 1.0
    weight: number;
}

export interface ItemMeta {
    flags: ItemMetaFlags;
    maxstack: number;
    count: number;
}

export enum ItemMetaFlags {
    None        = 0,
    Stolen      = 1 << 0,
    Broken      = 1 << 1,
    Stackable   = 1 << 2,
    Equipable   = 1 << 3,
    Equipped    = 1 << 4,
}

export enum ItemRarity {
    Trash = 1, // Gray
    Common, // White
    Uncommon, // Green
    Rare, // Blue
    Epic, // Purple
    Exotic, // Orange
    Legendary, // Magenta / Pink?
    Quest, // Brown
}

export enum ItemCategory {
    Armor = 1,
    Weapon,
    Consumable,
    Projectile, // ammo
    Key,
    Crafting,
    Quest, // quest items
    Miscellaneous,
}

export type ItemSubCategory = ItemSubCategory.SubCategories;
export namespace ItemSubCategory {
    export type SubCategories= Armor.Armors
        | Weapon.Weapons
        | Consumable
        | Projectile
        | Key
        | Crafting
        | Quest
        | Miscellaneous;
    export namespace Armor {
        export type Armors = Light | Medium | Heavy | Shield;
        export enum Light {
            CLOTH = "cloth",
            PADDED = "padded",
            LEATHER = "leather",
            STUDDEDLEATHER = "studded-leather",
        }
        export enum Medium {
            HIDE = "hide",
            CHAINSHIRT = "chain-shirt",
            SCALEMAIL = "scale-mail",
            BREASTPLATE = "breast-plate",
            HALFPLATE = "half-plate",
            SPIKED = "spiked",
        }
        export enum Heavy {
            RINGMAIL = "ring-mail",
            CHAINMAIL = "chain-mail",
            SPLINT = "splint",
            PLATE = "plate",
            FULLPLATE = "full-plate",
        }
        export enum Shield {
            BUCKLER = "buckler", // e.g. small
            HEATER = "heater", // e.g. medium
            FULL = "full", // e.g. large
            TOWER = "tower", // e.g. huge
        }
    }
    export namespace Weapon {
        export type Weapons = Melee.Types | Ranged.Types;
        export namespace Melee {
            export type Types = OneHanded | TwoHanded | Miscellaneous;
            export enum OneHanded {
                CLUB = "club",
                DAGGER = "dagger",
                FIST = "fist",
                AXE = "axe",
                MACE = "mace",
                SWORD = "sword",
            }
            export enum TwoHanded {
                SPEAR = "spear",
                STAFF = "staff",
                AXE = "axe",
                MACE = "mace",
                SWORD = "sword",
            }
            export enum Miscellaneous {
                FISHINGPOLE = "fishing-pole",
            }
        }
        export namespace Ranged {
            export type Types = OneHanded | TwoHanded | Miscellaneous;
            export enum OneHanded {
                SLING = "sling",
                THROWN = "thrown",
                WAND = "wand",
            }
            export enum TwoHanded {
                SHORTBOW = "shortbow",
                LONGBOW = "longbow",
                CROSSBOW = "crossbow",
            }
            export enum Miscellaneous {
            }
        }
    }
    export enum Consumable {
        POTION = "potion",
        SCROLL = "scroll",
        FOOD = "food",
        DRINK = "drink",
    }
    export enum Projectile {
        ARROW = "arrow",
        BOLT = "bolt",
        ROCK = "rock",
        THROWINGDAGGER = "throwing-dagger",
    }
    export enum Key {
        SIMPLE = "simple",
        STANDARD = "standard",
        COMPLEX = "complex",
        MASTER = "master",
    }
    export enum Crafting {
        COMPONENT = "component",
        RECIPE = "recipe",
        BLUEPRINT = "blueprint",
        TOOL = "tool",
        REAGENT = "reagent",
    }
    export enum Quest {}
    export enum Miscellaneous {
        COSMETIC = "cosmetic",
    }
}

type AnonymousItem = ItemBase & ItemMeta;
export type Item = ItemId & AnonymousItem;
export type ItemUpdate = ItemId & Partial<AnonymousItem>;
export type NewItemConfig = ItemBase & Partial<ItemMeta>;
export function createItemFromConfig(config: NewItemConfig): Item {
    const defaultItemMeta: ItemMeta = {
        count: 1,
        maxstack: 1,
        flags: ItemMetaFlags.None,
    };
    const newItem = { id: "test", ...defaultItemMeta, ...config };

    return newItem;
}
