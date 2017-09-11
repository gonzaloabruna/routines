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
        this.getAllRoutineItems();
    }

    getAllRoutineItems(): void {
        this.apiService.getRoutineItems({'_id': {'$ne': null}}).then((docs) => {
            this.routineItems = docs;
            const listOrders: Array<number> = this.routineItems.map((iDoc) => {
                return iDoc.order;
            });
            const nextOrder = listOrders ? (Math.max.apply(Math, listOrders) + 1) : 1;
            this.routineItems.push({
                order: nextOrder,
                name: '',
                duration: 0,
                active: false,
                description: '',
                tags: []
            });
        }).catch((error) => {
            // TODO handle error
            console.log(error);
        });
    }
}
