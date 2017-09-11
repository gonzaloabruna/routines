import { ITagModel } from './tagModel.interface';

export interface ITaskModel {
    order: number;
    name: string;
    duration: number;
    routineItem: string;
    taskDate: Date;
    timeSpent: number;
    percentageCompleted: number;
    description?: string;
    tags?: Array<ITagModel>;
    _id?: string;
    __v?: number;
}
