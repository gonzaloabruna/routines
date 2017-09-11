import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { ApiService } from '../../services/api.service';

import { ITagModel } from '../../interfaces/tagModel.interface';

@Component({
    selector: 'tag',
    templateUrl: 'tag.component.html',
    styleUrls: ['tag.component.css']
})

export class TagComponent {
    @Output() deleteTag = new EventEmitter();

    @Input() tagItem: ITagModel;
    @Input() canDeleteTag: boolean = false;
}
