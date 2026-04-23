// Base reutilizável
export type NamedAPIResource = {
  name: string;
  url: string;
};

// Abilities
export type Ability = {
  ability: NamedAPIResource;
  is_hidden: boolean;
  slot: number;
};

// Cries
export type Cries = {
  latest: string;
  legacy: string;
};

// Game Index
export type GameIndex = {
  game_index: number;
  version: NamedAPIResource;
};

// Held Items
export type VersionDetail = {
  rarity: number;
  version: NamedAPIResource;
};

export type HeldItem = {
  item: NamedAPIResource;
  version_details: VersionDetail[];
};

// Moves
export type MoveLearnMethod = NamedAPIResource;

export type VersionGroupDetail = {
  level_learned_at: number;
  move_learn_method: MoveLearnMethod;
  order: number | null;
  version_group: NamedAPIResource;
};

export type Move = {
  move: NamedAPIResource;
  version_group_details: VersionGroupDetail[];
};

// Past Abilities
export type PastAbility = {
  abilities: {
    ability: NamedAPIResource | null;
    is_hidden: boolean;
    slot: number;
  }[];
  generation: NamedAPIResource;
};

// Stats
export type Stat = {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource;
};

// Past Stats
export type PastStat = {
  generation: NamedAPIResource;
  stats: Stat[];
};

// Types
export type TypeElement = {
  slot: number;
  type: NamedAPIResource;
};

// Sprites (simplificado, mas tipado corretamente)
export type Sprites = {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
  other: {
    dream_world: {
      front_default: string;
      front_female: string | null;
    };
    home: {
      front_default: string;
      front_female: string | null;
      front_shiny: string;
      front_shiny_female: string | null;
    };
    "official-artwork": {
      front_default: string;
      front_shiny: string;
    };
    showdown: {
      back_default: string;
      back_female: string | null;
      back_shiny: string;
      back_shiny_female: string | null;
      front_default: string;
      front_female: string | null;
      front_shiny: string;
      front_shiny_female: string | null;
    };
  };
};

// Forms
export type Form = NamedAPIResource;

// Pokemon principal
export type Pokemon = {
  abilities: Ability[];
  base_experience: number;
  cries: Cries;
  forms: Form[];
  game_indices: GameIndex[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_abilities: PastAbility[];
  past_stats: PastStat[];
  species: NamedAPIResource;
  sprites: Sprites;
  stats: Stat[];
  types: TypeElement[];
  weight: number;
};