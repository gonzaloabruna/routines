/**
TO-DO LIST:

2) Storing the data for today's thing (do not lose it when refreshing)
3) Using a database to save historic data
4) Colors and improved UI
5) Mobile friendly
6) Deploy to heroku
7) Swipe to left/right
8) Reporting

**/

import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'routine-displayer',
    templateUrl: 'routine-displayer.component.html',
    styleUrls: ['routine-displayer.component.css']
})

export class RoutineDisplayerComponent {
    private progressInMin = 0;

    listRoutines: Array<IRoutineModel> = [];
    roundedProgressInMin = 0; // Total progress in minutes, sum of all routines
    progressInPercentage = 0;
    totalMinsToStudy = 0;

    constructor() {
        const routine1: IRoutineModel = {
            routineOrder: 1,
            routineName: 'Fretboard & CAGED positions',
            routineDuration: 10,
            routineDescription: 'Fretboard Logic or Fretboard Freedom',
            tags: ['scales', 'chords', 'tempo', 'licks']
        };

        const routine2: IRoutineModel = {
            routineOrder: 2,
            routineName: 'Standard Notation Reading',
            routineDuration: 20,
            routineDescription: 'Standard Notation Reading',
            tags: ['reading', 'tempo']
        };

        const routine3: IRoutineModel = {
            routineOrder: 3,
            routineName: 'Guitar Rhythms',
            routineDuration: 15,
            routineDescription: 'Rhythm Guitar Book - 365',
            tags: ['rhythm', 'tempo']
        };

        const routine4: IRoutineModel = {
            routineOrder: 4,
            routineName: 'Guitar Aerobics',
            routineDuration: 15,
            routineDescription: 'Guitar Aerobics book',
            tags: ['licks', 'tempo', 'technique']
        };

        const routine5: IRoutineModel = {
            routineOrder: 5,
            routineName: 'Ear training',
            routineDuration: 30,
            routineDescription: 'Justin Guitar Transcriptions / Songs Transcriptions',
            tags: ['ear training', 'licks']
        };

        const routine6: IRoutineModel = {
            routineOrder: 6,
            routineName: 'Songs / Repertoire',
            routineDuration: 30,
            routineDescription: 'The Reeds Songs / Truefire Courses / Songbooks',
            tags: ['repertoire', 'licks']
        };

        this.listRoutines = [routine1, routine2, routine3, routine4, routine5, routine6];

        this.totalMinsToStudy = this.listRoutines.map((iRoutine) => { return iRoutine.routineDuration; })
                                                .reduce((accumulator: number, currentVal: number) => { return accumulator + currentVal; });
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

export interface IRoutineModel {
    routineOrder: number;
    routineName: string;
    routineDuration: number;
    routineDescription: string;
    routineUrl?: string;
    tags?: Array<string>;
}
