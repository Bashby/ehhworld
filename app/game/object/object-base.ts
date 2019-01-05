// Lib imports
import { v4 as uuidv4 } from "uuid";

// Local imports
import { UUID } from "../util/types";

export interface IBaseObject {
    id: UUID;
}

export class BaseObject implements IBaseObject {
    public id: UUID = uuidv4(); // uuid

    constructor() {}
}
