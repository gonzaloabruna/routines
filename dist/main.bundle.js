webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/angular-material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AngularMaterialModule = (function () {
    function AngularMaterialModule() {
    }
    return AngularMaterialModule;
}());
AngularMaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdCardModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdCheckboxModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdChipsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdGridListModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdInputModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MdSelectModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MdSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdTabsModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdCardModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdCheckboxModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdChipsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdGridListModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdInputModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MdSelectModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MdSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdTabsModule */]]
    })
], AngularMaterialModule);

//# sourceMappingURL=angular-material.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Guitar Routine\n  </h1>\n</div>\n\n<md-tab-group>\n    <md-tab label=\"Today's Tasks\">\n        <routine-displayer class=\"padding-bottom-m\"></routine-displayer>\n    </md-tab>\n    <md-tab label=\"Random Keys\">\n        <random-keys-generator useSharpsAndFlats=\"true\" class=\"padding-bottom-m\"></random-keys-generator>\n    </md-tab>\n    <md-tab label=\"Statistics\">\n        <progress-chart></progress-chart>\n    </md-tab>\n    <md-tab label=\"Configure Routine\">\n        <routine-manager class=\"padding-bottom-m\"></routine-manager>\n    </md-tab>\n</md-tab-group>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_components_module__ = __webpack_require__("../../../../../src/app/components/components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_module__ = __webpack_require__("../../../../../src/app/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__components_components_module__["a" /* ComponentModule */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material_module__["a" /* AngularMaterialModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_module__ = __webpack_require__("../../../../../src/app/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_services_module__ = __webpack_require__("../../../../../src/app/services/services.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__random_keys_generator_random_keys_generator_component__ = __webpack_require__("../../../../../src/app/components/random-keys-generator/random-keys-generator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routine_displayer_routine_displayer_component__ = __webpack_require__("../../../../../src/app/components/routine-displayer/routine-displayer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__task_task_component__ = __webpack_require__("../../../../../src/app/components/task/task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routine_item_creator_routine_item_creator_component__ = __webpack_require__("../../../../../src/app/components/routine-item-creator/routine-item-creator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routine_manager_routine_manager_component__ = __webpack_require__("../../../../../src/app/components/routine-manager/routine-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tag_tag_component__ = __webpack_require__("../../../../../src/app/components/tag/tag.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__progress_chart_progress_chart_component__ = __webpack_require__("../../../../../src/app/components/progress-chart/progress-chart.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ComponentModule = (function () {
    function ComponentModule() {
    }
    return ComponentModule;
}());
ComponentModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material_module__["a" /* AngularMaterialModule */], __WEBPACK_IMPORTED_MODULE_4__services_services_module__["a" /* ServicesModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_11__progress_chart_progress_chart_component__["a" /* ProgressChartComponent */], __WEBPACK_IMPORTED_MODULE_5__random_keys_generator_random_keys_generator_component__["a" /* RandomKeysGeneratorComponent */], __WEBPACK_IMPORTED_MODULE_6__routine_displayer_routine_displayer_component__["a" /* RoutineDisplayerComponent */], __WEBPACK_IMPORTED_MODULE_7__task_task_component__["a" /* TaskComponent */],
            __WEBPACK_IMPORTED_MODULE_8__routine_item_creator_routine_item_creator_component__["a" /* RoutineItemCreatorComponent */], __WEBPACK_IMPORTED_MODULE_9__routine_manager_routine_manager_component__["a" /* RoutineManagerComponent */], __WEBPACK_IMPORTED_MODULE_10__tag_tag_component__["a" /* TagComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_11__progress_chart_progress_chart_component__["a" /* ProgressChartComponent */], __WEBPACK_IMPORTED_MODULE_5__random_keys_generator_random_keys_generator_component__["a" /* RandomKeysGeneratorComponent */], __WEBPACK_IMPORTED_MODULE_6__routine_displayer_routine_displayer_component__["a" /* RoutineDisplayerComponent */], __WEBPACK_IMPORTED_MODULE_7__task_task_component__["a" /* TaskComponent */],
            __WEBPACK_IMPORTED_MODULE_8__routine_item_creator_routine_item_creator_component__["a" /* RoutineItemCreatorComponent */], __WEBPACK_IMPORTED_MODULE_9__routine_manager_routine_manager_component__["a" /* RoutineManagerComponent */], __WEBPACK_IMPORTED_MODULE_10__tag_tag_component__["a" /* TagComponent */]]
    })
], ComponentModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/progress-chart/progress-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mainContainer {\r\n    text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/progress-chart/progress-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mainContainer padding-top-m\">\r\n    <table>\r\n        <tr>\r\n            <th md-sort-header=\"name\">Task Name</th>\r\n            <th md-sort-header=\"timeSpent\">Time spent (min)</th>\r\n        </tr>\r\n        <tr *ngFor=\"let iTask of totalTasks\">\r\n            <td>{{iTask.name}}</td>\r\n            <td>{{iTask.timeSpent}}</td>\r\n        </tr>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/progress-chart/progress-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_check_types__ = __webpack_require__("../../../../check-types/src/check-types.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_check_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_check_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProgressChartComponent = (function () {
    function ProgressChartComponent(apiService) {
        this.apiService = apiService;
        this.allTasks = [];
        this.totalTasks = [];
        this.mapRoutineIdToIndexInArray = {};
        this.recalculate();
    }
    ProgressChartComponent.prototype.recalculate = function () {
        var _this = this;
        this.apiService.getTasks({ _id: { '$ne': null } }).then(function (allTaskResult) {
            _this.allTasks = allTaskResult;
            allTaskResult.forEach(function (iTask) {
                if (__WEBPACK_IMPORTED_MODULE_1_check_types___default.a.assigned(_this.mapRoutineIdToIndexInArray[iTask.routineItem])) {
                    var indexOfRoutine = _this.mapRoutineIdToIndexInArray[iTask.routineItem];
                    _this.totalTasks[indexOfRoutine].timeSpent += iTask.timeSpent;
                }
                else {
                    _this.mapRoutineIdToIndexInArray[iTask.routineItem] = _this.totalTasks.length;
                    _this.totalTasks.push(iTask);
                }
            });
        }).catch(function (error) {
            // TODO handle error
            console.log(error);
        });
    };
    return ProgressChartComponent;
}());
ProgressChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'progress-chart',
        template: __webpack_require__("../../../../../src/app/components/progress-chart/progress-chart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/progress-chart/progress-chart.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _a || Object])
], ProgressChartComponent);

