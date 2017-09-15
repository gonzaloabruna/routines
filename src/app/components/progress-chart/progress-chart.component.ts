import { NgModule, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import check from 'check-types';

import { ApiService } from '../../services/api.service';

import { ITaskModel } from '../../interfaces/taskModel.interface';

@Component({
    selector: 'progress-chart',
    templateUrl: 'progress-chart.component.html',
    styleUrls: ['progress-chart.component.css']
})

export class ProgressChartComponent {
    allTasks: Array<ITaskModel> = [];
    totalTasks: Array<ITaskModel> = [];
    mapRoutineIdToIndexInArray: any = {};

    constructor(private apiService: ApiService) {
        this.recalculate();
    }

    recalculate(): void {
        this.apiService.getTasks({_id: {'$ne': null}}).then((allTaskResult: Array<ITaskModel>) => {
            this.allTasks = allTaskResult;
            allTaskResult.forEach((iTask) => {
                if (check.assigned(this.mapRoutineIdToIndexInArray[iTask.routineItem])) {
                    const indexOfRoutine = this.mapRoutineIdToIndexInArray[iTask.routineItem];
                    this.totalTasks[indexOfRoutine].timeSpent += iTask.timeSpent;
                } else {
                    this.mapRoutineIdToIndexInArray[iTask.routineItem] = this.totalTasks.length;
                    this.totalTasks.push(iTask);
                }
            });
        }).catch((error) => {
            // TODO handle error
            console.log(error);
        });
    }
}
