import { ITagModel } from './tagModel.interface';

export interface IRoutineItemModel {
    order: number;
    name: string;
    duration: number;
    active: boolean;
    description?: string;
    tags?: Array<ITagModel>;
    _id?: string;
    __v?: number;
}