var _a;
//# sourceMappingURL=progress-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/random-keys-generator/random-keys-generator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".keyCard {\r\n    font-size: 3em;\r\n}\r\n\r\n.keysDisplayer {\r\n    padding-right: 0.5em;\r\n    padding-left: 0.5em;\r\n}\r\n\r\n.ramdomKeysContainer {\r\n    text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/random-keys-generator/random-keys-generator.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ramdomKeysContainer padding-top-s padding-bottom-m\">\r\n    <h2 class=\"keysTitle\">\r\n        Generate Random Keys to Practice\r\n    </h2>\r\n\r\n    <div class=\"randomSelection\">\r\n        <md-select placeholder=\"Type of progression\" [(ngModel)]=\"specialProgression\" name=\"ProgressionType\" (change)=\"generateKeys()\">\r\n            <md-option *ngFor=\"let iOption of randomOptions\" [value]=\"iOption\">\r\n              {{iOption}}\r\n            </md-option>\r\n        </md-select>\r\n\r\n        <button md-raised-button color=\"primary\" (click)=\"generateKeys()\" class=\"generateButton\">GENERATE</button>\r\n    </div>\r\n\r\n    <div class=\"keysDisplayer padding-top-l padding-bottom-m\">\r\n        <md-grid-list cols=\"1\" rowHeight=\"80\" size=\"60%\">\r\n            <ng-template ngFor let-iKey [ngForOf]=\"keysArray\" let-keyIndex=\"index\">\r\n                <md-grid-tile [colspan]=\"1\" [rowspan]=\"1\" [style.background]=\"'lightblue'\">\r\n                    <span class=\"keyCard padding-top-s padding-bottom-s\">\r\n                        {{iKey}}\r\n                    </span>\r\n                </md-grid-tile>\r\n            </ng-template>\r\n        </md-grid-list>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/random-keys-generator/random-keys-generator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RandomKeysGeneratorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RandomKeysGeneratorComponent = (function () {
    function RandomKeysGeneratorComponent() {
        this.LIST_KEYS = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        this.FORBIDDEN_SHARPS_IN_NOTES = ['B', 'E']; // B# and E# are not relevant
        this.FORBIDDEN_FLATS_IN_NOTES = ['C', 'F']; // Cb and Fb are not relevant
        this.CIRCLE_OF_FIFTHS = ['F', 'C', 'G', 'D', 'A', 'E', 'B', 'F#', 'Gb', 'Db', 'Ab', 'Eb', 'Bb'];
        this.CHROMATIC_SCALE = ['A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab'];
        this.randomOptions = ['BLUES', 'THIRDS', 'FOURTHS', 'FIFTHS', 'RANDOM'];
        this.totalDuration = 0; // Total duration in minutes
        this.specialProgression = 'RANDOM'; // BLUES, THIRDS, FIFTHS, etc
        this.numberOfKeys = 3; // Number of keys to be generated
    }
    RandomKeysGeneratorComponent.prototype.ngOnInit = function () {
        this.generateKeys();
    };
    RandomKeysGeneratorComponent.prototype.generateKeys = function () {
        this.keysArray = [];
        if (!this.specialProgression) {
            this.generateRandomKeys();
        }
        else if (this.specialProgression === 'BLUES') {
            this.generateKeysBlues();
        }
        else if (this.specialProgression === 'THIRDS') {
            this.generateKeysThirds();
        }
        else if (this.specialProgression === 'FOURTHS') {
            this.generateKeysFourths();
        }
        else if (this.specialProgression === 'FIFTHS') {
            this.generateKeysFifths();
        }
        else if (this.specialProgression === 'RANDOM') {
            this.generateRandomKeys();
        }
        else {
            this.generateRandomKeys();
        }
    };
    RandomKeysGeneratorComponent.prototype.generateKeysThirds = function () {
        var index = Math.floor((Math.random() * this.CHROMATIC_SCALE.length));
        this.keysArray.push(this.CHROMATIC_SCALE[index]);
        index += 4;
        if (index >= this.CHROMATIC_SCALE.length) {
            index -= this.CHROMATIC_SCALE.length;
        }
        this.keysArray.push(this.CHROMATIC_SCALE[index]);
        index += 3;
        if (index >= this.CHROMATIC_SCALE.length) {
            index -= this.CHROMATIC_SCALE.length;
        }
        this.keysArray.push(this.CHROMATIC_SCALE[index]);
    };
    RandomKeysGeneratorComponent.prototype.generateKeysFifths = function () {
        var index = Math.floor((Math.random() * this.CIRCLE_OF_FIFTHS.length));
        this.keysArray.push(this.CIRCLE_OF_FIFTHS[index]);
        while (this.keysArray.length < this.numberOfKeys) {
            if ((index + 1) === this.CIRCLE_OF_FIFTHS.length) {
                index = 0;
            }
            else {
                index++;
            }
            this.keysArray.push(this.CIRCLE_OF_FIFTHS[index]);
        }
    };
    RandomKeysGeneratorComponent.prototype.generateKeysFourths = function () {
        var index = Math.floor((Math.random() * this.CIRCLE_OF_FIFTHS.length));
        this.keysArray.push(this.CIRCLE_OF_FIFTHS[index]);
        while (this.keysArray.length < this.numberOfKeys) {
            if ((index - 1) < 0) {
                index = (this.CIRCLE_OF_FIFTHS.length - 1);
            }
            else {
                index--;
            }
            this.keysArray.push(this.CIRCLE_OF_FIFTHS[index]);
        }
    };
    RandomKeysGeneratorComponent.prototype.generateKeysBlues = function () {
        var index = Math.floor((Math.random() * this.CHROMATIC_SCALE.length));
        this.keysArray.push(this.CHROMATIC_SCALE[index]);
        index += 5;
        if (index >= this.CHROMATIC_SCALE.length) {
            index -= this.CHROMATIC_SCALE.length;
        }
        this.keysArray.push(this.CHROMATIC_SCALE[index]);
        index += 2;
        if (index >= this.CHROMATIC_SCALE.length) {
            index -= this.CHROMATIC_SCALE.length;
        }
        this.keysArray.push(this.CHROMATIC_SCALE[index]);
    };
    RandomKeysGeneratorComponent.prototype.generateRandomKeys = function () {
        var firstKeyIndex = Math.floor((Math.random() * this.LIST_KEYS.length));
        var secondKeyIndex = firstKeyIndex;
        var forbiddenKeys = this.forbidAdyacentKeysToIndex(firstKeyIndex);
        while (forbiddenKeys.includes(secondKeyIndex)) {
            secondKeyIndex = Math.floor((Math.random() * this.LIST_KEYS.length));
        }
        forbiddenKeys = forbiddenKeys.concat(this.forbidAdyacentKeysToIndex(secondKeyIndex));
        var thirdKeyIndex = secondKeyIndex;
        while (forbiddenKeys.includes(thirdKeyIndex)) {
            thirdKeyIndex = Math.floor((Math.random() * this.LIST_KEYS.length));
        }
        this.keysArray = [this.addAlterationsToNote(this.LIST_KEYS[firstKeyIndex]),
            this.addAlterationsToNote(this.LIST_KEYS[secondKeyIndex]),
            this.addAlterationsToNote(this.LIST_KEYS[thirdKeyIndex])];
    };
    RandomKeysGeneratorComponent.prototype.forbidAdyacentKeysToIndex = function (chosenIndex) {
        // Forbidden keys will be the generated key and the keys adyacent to the firstKey generated
        var forbiddenKeys = [chosenIndex];
        // Forbid the key before the one that was generated
        if (chosenIndex === 0) {
            forbiddenKeys.push(this.LIST_KEYS.length - 1);
        }
        else {
            forbiddenKeys.push(chosenIndex - 1);
        }
        // Forbid the key after the one that was generated
        if (chosenIndex + 1 === this.LIST_KEYS.length) {
            forbiddenKeys.push(0);
        }
        else {
            forbiddenKeys.push(chosenIndex + 1);
        }
        return forbiddenKeys;
    };
    RandomKeysGeneratorComponent.prototype.addAlterationsToNote = function (chosenNote) {
        var randomNumber = Math.floor((Math.random() * 100)); // Number between 0 and 100
        if (!this.useSharpsAndFlats) {
            return chosenNote;
        }
        if (randomNumber <= 20 && !this.FORBIDDEN_FLATS_IN_NOTES.includes(chosenNote)) {
            return chosenNote + "b";
        }
        else if (randomNumber >= 80 && !this.FORBIDDEN_SHARPS_IN_NOTES.includes(chosenNote)) {
            return chosenNote + "#";
        }
        return chosenNote;
    };
    return RandomKeysGeneratorComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], RandomKeysGeneratorComponent.prototype, "specialProgression", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], RandomKeysGeneratorComponent.prototype, "useSharpsAndFlats", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], RandomKeysGeneratorComponent.prototype, "numberOfKeys", void 0);
RandomKeysGeneratorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'random-keys-generator',
        template: __webpack_require__("../../../../../src/app/components/random-keys-generator/random-keys-generator.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/random-keys-generator/random-keys-generator.component.css")]
    })
], RandomKeysGeneratorComponent);

//# sourceMappingURL=random-keys-generator.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/routine-displayer/routine-displayer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".routineDisplayer {\r\n    padding-left: 1em;\r\n    padding-right: 1em;\r\n}\r\n\r\n.totalProgress {\r\n    text-align: right;\r\n    width: 100%;\r\n}\r\n\r\n.totalCard {\r\n    background-color: #ECECEA;\r\n}\r\n\r\n.totalResult {\r\n    margin-right: 1em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/routine-displayer/routine-displayer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"routineDisplayer padding-top-m\">\r\n    <ng-template ngFor let-iTask [ngForOf]=\"listTasks\" let-taskIndex=\"index\">\r\n        <div class=\"padding-bottom-s\">\r\n            <task [task]=\"iTask\" (progressUpdated)=\"recalculateTotalProgress($event)\"></task>\r\n        </div>\r\n    </ng-template>\r\n    <div class=\"totalProgress padding-top-m\">\r\n        <md-card class=\"totalCard\">\r\n            <div class=\"totalResult padding-top-s\">\r\n                <b>TOTAL TO DO: {{totalMinsToStudy}} min</b>\r\n            </div>\r\n            <div class=\"totalResult padding-bottom-s\">\r\n                <b>PROGRESS DONE: {{roundedProgressInMin}} min {{progressInPercentage}} %</b>\r\n            </div>\r\n        </md-card>\r\n    </div>\r\n    <div class=\"resetProgress padding-top-s padding-bottom-s\">\r\n        <button md-raised-button (click)=\"resetTodayTasks()\">Reset today tasks</button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/routine-displayer/routine-displayer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutineDisplayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/**
TO-DO LIST:

