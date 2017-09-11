import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Subscription} from 'rxjs';

import { ApiService } from '../../services/api.service';

import { ITaskModel } from '../../interfaces/taskModel.interface';

@Component({
    selector: 'task',
    templateUrl: 'task.component.html',
    styleUrls: ['task.component.css']
})

export class TaskComponent implements OnInit {
    private subscription: Subscription;
    private totalDuration = 0; // Total duration in minutes, high precision decimal

    roundedTotalDuration = 0;
    startTime: Date;
    endTime: Date;
    percentageProgress = 0;
    deltaDuration = 0; // In case it gets reactivated
    showDescription = false;

    @Input() task: ITaskModel;

    @Output() progressUpdated = new EventEmitter();

    constructor(private apiService: ApiService) {}

    ngOnInit(): void {
        if (this.task.timeSpent && this.task.timeSpent > 0) {
            this.totalDuration = this.task.timeSpent;
            this.roundedTotalDuration = this.task.timeSpent;
            this.recalculatePercentage();
        }
    }

    startTask(): void {
        this.startTime = new Date();
        this.endTime = null;
        this.deltaDuration = 0;

        const timer = Observable.timer(1000, 1000);
        this.subscription = timer.subscribe(t => { this.recalculateProgress(); });
    }

    stopTask(): void {
        this.recalculateProgress();
        this.startTime = null;
        this.subscription.unsubscribe();
    }

    private recalculateProgress(): void {
        this.recalculateDuration();
        this.recalculatePercentage();
        this.apiService.updateTask(this.task._id, {timeSpent: this.roundedTotalDuration, percentageCompleted: this.percentageProgress});
    }

    private recalculateDuration(): void {
        const progressWindow = (((new Date().getTime() - this.startTime.getTime()) / 1000) / 60) - this.deltaDuration;
        this.deltaDuration += progressWindow;
        this.totalDuration += progressWindow;
        this.roundedTotalDuration = Number(this.totalDuration.toFixed(2));
        this.progressUpdated.emit(progressWindow);
    }

    private recalculatePercentage(): void {
        if (this.totalDuration === 0) {
            this.percentageProgress = 0;
            return;
        }

        this.percentageProgress = (this.totalDuration * 100) / this.task.duration;
        this.percentageProgress = Number(this.percentageProgress.toFixed(2));
    }
}
