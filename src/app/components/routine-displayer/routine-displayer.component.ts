/**
TO-DO LIST:

0) Hover on buttons
4) Adding route of api to config files
5) Mobile friendly
6) Deploy to heroku
7) Reporting

**/

import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { ApiService } from '../../services/api.service';

import { ITaskModel } from '../../interfaces/taskModel.interface';
import { IRoutineItemModel } from '../../interfaces/routineItemModel.interface';

@Component({
    selector: 'routine-displayer',
    templateUrl: 'routine-displayer.component.html',
    styleUrls: ['routine-displayer.component.css']
})

export class RoutineDisplayerComponent implements OnInit {
    private progressInMin = 0;

    listTasks: Array<ITaskModel> = [];
    roundedProgressInMin = 0; // Total progress in minutes, sum of all routines
    progressInPercentage = 0;
    totalMinsToStudy = 0;

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        this.getTodayTasks();
    }

    resetTodayTasks(): void {
        if (confirm('Are you sure that you want to delete all your tasks of today?')) {
            this.progressInPercentage = 0;
            this.progressInMin = 0;
            this.apiService.deleteTodayTasks().then(() => {
                this.getTodayTasks();
            }).catch((error) => {
                // TODO handle error
                console.log(error);
            });
        }
    }

    private getTodayTasks(): void {
        this.apiService.getTodayTasks().then((todayTasks: Array<ITaskModel>) => {
            this.listTasks = todayTasks;
            this.totalMinsToStudy = this.listTasks.map((iRoutine) => {
                if (iRoutine.timeSpent && iRoutine.timeSpent > 0) {
                    this.progressInMin += iRoutine.timeSpent;
                }
                return iRoutine.duration;
            }).reduce((accumulator: number, currentVal: number) => { return accumulator + currentVal; });
            this.recalculateTotalProgress(0);
        }).catch((error) => {
            // TODO handle error
            console.log(error);
        });
    }

    recalculateTotalProgress(newProgress: number): void {
        this.progressInMin += newProgress;
        this.roundedProgressInMin = Number(this.progressInMin.toFixed(2));
        if (this.progressInMin !== 0) {
            this.progressInPercentage = (this.progressInMin / this.totalMinsToStudy) * 100;
            this.progressInPercentage = Number(this.progressInPercentage.toFixed(2));
        }
    }
}