1) Protect with password: https://www.npmjs.com/package/auth-static
0) Hover on buttons
6) Deploy to heroku
7) Reporting:
    http://www.chartjs.org/samples/latest/
    http://gionkunz.github.io/chartist-js/examples.html
    https://d3js.org/

**/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoutineDisplayerComponent = (function () {
    function RoutineDisplayerComponent(apiService) {
        this.apiService = apiService;
        this.progressInMin = 0;
        this.listTasks = [];
        this.roundedProgressInMin = 0; // Total progress in minutes, sum of all routines
        this.progressInPercentage = 0;
        this.totalMinsToStudy = 0;
    }
    RoutineDisplayerComponent.prototype.ngOnInit = function () {
        this.getTodayTasks();
    };
    RoutineDisplayerComponent.prototype.resetTodayTasks = function () {
        var _this = this;
        if (confirm('Are you sure that you want to delete all your tasks of today?')) {
            this.progressInPercentage = 0;
            this.progressInMin = 0;
            this.apiService.deleteTodayTasks().then(function () {
                _this.getTodayTasks();
            }).catch(function (error) {
                // TODO handle error
                console.log(error);
            });
        }
    };
    RoutineDisplayerComponent.prototype.getTodayTasks = function () {
        var _this = this;
        this.apiService.getTodayTasks().then(function (todayTasks) {
            _this.listTasks = todayTasks;
            _this.totalMinsToStudy = _this.listTasks.map(function (iRoutine) {
                if (iRoutine.timeSpent && iRoutine.timeSpent > 0) {
                    _this.progressInMin += iRoutine.timeSpent;
                }
                return iRoutine.duration;
            }).reduce(function (accumulator, currentVal) { return accumulator + currentVal; });
            _this.recalculateTotalProgress(0);
        }).catch(function (error) {
            // TODO handle error
            console.log(error);
        });
    };
    RoutineDisplayerComponent.prototype.recalculateTotalProgress = function (newProgress) {
        this.progressInMin += newProgress;
        this.roundedProgressInMin = Number(this.progressInMin.toFixed(2));
        if (this.progressInMin !== 0) {
            this.progressInPercentage = (this.progressInMin / this.totalMinsToStudy) * 100;
            this.progressInPercentage = Number(this.progressInPercentage.toFixed(2));
        }
    };
    return RoutineDisplayerComponent;
}());
RoutineDisplayerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'routine-displayer',
        template: __webpack_require__("../../../../../src/app/components/routine-displayer/routine-displayer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/routine-displayer/routine-displayer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _a || Object])
], RoutineDisplayerComponent);

