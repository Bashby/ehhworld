import {
    NewItemConfig,
    ItemCategory,
    ItemSubCategory,
    ItemRarity,
    createItemFromConfig,
} from "../../state/structures/item";

const config: NewItemConfig = {
    name: "sword",
    description: "A one-handed sword.",
    flavorText: "It won't slay a dragon, but it cuts carrots beautifully.",

    category: ItemCategory.Weapon,
    subcategory: ItemSubCategory.Weapon.Melee.OneHanded.SWORD,

    level: 1,
    rarity: ItemRarity.Common,

    durability: 1,
    weight: 5,
};

export default createItemFromConfig(config);
