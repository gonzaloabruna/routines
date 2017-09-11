import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import check from 'check-types';

import { ApiService } from '../../services/api.service';

import { IRoutineItemModel } from '../../interfaces/routineItemModel.interface';
import { ITagModel } from '../../interfaces/tagModel.interface';

@Component({
    selector: 'routine-item-creator',
    templateUrl: 'routine-item-creator.component.html',
    styleUrls: ['routine-item-creator.component.css']
})

export class RoutineItemCreatorComponent implements OnInit {
    TAG_COLORS = ['none', 'primary', 'accent', 'warn'];

    @Output() routineItemCreated = new EventEmitter();
    @Output() routineItemUpdated = new EventEmitter();
    @Output() routineItemDeleted = new EventEmitter();

    @Input() routineItem: IRoutineItemModel;

    isNew = true;
    tagItem: ITagModel;

    constructor(private apiService: ApiService) {
        this.initTagItem();
    }

    ngOnInit(): void {
        this.initRoutineItem();
    }

    initRoutineItem(): void {
        if (check.assigned(this.routineItem) && check.nonEmptyObject(this.routineItem) &&
                check.assigned(this.routineItem._id) && check.nonEmptyString(this.routineItem._id)) {
            this.isNew = false;
            if (check.assigned(this.routineItem.tags) && check.nonEmptyArray(this.routineItem.tags)) {
                this.routineItem.tags.sort(this.tagsSort);
            }
            return;
        }
        this.routineItem = {
            order: this.routineItem.order ? this.routineItem.order : 1,
            name: '',
            duration: 0,
            active: false,
            description: '',
            tags: []
        };
    }

    saveRoutineItem(): void {
        if (this.isNew === true) {
            this.createRoutineItem();
        } else {
            this.updateRoutineItem();
        }
    }

    private tagsSort(a: ITagModel, b: ITagModel): number {
        if (a.tagName < b.tagName) { return -1; }
        if (a.tagName > b.tagName) { return 1; }
        return 0;
    }

    initTagItem(): void {
        this.tagItem = {
            tagName: '',
            tagColor: 'grey'
        };
    }

    addTagItem(): void {
        if (check.not.assigned(this.routineItem.tags) || check.not.array(this.routineItem.tags) ||
                check.emptyArray(this.routineItem.tags)) {
            this.routineItem.tags = [Object.assign({}, this.tagItem)];
            this.initTagItem();
        } else {
            this.routineItem.tags.push(Object.assign({}, this.tagItem));
            this.initTagItem();
        }
    }

    deleteRoutineItem(): void {
        if (check.assigned(this.routineItem._id)) {
            this.apiService.deleteRoutineItem(this.routineItem._id);
            this.routineItemDeleted.emit(this.routineItem);
        }
        return;
    }

    private createRoutineItem(): void {
        this.apiService.createRoutineItem(this.routineItem).then((newDoc) => {
            this.routineItem = newDoc;
            this.routineItemCreated.emit(newDoc);
            this.isNew = false;
        }).catch((error) => {
            // TODO handle error
            console.log(error);
        });
    }

    private updateRoutineItem(): void {
        this.apiService.updateRoutineItem(this.routineItem._id, this.routineItem).then((updateResult) => {
            this.routineItemUpdated.emit(this.routineItem);
        }).catch((error) => {
            // TODO handle error
            console.log(error);
        });
    }
}