var _a;
//# sourceMappingURL=routine-displayer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/routine-item-creator/routine-item-creator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".routineItemCard {\r\n    display: inline-block;\r\n}\r\n\r\n.orderInput {\r\n    margin-left: 25%;\r\n    margin-right: 25%;\r\n}\r\n\r\n.topInput {\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    width: 100%;\r\n}\r\n\r\n.nameInput {\r\n    width: 80%;\r\n    padding-left: 5%;\r\n}\r\n\r\n.durationInput {\r\n    width: 20%;\r\n    padding-left: 5%;\r\n    padding-right: 5%;\r\n}\r\n\r\n.descriptionField {\r\n    width: 100%;\r\n    padding-left: 5%;\r\n    padding-right: 5%;\r\n}\r\n\r\n.nameField {\r\n    width: 100%;\r\n}\r\n\r\n.durationField {\r\n    width: 100%;\r\n}\r\n\r\n.addTagButton {\r\n    padding-left: 10px;\r\n}\r\n\r\n.lastPosition {\r\n    display: -ms-inline-grid;\r\n    display: inline-grid;\r\n    padding: 10px;\r\n}\r\n\r\n.tagNameDiv {\r\n    width: 50%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/routine-item-creator/routine-item-creator.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"rotineItemCard\">\r\n    <md-card-header>\r\n    </md-card-header>\r\n    <md-card-content>\r\n        <md-grid-list cols=\"10\" rowHeight=\"80\">\r\n            <md-grid-tile [colspan]=\"1\" [rowspan]=\"4\" [style.background]=\"'lightblue'\">\r\n                <md-form-field class=\"orderInput\">\r\n                    <input mdInput type=\"number\" placeholder=\"#\" required [(ngModel)]=\"routineItem.order\">\r\n                </md-form-field>\r\n            </md-grid-tile>\r\n            <md-grid-tile [colspan]=\"7\" [rowspan]=\"1\" [style.background]=\"'lightgreen'\">\r\n                <div class=\"topInput\">\r\n                    <div class=\"nameInput\">\r\n                        <md-form-field class=\"nameField\">\r\n                            <input mdInput placeholder=\"Name\" required [(ngModel)]=\"routineItem.name\">\r\n                        </md-form-field>\r\n                    </div>\r\n\r\n                    <div class=\"durationInput\">\r\n                        <md-form-field class=\"durationField\">\r\n                            <input mdInput type=\"number\" placeholder=\"Duration\" required [(ngModel)]=\"routineItem.duration\">\r\n                        </md-form-field>\r\n                    </div>\r\n                </div>\r\n            </md-grid-tile>\r\n            <md-grid-tile [colspan]=\"2\" [rowspan]=\"4\" [style.background]=\"'lightblue'\">\r\n                <div class=\"centerDiv\">\r\n                    <div class=\"lastPosition\">\r\n                        <md-checkbox [(ngModel)]=\"routineItem.active\">Active?</md-checkbox>\r\n                    </div>\r\n                    <div class=\"lastPosition\">\r\n                        <button md-raised-button color=\"primary\" [disabled]=\"!routineItem.name || routineItem.name === '' || !routineItem.duration || routineItem.duration === 0 || !routineItem.order || routineItem.order === 0\" (click)=\"saveRoutineItem()\">\r\n                            Save\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"lastPosition\" *ngIf=\"isNew === false\">\r\n                        <button md-raised-button color=\"warn\" (click)=\"deleteRoutineItem()\">\r\n                            Delete\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </md-grid-tile>\r\n            <md-grid-tile [colspan]=\"7\" [rowspan]=\"1\" [style.background]=\"'lightgreen'\">\r\n                <md-form-field class=\"descriptionField\">\r\n                    <input mdInput placeholder=\"Description\" [(ngModel)]=\"routineItem.description\">\r\n                </md-form-field>\r\n            </md-grid-tile>\r\n            <md-grid-tile [colspan]=\"7\" [rowspan]=\"1\" [style.background]=\"'lightpink'\">\r\n                <div>\r\n                    <md-form-field class=\"tagNameDiv\">\r\n                        <input mdInput placeholder=\"Tag Name\" required [(ngModel)]=\"tagItem.tagName\" maxlength=\"15\">\r\n                    </md-form-field>\r\n                    <md-select placeholder=\"Tag Color\" [(ngModel)]=\"tagItem.tagColor\" name=\"TagColor\">\r\n                        <md-option *ngFor=\"let color of TAG_COLORS\" [value]=\"color\">\r\n                          {{color}}\r\n                        </md-option>\r\n                    </md-select>\r\n                </div>\r\n                <div class=\"addTagButton\">\r\n                    <button md-button (click)=\"addTagItem()\" [disabled]=\"!tagItem.tagName || tagItem.tagName === '' || !tagItem.tagColor\">\r\n                        Add Tag\r\n                    </button>\r\n                </div>\r\n            </md-grid-tile>\r\n            <md-grid-tile [colspan]=\"7\" [rowspan]=\"1\" [style.background]=\"'lightpink'\">\r\n                <md-chip-list>\r\n                    <ng-template ngFor let-iTag [ngForOf]=\"routineItem.tags\" let-tagIndex=\"index\">\r\n                        <tag [tagItem]=\"iTag\"></tag>\r\n                    </ng-template>\r\n                </md-chip-list>\r\n            </md-grid-tile>\r\n        </md-grid-list>\r\n    </md-card-content>\r\n</md-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/routine-item-creator/routine-item-creator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutineItemCreatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_check_types__ = __webpack_require__("../../../../check-types/src/check-types.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_check_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_check_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_routineItemModel_interface__ = __webpack_require__("../../../../../src/app/interfaces/routineItemModel.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_routineItemModel_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__interfaces_routineItemModel_interface__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoutineItemCreatorComponent = (function () {
    function RoutineItemCreatorComponent(apiService) {
        this.apiService = apiService;
        this.TAG_COLORS = ['none', 'primary', 'accent', 'warn'];
        this.routineItemCreated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.routineItemUpdated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.routineItemDeleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.isNew = true;
        this.initTagItem();
    }
    RoutineItemCreatorComponent.prototype.ngOnInit = function () {
        this.initRoutineItem();
    };
    RoutineItemCreatorComponent.prototype.initRoutineItem = function () {
        if (__WEBPACK_IMPORTED_MODULE_1_check_types___default.a.assigned(this.routineItem) && __WEBPACK_IMPORTED_MODULE_1_check_types___default.a.nonEmptyObject(this.routineItem) &&
            __WEBPACK_IMPORTED_MODULE_1_check_types___default.a.assigned(this.routineItem._id) && __WEBPACK_IMPORTED_MODULE_1_check_types___default.a.nonEmptyString(this.routineItem._id)) {
            this.isNew = false;
            if (__WEBPACK_IMPORTED_MODULE_1_check_types___default.a.assigned(this.routineItem.tags) && __WEBPACK_IMPORTED_MODULE_1_check_types___default.a.nonEmptyArray(this.routineItem.tags)) {
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
    };
    RoutineItemCreatorComponent.prototype.saveRoutineItem = function () {
        if (this.isNew === true) {
            this.createRoutineItem();
        }
        else {
            this.updateRoutineItem();
        }
    };
    RoutineItemCreatorComponent.prototype.tagsSort = function (a, b) {
        if (a.tagName < b.tagName) {
            return -1;
        }
        if (a.tagName > b.tagName) {
            return 1;
        }
        return 0;
    };
    RoutineItemCreatorComponent.prototype.initTagItem = function () {
        this.tagItem = {
            tagName: '',
            tagColor: 'grey'
        };
    };
    RoutineItemCreatorComponent.prototype.addTagItem = function () {
        if (__WEBPACK_IMPORTED_MODULE_1_check_types___default.a.not.assigned(this.routineItem.tags) || __WEBPACK_IMPORTED_MODULE_1_check_types___default.a.not.array(this.routineItem.tags) ||
            __WEBPACK_IMPORTED_MODULE_1_check_types___default.a.emptyArray(this.routineItem.tags)) {
            this.routineItem.tags = [Object.assign({}, this.tagItem)];
            this.initTagItem();
        }
        else {
            this.routineItem.tags.push(Object.assign({}, this.tagItem));
            this.initTagItem();
        }
    };
    RoutineItemCreatorComponent.prototype.deleteRoutineItem = function () {
        if (__WEBPACK_IMPORTED_MODULE_1_check_types___default.a.assigned(this.routineItem._id)) {
            this.apiService.deleteRoutineItem(this.routineItem._id);
            this.routineItemDeleted.emit(this.routineItem);
        }
        return;
    };
    RoutineItemCreatorComponent.prototype.createRoutineItem = function () {
        var _this = this;
        this.apiService.createRoutineItem(this.routineItem).then(function (newDoc) {
            _this.routineItem = newDoc;
            _this.routineItemCreated.emit(newDoc);
            _this.isNew = false;
        }).catch(function (error) {
            // TODO handle error
            console.log(error);
        });
    };
    RoutineItemCreatorComponent.prototype.updateRoutineItem = function () {
        var _this = this;
        this.apiService.updateRoutineItem(this.routineItem._id, this.routineItem).then(function (updateResult) {
            _this.routineItemUpdated.emit(_this.routineItem);
        }).catch(function (error) {
            // TODO handle error
            console.log(error);
        });
    };
    return RoutineItemCreatorComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], RoutineItemCreatorComponent.prototype, "routineItemCreated", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], RoutineItemCreatorComponent.prototype, "routineItemUpdated", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], RoutineItemCreatorComponent.prototype, "routineItemDeleted", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__interfaces_routineItemModel_interface__["IRoutineItemModel"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__interfaces_routineItemModel_interface__["IRoutineItemModel"]) === "function" && _a || Object)
], RoutineItemCreatorComponent.prototype, "routineItem", void 0);
RoutineItemCreatorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'routine-item-creator',
        template: __webpack_require__("../../../../../src/app/components/routine-item-creator/routine-item-creator.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/routine-item-creator/routine-item-creator.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _b || Object])
], RoutineItemCreatorComponent);

