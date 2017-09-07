export interface ITaskModel {
    order: number;
    name: string;
    duration: number;
    routineItem: string;
    taskDate: Date;
    timeSpent: number;
    percentageCompleted: number;
    description?: string;
    tags?: Array<string>;
    _id?: string;
    __v?: number;
}
