import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Subscription} from 'rxjs';

import { ITaskModel } from '../../interfaces/taskModel.interface';

@Component({
    selector: 'task',
    templateUrl: 'task.component.html',
    styleUrls: ['task.component.css']
})

export class TaskComponent {
    private subscription: Subscription;
    private totalDuration = 0; // Total duration in minutes, high precision decimal

    roundedTotalDuration = 0;
    startTime: Date;
    endTime: Date;
    percentageProgress = 0;
    deltaDuration = 0; // In case it gets reactivated

    @Input() task: ITaskModel;

    @Output() progressUpdated = new EventEmitter();

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