var _a, _b;
//# sourceMappingURL=routine-item-creator.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/routine-manager/routine-manager.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".routineItemBox {\r\n    padding-bottom: 20px;\r\n    display: inline-block;\r\n}\r\n\r\n.routineManager {\r\n    padding-top: 40px;\r\n    text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/routine-manager/routine-manager.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"routineManager\" *ngIf=\"routineItems\">\r\n    <ng-template ngFor let-iRoutineItem [ngForOf]=\"routineItems\" let-routineItemIndex=\"index\">\r\n        <div class=\"routineItemBox\">\r\n            <routine-item-creator [routineItem]=\"iRoutineItem\" (routineItemDeleted)=\"getAllRoutineItems()\" (routineItemCreated)=\"getAllRoutineItems()\" (routineItemUpdated)=\"getAllRoutineItems()\"></routine-item-creator>\r\n        </div>\r\n    </ng-template>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/routine-manager/routine-manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutineManagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoutineManagerComponent = (function () {
    function RoutineManagerComponent(apiService) {
        this.apiService = apiService;
    }
    RoutineManagerComponent.prototype.ngOnInit = function () {
        this.getAllRoutineItems();
    };
    RoutineManagerComponent.prototype.getAllRoutineItems = function () {
        var _this = this;
        this.apiService.getRoutineItems({ '_id': { '$ne': null } }).then(function (docs) {
            _this.routineItems = docs;
            var listOrders = _this.routineItems.map(function (iDoc) {
                return iDoc.order;
            });
            var nextOrder = listOrders ? (Math.max.apply(Math, listOrders) + 1) : 1;
            _this.routineItems.push({
                order: nextOrder,
                name: '',
                duration: 0,
                active: false,
                description: '',
                tags: []
            });
        }).catch(function (error) {
            // TODO handle error
            console.log(error);
        });
    };
    return RoutineManagerComponent;
}());
RoutineManagerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'routine-manager',
        template: __webpack_require__("../../../../../src/app/components/routine-manager/routine-manager.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/routine-manager/routine-manager.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _a || Object])
], RoutineManagerComponent);

