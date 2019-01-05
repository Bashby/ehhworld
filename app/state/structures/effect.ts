interface IEffectId {
    id: string; // uuid
}

interface IEffectBase {
    name: string;
    description: string;

    category: EffectCategory;
    subcategory: EffectSubCategory;

    application: IEffectApplication;

    magnitude?: number;
}

interface IEffectMeta {
    level?: number;
}

enum EffectCategory {
    Damage = 1,
    Healing,
    Buff,
    Debuff,
}

enum EffectSubCategory {
    None = 1,

    ////////////
    // Damage //
    ////////////
    Acid,
    Bludgeoning,
    Cold,
    Fire,
    Force,
    Lightning,
    Necrotic,
    Piercing,
    Poison,
    Psychic,
    Radiant,
    Slashing,
    Thunder,

    /////////////
    // Healing //
    /////////////
    // No sub categories

    //////////
    // Buff //
    //////////
    // No sub categories

    ////////////
    // Debuff //
    ////////////
    // No sub categories
}

interface IEffectApplication {
    type: IEffectApplicationType;
    remaining?: number;
}

enum IEffectApplicationType {
    Instant = 1,
    Periodic,
    Timed, // Applies until time runs out (in sec)
    Disease, // Permanent until cured
    Curse, // Permanent until dispelled
    Permanent, // There 'til you die!
}

type AnonymousEffect = IEffectBase & IEffectMeta;
export type Effect = IEffectId & AnonymousEffect;
export type EffectUpdate = IEffectId & Partial<AnonymousEffect>;
