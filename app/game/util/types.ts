export type UUID = string;

export interface IUnitVector {
    x: UnitVectorValue;
    y: UnitVectorValue;
}

export enum UnitVectorValue {
    Position = 1,
    Negative = -1,
    Zero = 0,
}
