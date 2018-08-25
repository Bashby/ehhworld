interface EffectId {
    id: string; // uuid
}

interface EffectBase {
    name: string;
    description: string;

    category: EffectCategory;
    subcategory: EffectSubCategory;

    application: EffectApplication;

    magnitude?: number;
}

interface EffectMeta {
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

interface EffectApplication {
    type: EffectApplicationType;
    remaining?: number;
}

enum EffectApplicationType {
    Instant = 1,
    Periodic,
    Timed, // Applies until time runs out (in sec)
    Disease, // Permanent until cured
    Curse, // Permanent until dispelled
    Permanent, // There 'til you die!
}

type AnonymousEffect = EffectBase & EffectMeta;
export type Effect = EffectId & AnonymousEffect;
export type EffectUpdate = EffectId & Partial<AnonymousEffect>;
