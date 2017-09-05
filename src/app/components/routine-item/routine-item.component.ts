import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Subscription} from 'rxjs';

@Component({
    selector: 'routine-item',
    templateUrl: 'routine-item.component.html',
    styleUrls: ['routine-item.component.css']
})

export class RoutineItemComponent {
    private subscription: Subscription;
    private totalDuration = 0; // Total duration in minutes, high precision decimal

    roundedTotalDuration = 0;
    startTime: Date;
    endTime: Date;
    percentageProgress = 0;
    deltaDuration = 0; // In case it gets reactivated

    @Input() routineOrder: number;
    @Input() routineName: string;
    @Input() routineDuration: number; // Duration that should be done, in minutes
    @Input() routineDescription: string;
    @Input() routineUrl: string;

    @Output() progressUpdated = new EventEmitter();

    startRoutine(): void {
        this.startTime = new Date();
        this.endTime = null;
        this.deltaDuration = 0;

        const timer = Observable.timer(1000, 1000);
        this.subscription = timer.subscribe(t => { this.recalculateProgress(); });
    }

    stopRoutine(): void {
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

        this.percentageProgress = (this.totalDuration * 100) / this.routineDuration;
        this.percentageProgress = Number(this.percentageProgress.toFixed(2));
    }
}
