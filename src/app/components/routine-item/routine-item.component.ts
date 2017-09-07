import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { ApiService } from '../../services/api.service';

import { IRoutineItemModel } from '../../interfaces/routineItemModel.interface';

@Component({
    selector: 'routine-item',
    templateUrl: 'routine-item.component.html',
    styleUrls: ['routine-item.component.css']
})

export class RoutineItemComponent {
    @Input() routineItem: IRoutineItemModel;

    constructor(private apiService: ApiService) { }

    updateRoutineItem(): void {
        this.apiService.updateRoutineItem(this.routineItem._id, this.routineItem).then(() => {

        }).catch((error) => {
            // TODO handle error
            console.log(error);
        });
    }
}