var _a;
//# sourceMappingURL=routine-manager.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/tag/tag.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tag {\r\n    display: block;\r\n    padding-left: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tag/tag.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tag\">\r\n    <md-chip [color]=\"tagItem.tagColor\" selected=\"true\">\r\n        {{tagItem.tagName}}\r\n    </md-chip>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/tag/tag.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_tagModel_interface__ = __webpack_require__("../../../../../src/app/interfaces/tagModel.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_tagModel_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__interfaces_tagModel_interface__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TagComponent = (function () {
    function TagComponent() {
        this.deleteTag = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.canDeleteTag = false;
    }
    return TagComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], TagComponent.prototype, "deleteTag", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__interfaces_tagModel_interface__["ITagModel"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__interfaces_tagModel_interface__["ITagModel"]) === "function" && _a || Object)
], TagComponent.prototype, "tagItem", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], TagComponent.prototype, "canDeleteTag", void 0);
TagComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'tag',
        template: __webpack_require__("../../../../../src/app/components/tag/tag.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/tag/tag.component.css")]
    })
], TagComponent);

var _a;
//# sourceMappingURL=tag.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/task/task.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host :hover {\r\n    background-color: aliceblue;\r\n}\r\n\r\n.taskItem {\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    width: 100%;\r\n}\r\n\r\n.taskItem > div {\r\n    padding: 10px;\r\n    padding: 10px;\r\n}\r\n\r\n.taskOrder {\r\n    width: 5%;\r\n    text-align: center;\r\n}\r\n\r\n.taskName {\r\n    width: 80%;\r\n}\r\n\r\n.taskDescription {\r\n    width: 80%;\r\n}\r\n\r\n.taskDuration {\r\n}\r\n\r\n.taskActions {\r\n    width: 15%;\r\n    text-align: center;\r\n    margin-right: 1em;\r\n}\r\n\r\n.startTaskButton {\r\n    z-index: 1000;\r\n}\r\n\r\n.stopTaskButton {\r\n    z-index: 1000;\r\n}\r\n\r\n.taskProgress {\r\n    width: 10%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/task/task.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"taskItem\">\r\n    <div class=\"taskOrder font-size-l\">\r\n        <b>#{{task.order}}</b>\r\n    </div>\r\n\r\n    <div class=\"taskName\" (click)=\"showDescription = !showDescription\">\r\n        <div *ngIf=\"showDescription === false\">\r\n            <b>{{task.name}}</b>\r\n        </div>\r\n        <div *ngIf=\"showDescription === true\">\r\n            {{task.description}}\r\n        </div>\r\n        <div class=\"padding-top-m\">\r\n            <md-chip-list>\r\n                <ng-template ngFor let-iTag [ngForOf]=\"task.tags\" let-tagIndex=\"index\">\r\n                    <tag [tagItem]=\"iTag\"></tag>\r\n                </ng-template>\r\n            </md-chip-list>\r\n        </div>\r\n        <div class=\"padding-top-m\">\r\n            <md-progress-bar\r\n              color=\"primary\"\r\n              mode=\"determinate\"\r\n              [value]=\"percentageProgress\"\r\n              bufferValue=\"100\"></md-progress-bar>\r\n            <div>\r\n                {{percentageProgress}} %\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"taskActions\">\r\n        <button md-fab color=\"primary\" (click)=\"startTask()\" class=\"startTaskButton\" *ngIf=\"!startTime\">START</button>\r\n        <button md-fab color=\"warn\" (click)=\"stopTask()\" class=\"stopTaskButton\" *ngIf=\"startTime\">STOP!</button>\r\n        <div class=\"padding-top-s\">\r\n            To do {{task.duration}} min\r\n        </div>\r\n        <div class=\"padding-top-s\">\r\n            Done {{roundedTotalDuration}} min\r\n        </div>\r\n    </div>\r\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/components/task/task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_taskModel_interface__ = __webpack_require__("../../../../../src/app/interfaces/taskModel.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_taskModel_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__interfaces_taskModel_interface__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskComponent = (function () {
    function TaskComponent(apiService) {
        this.apiService = apiService;
        this.totalDuration = 0; // Total duration in minutes, high precision decimal
        this.roundedTotalDuration = 0;
        this.percentageProgress = 0;
        this.deltaDuration = 0; // In case it gets reactivated
        this.showDescription = false;
        this.progressUpdated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    TaskComponent.prototype.ngOnInit = function () {
        if (this.task.timeSpent && this.task.timeSpent > 0) {
            this.totalDuration = this.task.timeSpent;
            this.roundedTotalDuration = this.task.timeSpent;
            this.recalculatePercentage();
        }
    };
    TaskComponent.prototype.startTask = function () {
        var _this = this;
        this.startTime = new Date();
        this.endTime = null;
        this.deltaDuration = 0;
        var timer = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].timer(1000, 1000);
        this.subscription = timer.subscribe(function (t) { _this.recalculateProgress(); });
    };
    TaskComponent.prototype.stopTask = function () {
        this.recalculateProgress();
        this.startTime = null;
        this.subscription.unsubscribe();
    };
    TaskComponent.prototype.recalculateProgress = function () {
        this.recalculateDuration();
        this.recalculatePercentage();
        this.apiService.updateTask(this.task._id, { timeSpent: this.roundedTotalDuration, percentageCompleted: this.percentageProgress });
    };
    TaskComponent.prototype.recalculateDuration = function () {
        var progressWindow = (((new Date().getTime() - this.startTime.getTime()) / 1000) / 60) - this.deltaDuration;
        this.deltaDuration += progressWindow;
        this.totalDuration += progressWindow;
        this.roundedTotalDuration = Number(this.totalDuration.toFixed(2));
        this.progressUpdated.emit(progressWindow);
    };
    TaskComponent.prototype.recalculatePercentage = function () {
        if (this.totalDuration === 0) {
            this.percentageProgress = 0;
            return;
        }
        this.percentageProgress = (this.totalDuration * 100) / this.task.duration;
        this.percentageProgress = Number(this.percentageProgress.toFixed(2));
    };
    return TaskComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__interfaces_taskModel_interface__["ITaskModel"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__interfaces_taskModel_interface__["ITaskModel"]) === "function" && _a || Object)
], TaskComponent.prototype, "task", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], TaskComponent.prototype, "progressUpdated", void 0);
TaskComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'task',
        template: __webpack_require__("../../../../../src/app/components/task/task.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/task/task.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _b || Object])
], TaskComponent);

