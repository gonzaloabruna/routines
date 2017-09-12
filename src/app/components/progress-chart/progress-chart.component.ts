import { NgModule, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ApiService } from '../../services/api.service';

import { ITaskModel } from '../../interfaces/taskModel.interface';

@Component({
    selector: 'progress-chart',
    templateUrl: 'progress-chart.component.html',
    styleUrls: ['progress-chart.component.css']
})

export class ProgressChartComponent {
    listTasks: Array<ITaskModel> = [];

    constructor(private apiService: ApiService) {
        this.fetchAllTasks();
    }

    fetchAllTasks(): void {
        this.apiService.getTasks({_id: {'$ne': null}}).then((allTasks: Array<ITaskModel>) => {
            this.listTasks = allTasks;
        }).catch((error) => {
            // TODO handle error
            console.log(error);
        });
    }
}
