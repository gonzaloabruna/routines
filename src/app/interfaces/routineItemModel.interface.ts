export interface IRoutineItemModel {
    order: number;
    name: string;
    duration: number;
    active: boolean;
    description?: string;
    tags?: Array<string>;
    _id?: string;
    __v?: number;
}