var _a, _b;
//# sourceMappingURL=task.component.js.map

/***/ }),

/***/ "../../../../../src/app/interfaces/routineItemModel.interface.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=routineItemModel.interface.js.map

/***/ }),

/***/ "../../../../../src/app/interfaces/tagModel.interface.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=tagModel.interface.js.map

/***/ }),

/***/ "../../../../../src/app/interfaces/taskModel.interface.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=taskModel.interface.js.map

/***/ }),

/***/ "../../../../../src/app/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.API_URL = '/api';
    }
    ApiService.prototype.getTodayTasks = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var httpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
            var httpOptions = {
                headers: httpHeaders
            };
            _this.http.get(_this.API_URL + "/tasks/today", httpOptions).toPromise()
                .then(function (todayTasks) {
                resolve(todayTasks);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    ApiService.prototype.getTasks = function (findBody) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var httpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
            var httpOptions = {
                headers: httpHeaders
            };
            _this.http.post(_this.API_URL + "/task/find", findBody, httpOptions).toPromise()
                .then(function (taskDocuments) {
                resolve(taskDocuments);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    ApiService.prototype.deleteTodayTasks = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var httpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
            var httpOptions = {
                headers: httpHeaders
            };
            _this.http.delete(_this.API_URL + "/tasks/today", httpOptions).toPromise()
                .then(function () {
                resolve();
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    ApiService.prototype.updateTask = function (docId, bodyToUpdate) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var httpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
            var httpOptions = {
                headers: httpHeaders
            };
            var bodyCopy = Object.assign({}, bodyToUpdate);
            delete bodyCopy.__v;
            delete bodyCopy._id;
            _this.http.put(_this.API_URL + "/task/" + docId, bodyCopy, httpOptions).toPromise()
                .then(function (result) {
                resolve(result);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    ApiService.prototype.createRoutineItem = function (bodyToCreate) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var httpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
            var httpOptions = {
                headers: httpHeaders
            };
            var bodyCopy = Object.assign({}, bodyToCreate);
            delete bodyCopy.__v;
            delete bodyCopy._id;
            _this.http.post(_this.API_URL + "/routine-item", bodyCopy, httpOptions).toPromise()
                .then(function (result) {
                resolve(result);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    ApiService.prototype.deleteRoutineItem = function (docId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var httpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
            var httpOptions = {
                headers: httpHeaders
            };
            _this.http.delete(_this.API_URL + "/routine-item/" + docId, httpOptions).toPromise()
                .then(function (result) {
                resolve();
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    ApiService.prototype.getActiveRoutineItems = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var httpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
            var httpOptions = {
                headers: httpHeaders
            };
            _this.http.get(_this.API_URL + "/active-routine-items", httpOptions).toPromise()
                .then(function (activeRoutineItems) {
                resolve(activeRoutineItems);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    ApiService.prototype.getRoutineItems = function (findBody) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var httpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
            var httpOptions = {
                headers: httpHeaders
            };
            _this.http.post(_this.API_URL + "/routine-item/find", findBody, httpOptions).toPromise()
                .then(function (routineItems) {
                resolve(routineItems);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    ApiService.prototype.updateRoutineItem = function (docId, bodyToUpdate) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var httpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
            var httpOptions = {
                headers: httpHeaders
            };
            var bodyCopy = Object.assign({}, bodyToUpdate);
            delete bodyCopy.__v;
            delete bodyCopy._id;
            _this.http.put(_this.API_URL + "/routine-item/" + docId, bodyCopy, httpOptions).toPromise()
                .then(function (result) {
                resolve(result);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    return ApiService;
}());
ApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], ApiService);

var _a;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/services.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ServicesModule = (function () {
    function ServicesModule() {
    }
    return ServicesModule;
}());
ServicesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        providers: [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]]
    })
], ServicesModule);

//# sourceMappingURL=services.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map