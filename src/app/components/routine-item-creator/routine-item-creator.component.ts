import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { ApiService } from '../../services/api.service';

import { IRoutineItemModel } from '../../interfaces/routineItemModel.interface';

@Component({
    selector: 'routine-item-creator',
    templateUrl: 'routine-item-creator.component.html',
    styleUrls: ['routine-item-creator.component.css']
})

export class RoutineItemCreatorComponent {
    @Output() newRoutineItem = new EventEmitter();

    routineItem: IRoutineItemModel;

    constructor(private apiService: ApiService) { }

    createRoutineItem(): void {
        this.apiService.createRoutineItem(this.routineItem).then((newDoc) => {
            this.routineItem = newDoc;
            this.newRoutineItem.emit(newDoc);
        }).catch((error) => {
            // TODO handle error
            console.log(error);
        });
    }
}
