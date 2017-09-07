import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { ApiService } from '../../services/api.service';

import { IRoutineItemModel } from '../../interfaces/routineItemModel.interface';

@Component({
    selector: 'routine-manager',
    templateUrl: 'routine-manager.component.html',
    styleUrls: ['routine-manager.component.css']
})

export class RoutineManagerComponent implements OnInit {
    routineItems: Array<IRoutineItemModel>;

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        this.apiService.getRoutineItems({'_id': {'$ne': null}}).then((docs) => {
            this.routineItems = docs;
        }).catch((error) => {
            // TODO handle error
            console.log(error);
        });
    }
}
