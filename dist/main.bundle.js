webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatChipsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatTabsModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatChipsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatTabsModule */]]
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    Guitar Routine\r\n  </h1>\r\n</div>\r\n\r\n<mat-tab-group>\r\n    <mat-tab label=\"Today's Tasks\">\r\n        <routine-displayer class=\"padding-bottom-m\"></routine-displayer>\r\n    </mat-tab>\r\n    <mat-tab label=\"Random Keys\">\r\n        <random-keys-generator useSharpsAndFlats=\"true\" class=\"padding-bottom-m\"></random-keys-generator>\r\n    </mat-tab>\r\n    <mat-tab label=\"Reading Trainer\">\r\n        <reading-trainer class=\"padding-bottom-m\"></reading-trainer>\r\n    </mat-tab>\r\n    <mat-tab label=\"Statistics\">\r\n        <progress-chart></progress-chart>\r\n    </mat-tab>\r\n    <mat-tab label=\"Configure Routine\">\r\n        <routine-manager class=\"padding-bottom-m\"></routine-manager>\r\n    </mat-tab>\r\n</mat-tab-group>\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reading_trainer_reading_trainer_component__ = __webpack_require__("../../../../../src/app/components/reading-trainer/reading-trainer.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_8__routine_item_creator_routine_item_creator_component__["a" /* RoutineItemCreatorComponent */], __WEBPACK_IMPORTED_MODULE_9__routine_manager_routine_manager_component__["a" /* RoutineManagerComponent */], __WEBPACK_IMPORTED_MODULE_10__tag_tag_component__["a" /* TagComponent */], __WEBPACK_IMPORTED_MODULE_12__reading_trainer_reading_trainer_component__["a" /* ReadingTrainerComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_11__progress_chart_progress_chart_component__["a" /* ProgressChartComponent */], __WEBPACK_IMPORTED_MODULE_5__random_keys_generator_random_keys_generator_component__["a" /* RandomKeysGeneratorComponent */], __WEBPACK_IMPORTED_MODULE_6__routine_displayer_routine_displayer_component__["a" /* RoutineDisplayerComponent */], __WEBPACK_IMPORTED_MODULE_7__task_task_component__["a" /* TaskComponent */],
            __WEBPACK_IMPORTED_MODULE_8__routine_item_creator_routine_item_creator_component__["a" /* RoutineItemCreatorComponent */], __WEBPACK_IMPORTED_MODULE_9__routine_manager_routine_manager_component__["a" /* RoutineManagerComponent */], __WEBPACK_IMPORTED_MODULE_10__tag_tag_component__["a" /* TagComponent */], __WEBPACK_IMPORTED_MODULE_12__reading_trainer_reading_trainer_component__["a" /* ReadingTrainerComponent */]]
    })
], ComponentModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/progress-chart/progress-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mainContainer {\r\n    text-align: center;\r\n}\r\n\r\n.chartContainer{\r\n    height: 25em !important;\r\n}\r\n\r\n.zui-table {\r\n    border: solid 1px #DDEEEE;\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n    font: normal 13px Arial, sans-serif;\r\n}\r\n.zui-table thead th {\r\n    background-color: #DDEFEF;\r\n    border: solid 1px #DDEEEE;\r\n    color: #336B6B;\r\n    padding: 10px;\r\n    text-align: left;\r\n    text-shadow: 1px 1px 1px #fff;\r\n}\r\n.zui-table tbody td {\r\n    border: solid 1px #DDEEEE;\r\n    color: #333;\r\n    padding: 10px;\r\n    text-shadow: 1px 1px 1px #fff;\r\n}\r\n.zui-table-zebra tbody tr:nth-child(odd) {\r\n    background-color: #fff;\r\n}\r\n.zui-table-zebra tbody tr:nth-child(even) {\r\n    background-color: #EEF7EE;\r\n}\r\n.zui-table-horizontal tbody td {\r\n    border-left: none;\r\n    border-right: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/progress-chart/progress-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mainContainer\">\r\n    <div class=\"padding-top-m\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"recalculate()\" class=\"margin-left-s\">REFRESH</button>\r\n    </div>\r\n\r\n    <div class=\"padding-top-l\">\r\n        <canvas #chartElement class=\"chartContainer\"></canvas>\r\n    </div>\r\n\r\n    <div class=\"center-table\">\r\n        <table class=\"padding-top-m zui-table zui-table-zebra zui-table-horizontal\">\r\n            <thead>\r\n                <tr>\r\n                    <th mat-sort-header=\"name\">Task Name</th>\r\n                    <th mat-sort-header=\"timeSpent\">Time spent (min)</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let iKey of listKeys\">\r\n                    <td>{{idToLabel[iKey]}}</td>\r\n                    <td>{{idToTotal[iKey]}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/progress-chart/progress-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_check_types__ = __webpack_require__("../../../../check-types/src/check-types.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_check_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_check_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
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
        this.SET_COLORS = ['#3f51b5', '#ff4081', '#f44336', '#009688', '#B2FF59', '#448AFF', '#FFD740', '#FFAB40', '#795548',
            '#B2FF59', '#AD1457', '#18FFFF', '#607D8B', '#E040FB', '#EEFF41', '#9E9D24', '#E91E63', '#4E342E'];
        this.allTasks = [];
        this.listDates = [];
        this.totalValues = [];
        this.arrayPositionOfDate = {};
        this.objectOfLineCharts = {};
        this.idToLabel = {}; // Key: routineItem, Value: name
        this.idToTotal = {};
        this.listKeys = [];
    }
    ProgressChartComponent.prototype.ngOnInit = function () {
        this.recalculate();
    };
    ProgressChartComponent.prototype.recalculate = function () {
        var _this = this;
        this.allTasks = [];
        this.listDates = [];
        this.totalValues = [];
        this.arrayPositionOfDate = {};
        this.objectOfLineCharts = {};
        this.idToLabel = {};
        this.idToTotal = {};
        this.listKeys = [];
        this.apiService.getTasks({ _id: { '$ne': null } }).then(function (allTaskResult) {
            _this.allTasks = allTaskResult.filter(function (iTask) {
                return __WEBPACK_IMPORTED_MODULE_1_check_types___default.a.assigned(iTask.taskDate) && __WEBPACK_IMPORTED_MODULE_1_check_types___default.a.assigned(iTask.timeSpent) && __WEBPACK_IMPORTED_MODULE_1_check_types___default.a.number(iTask.timeSpent) && iTask.timeSpent > 0;
            });
            var minTaskDate = new Date();
            _this.allTasks.forEach(function (iTask) {
                if (new Date(iTask.taskDate) < minTaskDate) {
                    minTaskDate = new Date(iTask.taskDate);
                }
            });
            _this.buildListDates(minTaskDate);
            _this.buildChart();
        }).catch(function (error) {
            // TODO handle error
            console.log(error);
        });
    };
    ProgressChartComponent.prototype.buildChart = function () {
        var _this = this;
        this.objectOfLineCharts = {};
        this.totalValues = this.initLineChart();
        this.allTasks.forEach(function (iTask) {
            var xValue = new Date(iTask.taskDate).toLocaleDateString();
            var indexPosition = _this.arrayPositionOfDate[xValue];
            _this.totalValues[indexPosition] = Math.ceil(_this.totalValues[indexPosition] + iTask.timeSpent);
            if (__WEBPACK_IMPORTED_MODULE_1_check_types___default.a.not.assigned(_this.objectOfLineCharts[iTask.routineItem])) {
                _this.objectOfLineCharts[iTask.routineItem] = _this.initLineChart();
            }
            if (__WEBPACK_IMPORTED_MODULE_1_check_types___default.a.not.includes(_this.listKeys, iTask.routineItem)) {
                _this.listKeys.push(iTask.routineItem);
                _this.idToTotal[iTask.routineItem] = 0;
            }
            _this.idToTotal[iTask.routineItem] = Math.ceil(_this.idToTotal[iTask.routineItem] + iTask.timeSpent);
            _this.idToLabel[iTask.routineItem] = iTask.name;
            _this.objectOfLineCharts[iTask.routineItem][indexPosition] = Math.ceil(_this.objectOfLineCharts[iTask.routineItem][indexPosition] + iTask.timeSpent);
        });
        var totalDataset = {
            label: 'TOTAL',
            data: this.totalValues
        };
        // Total values will be in a bar chart, the others will be in lines
        var lineDatasets = [];
        Object.keys(this.objectOfLineCharts).forEach(function (iLineKey, index) {
            var datasetLabel = _this.idToLabel[iLineKey];
            var datasetData = _this.objectOfLineCharts[iLineKey];
            lineDatasets.push({
                label: datasetLabel,
                data: datasetData,
                type: 'line',
                fill: false,
                borderColor: index < _this.SET_COLORS.length ? _this.SET_COLORS[index] : _this.SET_COLORS[0]
            });
        });
        var allDatasets = [totalDataset].concat(lineDatasets);
        // Start drawing of chart:
        var chartCtx = this.chartElement.nativeElement.getContext('2d');
        if (!this.chart) {
            this.chart = new __WEBPACK_IMPORTED_MODULE_2_chart_js___default.a(chartCtx, {
                type: 'bar',
                data: {
                    datasets: allDatasets,
                    labels: this.listDates
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: 'min'
                                }
                            }]
                    },
                    animation: {
                        duration: 100,
                        easing: 'linear'
                    }
                }
            });
        }
        else {
            this.chart.data.datasets = allDatasets;
            this.chart.data.labels = this.listDates;
            this.chart.update();
        }
    };
    ProgressChartComponent.prototype.buildListDates = function (startDate) {
        this.arrayPositionOfDate = {};
        this.listDates = [];
        var auxDate = startDate;
        var today = new Date();
        var index = 0;
        while (auxDate <= today) {
            this.listDates.push(auxDate.toLocaleDateString());
            this.arrayPositionOfDate[auxDate.toLocaleDateString()] = index;
            auxDate.setDate(auxDate.getDate() + 1);
            index++;
        }
        this.listDates.push(today.toLocaleDateString());
        this.arrayPositionOfDate[today.toLocaleDateString()] = index;
    };
    ProgressChartComponent.prototype.initLineChart = function () {
        var result = this.listDates.map(function (iDate) {
            return 0;
        });
        return result;
    };
    return ProgressChartComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('chartElement'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
], ProgressChartComponent.prototype, "chartElement", void 0);
ProgressChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'progress-chart',
        template: __webpack_require__("../../../../../src/app/components/progress-chart/progress-chart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/progress-chart/progress-chart.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */]) === "function" && _b || Object])
], ProgressChartComponent);

var _a, _b;
//# sourceMappingURL=progress-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/random-keys-generator/random-keys-generator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".keyCard {\r\n    font-size: 3em;\r\n}\r\n\r\n.keysDisplayer {\r\n    padding-right: 0.5em;\r\n    padding-left: 0.5em;\r\n}\r\n\r\n.ramdomKeysContainer {\r\n    text-align: center;\r\n}\r\n\r\n.randomSelection {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.selectOption {\r\n    width: 50%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/random-keys-generator/random-keys-generator.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ramdomKeysContainer padding-top-s padding-bottom-m\">\r\n    <h2 class=\"keysTitle\">\r\n        Generate Random Keys to Practice\r\n    </h2>\r\n\r\n    <div class=\"randomSelection\">\r\n            <mat-select placeholder=\"Type of progression\" [(ngModel)]=\"specialProgression\" name=\"ProgressionType\" (change)=\"generateKeys()\" class=\"selectOption\">\r\n                <mat-option *ngFor=\"let iOption of randomOptions\" [value]=\"iOption\">\r\n                  {{iOption}}\r\n                </mat-option>\r\n            </mat-select>\r\n            <button mat-raised-button color=\"primary\" (click)=\"generateKeys()\" class=\"generateButton margin-left-s\">GENERATE</button>\r\n    </div>\r\n\r\n    <div class=\"keysDisplayer padding-top-l padding-bottom-m\">\r\n        <mat-grid-list cols=\"1\" rowHeight=\"80\" size=\"60%\">\r\n            <ng-template ngFor let-iKey [ngForOf]=\"keysArray\" let-keyIndex=\"index\">\r\n                <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\" [style.background]=\"'lightblue'\">\r\n                    <span class=\"keyCard padding-top-s padding-bottom-s\">\r\n                        {{iKey}}\r\n                    </span>\r\n                </mat-grid-tile>\r\n            </ng-template>\r\n        </mat-grid-list>\r\n    </div>\r\n</div>"

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

/***/ "../../../../../src/app/components/reading-trainer/reading-trainer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/reading-trainer/reading-trainer.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h2>\r\n        Music Notation Trainer\r\n    </h2>\r\n\r\n    <div id=\"boo\" #notesContainer class=\"padding-left-s padding-right-s notes-container\"></div>\r\n\r\n    <div id=\"boo2\" #notesContainer2 class=\"padding-top-xl\"></div>\r\n\r\n    <div>\r\n        <button mat-raised-button color=\"primary\" (click)=\"recalculateNotes()\" class=\"margin-left-s\">GENERATE</button>\r\n\r\n        <mat-form-field>\r\n            <mat-select placeholder=\"Key\" ariaLabel=\"Key\" [(ngModel)]=\"keySignature\">\r\n                <mat-option *ngFor=\"let iKey of LIST_KEY_SIGNATURES\" [value]=\"iKey\">\r\n                  {{iKey}}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n            <mat-select placeholder=\"First Note\" ariaLabel=\"First Note\" [(ngModel)]=\"firstNote\">\r\n                <mat-option *ngFor=\"let iNote of LIST_NOTES_AVAILABLE\" [value]=\"iNote\">\r\n                  {{iNote}}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n            <mat-select placeholder=\"Lowest Note\" ariaLabel=\"Lowest Note\" [(ngModel)]=\"minNote\">\r\n                <mat-option *ngFor=\"let iNote of LIST_NOTES_AVAILABLE\" [value]=\"iNote\">\r\n                  {{iNote}}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n            <mat-select placeholder=\"Highest Note\" ariaLabel=\"Highest Note\" [(ngModel)]=\"maxNote\">\r\n                <mat-option *ngFor=\"let iNote of LIST_NOTES_AVAILABLE\" [value]=\"iNote\">\r\n                  {{iNote}}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-checkbox [(ngModel)]=\"canHaveSilences\">Silences?</mat-checkbox>\r\n\r\n        <mat-checkbox [(ngModel)]=\"trendOneAscending\">First Row Ascending</mat-checkbox>\r\n\r\n        <mat-checkbox [(ngModel)]=\"trendTwoAscending\">Second Row Ascending</mat-checkbox>\r\n\r\n        <mat-form-field>\r\n            <mat-select placeholder=\"Number of Notes\" ariaLabel=\"Number of Notes\" [(ngModel)]=\"numberOfNotes\">\r\n                <mat-option *ngFor=\"let iNote of POSSIBLE_NUMBER_OF_NOTES\" [value]=\"iNote\">\r\n                  {{iNote}}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n            <mat-select placeholder=\"Practice Options\" ariaLabel=\"Practice Options\" [(ngModel)]=\"practiceUpToValue\" (change)=\"calculateNextNoteCouldBe()\">\r\n                <mat-option *ngFor=\"let iOption of PRACTICE_OPTIONS\" [value]=\"iOption.value\">\r\n                  {{iOption.label}}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/reading-trainer/reading-trainer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadingTrainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vexflow__ = __webpack_require__("../../../../vexflow/releases/vexflow-debug.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vexflow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vexflow__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Añadir las opciones:
// Poder seleccionar la duración de la nota

var ReadingTrainerComponent = (function () {
    function ReadingTrainerComponent(rd) {
        this.rd = rd;
        this.LIST_KEY_SIGNATURES = ['A', 'A#', 'Bb', 'B', 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'G', 'G#', 'Ab'];
        this.LIST_NOTES_AVAILABLE = [
            'e/3', 'f/3', 'g/3', 'a/3', 'b/3',
            'c/4', 'd/4', 'e/4', 'f/4', 'g/4', 'a/4', 'b/4',
            'c/5', 'd/5', 'e/5', 'f/5', 'g/5', 'a/5', 'b/5',
            'c/6', 'd/6', 'e/6', 'f/6', 'g/6'
        ];
        this.POSSIBLE_NUMBER_OF_NOTES = [16, 24, 32, 40, 48];
        this.minNote = 'a/3';
        this.maxNote = 'c/6';
        this.firstNote = 'c/4';
        this.trendOneAscending = true;
        this.trendTwoAscending = false;
        this.keySignature = 'C';
        this.numberOfNotes = 48;
        this.canHaveSilences = true;
        this.nextNoteCouldBe = [
            0,
            1 /*, // Major 2nd
            2, // Major 3rd
/*
            3, // Perfect 4th
            4, // Perfect 5th
            5, // Major 6th
            6, // Major 7th
            7  // Octave
*/
        ];
        this.practiceUpToValue = 1;
        this.PRACTICE_OPTIONS = [
            { label: 'Major 2nd', value: 1 },
            { label: 'Major 3rd', value: 2 },
            { label: 'Perfect 4th', value: 3 },
            { label: 'Perfect 5th', value: 4 },
            { label: 'Major 6th', value: 5 },
            { label: 'Major 7th', value: 6 },
            { label: 'Octave', value: 7 }
        ];
        this.noteDurationCouldBe = [
            'h',
            'q',
            '8' // corchea
        ];
        this.noteSilenceCouldBe = [
            'hr',
            'qr',
            '8r' // silencio de corchea
        ];
    }
    ReadingTrainerComponent.prototype.ngAfterViewInit = function () {
        this.recalculateNotes();
    };
    ReadingTrainerComponent.prototype.recalculateNotes = function () {
        this.drawLine1();
        this.drawLine2();
    };
    ReadingTrainerComponent.prototype.calculateNextNoteCouldBe = function () {
        this.nextNoteCouldBe = [];
        for (var i = 0; i <= this.practiceUpToValue; i++) {
            this.nextNoteCouldBe.push(i);
        }
    };
    ReadingTrainerComponent.prototype.calculateNoteDuration = function () {
        var randomNumber = Math.floor((Math.random() * 100));
        if (this.canHaveSilences === true && randomNumber < 10) {
            return 'qr';
        }
        return 'q';
    };
    ReadingTrainerComponent.prototype.drawLine1 = function () {
        this.generateRandomNotes(this.firstNote, this.trendOneAscending);
        var div = this.el.nativeElement;
        div.innerHTML = '';
        var VF = __WEBPACK_IMPORTED_MODULE_1_vexflow__["Flow"];
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
        var width = window.screen.width - 80;
        // at least 25px per note:
        if (width < 25 * this.numberOfNotes) {
            width = 25 * this.numberOfNotes;
        }
        // Size our svg:
        renderer.resize(width, 200);
        // And get a drawing context:
        var context = renderer.getContext();
        // Create a stave at position 10, 40 of width 400 on the canvas.
        var stave = new VF.Stave(10, 40, width - 10).addKeySignature(this.keySignature);
        // Add a clef and time signature.
        stave.addClef('treble').addTimeSignature('4/4');
        // Connect it to the rendering context and draw!
        stave.setContext(context).draw();
        var notes = [];
        var numberRealNotes = 0;
        this.arrayOfNotes.forEach(function (iNote) {
            if (numberRealNotes > 0 && numberRealNotes % 4 === 0) {
                notes.push(new __WEBPACK_IMPORTED_MODULE_1_vexflow__["Flow"].BarNote());
            }
            notes.push(new VF.StaveNote({ keys: iNote.keys, duration: iNote.duration }));
            numberRealNotes++;
        });
        var beams = VF.Beam.generateBeams(notes);
        __WEBPACK_IMPORTED_MODULE_1_vexflow__["Flow"].Formatter.FormatAndDraw(context, stave, notes);
        beams.forEach(function (b) { b.setContext(context).draw(); });
    };
    ReadingTrainerComponent.prototype.drawLine2 = function () {
        var firstNote = this.arrayOfNotes[this.arrayOfNotes.length - 1]['keys'][0];
        this.generateRandomNotes(firstNote, this.trendTwoAscending);
        var div = this.el2.nativeElement;
        div.innerHTML = '';
        var VF = __WEBPACK_IMPORTED_MODULE_1_vexflow__["Flow"];
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
        var width = window.screen.width - 80;
        // at least 25px per note:
        if (width < 25 * this.numberOfNotes) {
            width = 25 * this.numberOfNotes;
        }
        // Size our svg:
        renderer.resize(width, 200);
        // And get a drawing context:
        var context = renderer.getContext();
        // Create a stave at position 10, 40 of width 400 on the canvas.
        var stave = new VF.Stave(10, 40, width - 10).addKeySignature(this.keySignature);
        // Add a clef and time signature.
        stave.addClef('treble').addTimeSignature('4/4');
        // Connect it to the rendering context and draw!
        stave.setContext(context).draw();
        var notes = [];
        var numberRealNotes = 0;
        this.arrayOfNotes.forEach(function (iNote) {
            if (numberRealNotes > 0 && numberRealNotes % 4 === 0) {
                notes.push(new __WEBPACK_IMPORTED_MODULE_1_vexflow__["Flow"].BarNote());
            }
            notes.push(new VF.StaveNote({ keys: iNote.keys, duration: iNote.duration }));
            numberRealNotes++;
        });
        var beams = VF.Beam.generateBeams(notes);
        __WEBPACK_IMPORTED_MODULE_1_vexflow__["Flow"].Formatter.FormatAndDraw(context, stave, notes);
        beams.forEach(function (b) { b.setContext(context).draw(); });
    };
    ReadingTrainerComponent.prototype.generateRandomNotes = function (firstNote, ascending) {
        this.recalculateIndexesForNotes();
        this.arrayOfNotes = [];
        this.arrayOfNotes.push({ keys: [firstNote], duration: 'q' });
        var index = 0;
        // Find the note position in the LIST_NOTES_AVAILABLE
        while (this.LIST_NOTES_AVAILABLE[index] !== firstNote) {
            index++;
        }
        while (this.arrayOfNotes.length < this.numberOfNotes) {
            var duration = this.calculateNoteDuration();
            if (duration.endsWith('r')) {
                this.arrayOfNotes.push({ keys: ['b/4'], duration: duration });
            }
            else {
                // See how many numbers we have to add
                var numberToAddIndex = Math.floor((Math.random() * this.nextNoteCouldBe.length));
                var numberToAddValue = this.nextNoteCouldBe[numberToAddIndex];
                // To decrease the percentage of repetition of notes, if it takes the same note, recalculate it again
                if (numberToAddValue === 0) {
                    var randomNumber = Math.floor((Math.random() * 100));
                    if (randomNumber > 10) {
                        while (numberToAddValue === 0) {
                            numberToAddIndex = Math.floor((Math.random() * this.nextNoteCouldBe.length));
                            numberToAddValue = this.nextNoteCouldBe[numberToAddIndex];
                        }
                    }
                }
                // If it is impossible to add it, decrease it
                if ((index + numberToAddValue) >= this.LIST_NOTES_AVAILABLE.length) {
                    index = index - numberToAddValue;
                }
                else if ((index - numberToAddValue) < 0) {
                    index = index + numberToAddValue;
                }
                else {
                    var randomNumber = Math.floor((Math.random() * 100));
                    // random value. to force a trend, if bigger than 33, use the ascending or descending, if lower, move to back
                    if (randomNumber >= 33) {
                        if (ascending === true) {
                            index = index + numberToAddValue;
                        }
                        else {
                            index = index - numberToAddValue;
                        }
                    }
                    else {
                        if (ascending === true) {
                            index = index - numberToAddValue;
                        }
                        else {
                            index = index + numberToAddValue;
                        }
                    }
                }
                if (index < this.minIndexForNote) {
                    index = this.minIndexForNote;
                }
                else if (index > this.maxIndexForNote) {
                    index = this.maxIndexForNote;
                }
                var newNote = this.LIST_NOTES_AVAILABLE[index];
                this.arrayOfNotes.push({ keys: [newNote], duration: duration });
            }
        }
    };
    ReadingTrainerComponent.prototype.recalculateIndexesForNotes = function () {
        this.minIndexForNote = 0;
        while (this.LIST_NOTES_AVAILABLE[this.minIndexForNote] !== this.minNote) {
            this.minIndexForNote++;
        }
        this.maxIndexForNote = 0;
        while (this.LIST_NOTES_AVAILABLE[this.maxIndexForNote] !== this.maxNote) {
            this.maxIndexForNote++;
        }
    };
    return ReadingTrainerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('notesContainer'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
], ReadingTrainerComponent.prototype, "el", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('notesContainer2'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _b || Object)
], ReadingTrainerComponent.prototype, "el2", void 0);
ReadingTrainerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'reading-trainer',
        template: __webpack_require__("../../../../../src/app/components/reading-trainer/reading-trainer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/reading-trainer/reading-trainer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer2 */]) === "function" && _c || Object])
], ReadingTrainerComponent);

var _a, _b, _c;
//# sourceMappingURL=reading-trainer.component.js.map

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

module.exports = "<div class=\"routineDisplayer padding-top-m\">\r\n    <ng-template ngFor let-iTask [ngForOf]=\"listTasks\" let-taskIndex=\"index\">\r\n        <div class=\"padding-bottom-s\">\r\n            <task [task]=\"iTask\" (progressUpdated)=\"recalculateTotalProgress($event)\"></task>\r\n        </div>\r\n    </ng-template>\r\n    <div class=\"totalProgress padding-top-m\">\r\n        <mat-card class=\"totalCard\">\r\n            <div class=\"totalResult padding-top-s\">\r\n                <b>TOTAL TO DO: {{totalMinsToStudy}} min</b>\r\n            </div>\r\n            <div class=\"totalResult padding-bottom-s\">\r\n                <b>PROGRESS DONE: {{roundedProgressInMin}} min {{progressInPercentage}} %</b>\r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"resetProgress padding-top-s padding-bottom-s\">\r\n        <button mat-raised-button (click)=\"resetTodayTasks()\">Reset today tasks</button>\r\n    </div>\r\n</div>\r\n"

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
            if (_this.listTasks.length === 0) {
                return;
            }
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
exports.push([module.i, ".routineItemCard {\r\n    display: inline-block;\r\n}\r\n\r\n.orderInput {\r\n    width: 50px;\r\n}\r\n\r\n.topInput {\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    width: 100%;\r\n}\r\n\r\n.nameInput {\r\n    width: 80%;\r\n    padding-left: 5%;\r\n}\r\n\r\n.durationInput {\r\n    width: 20%;\r\n    padding-left: 5%;\r\n    padding-right: 5%;\r\n}\r\n\r\n.descriptionField {\r\n    width: 100%;\r\n    padding-left: 5%;\r\n    padding-right: 5%;\r\n}\r\n\r\n.nameField {\r\n    width: 100%;\r\n}\r\n\r\n.durationField {\r\n    width: 100%;\r\n}\r\n\r\n.addTagButton {\r\n    padding-left: 10px;\r\n}\r\n\r\n.lastPosition {\r\n    display: -ms-inline-grid;\r\n    display: inline-grid;\r\n    padding: 10px;\r\n}\r\n\r\n.tagNameDiv {\r\n    width: 50%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/routine-item-creator/routine-item-creator.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"rotineItemCard\">\r\n    <mat-card-header>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n        <mat-grid-list cols=\"11\" rowHeight=\"80\">\r\n            <mat-grid-tile [colspan]=\"2\" [rowspan]=\"4\" [style.background]=\"'lightblue'\">\r\n                <mat-form-field class=\"orderInput\">\r\n                    <input matInput type=\"number\" placeholder=\"#\" required [(ngModel)]=\"routineItem.order\">\r\n                </mat-form-field>\r\n            </mat-grid-tile>\r\n            <mat-grid-tile [colspan]=\"7\" [rowspan]=\"1\" [style.background]=\"'lightgreen'\">\r\n                <div class=\"topInput\">\r\n                    <div class=\"nameInput\">\r\n                        <mat-form-field class=\"nameField\">\r\n                            <input matInput placeholder=\"Name\" required [(ngModel)]=\"routineItem.name\">\r\n                        </mat-form-field>\r\n                    </div>\r\n\r\n                    <div class=\"durationInput\">\r\n                        <mat-form-field class=\"durationField\">\r\n                            <input matInput type=\"number\" placeholder=\"Duration\" required [(ngModel)]=\"routineItem.duration\">\r\n                        </mat-form-field>\r\n                    </div>\r\n                </div>\r\n            </mat-grid-tile>\r\n            <mat-grid-tile [colspan]=\"2\" [rowspan]=\"4\" [style.background]=\"'lightblue'\">\r\n                <div class=\"centerDiv\">\r\n                    <div class=\"lastPosition\">\r\n                        <mat-checkbox [(ngModel)]=\"routineItem.active\">Active?</mat-checkbox>\r\n                    </div>\r\n                    <div class=\"lastPosition\">\r\n                        <button mat-raised-button color=\"primary\" [disabled]=\"!routineItem.name || routineItem.name === '' || !routineItem.duration || routineItem.duration === 0 || !routineItem.order || routineItem.order === 0\" (click)=\"saveRoutineItem()\">\r\n                            Save\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"lastPosition\" *ngIf=\"isNew === false\">\r\n                        <button mat-raised-button color=\"warn\" (click)=\"deleteRoutineItem()\">\r\n                            Delete\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </mat-grid-tile>\r\n            <mat-grid-tile [colspan]=\"7\" [rowspan]=\"1\" [style.background]=\"'lightgreen'\">\r\n                <mat-form-field class=\"descriptionField\">\r\n                    <input matInput placeholder=\"Description\" [(ngModel)]=\"routineItem.description\">\r\n                </mat-form-field>\r\n            </mat-grid-tile>\r\n            <mat-grid-tile [colspan]=\"7\" [rowspan]=\"2\" [style.background]=\"'lightpink'\">\r\n                <div>\r\n                    <mat-form-field class=\"tagNameDiv\">\r\n                        <input matInput placeholder=\"Tag Name\" required [(ngModel)]=\"tagItem.tagName\" maxlength=\"15\">\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <mat-select placeholder=\"Tag Color\" [(ngModel)]=\"tagItem.tagColor\" name=\"TagColor\">\r\n                            <mat-option *ngFor=\"let color of TAG_COLORS\" [value]=\"color\">\r\n                              {{color}}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"addTagButton\">\r\n                    <button mat-button (click)=\"addTagItem()\" [disabled]=\"!tagItem.tagName || tagItem.tagName === '' || !tagItem.tagColor\">\r\n                        Add Tag\r\n                    </button>\r\n                </div>\r\n            </mat-grid-tile>\r\n            <mat-grid-tile [colspan]=\"11\" [rowspan]=\"1\" [style.background]=\"'lightpink'\">\r\n                <mat-chip-list>\r\n                    <ng-template ngFor let-iTag [ngForOf]=\"routineItem.tags\" let-tagIndex=\"index\">\r\n                        <tag [tagItem]=\"iTag\"></tag>\r\n                    </ng-template>\r\n                </mat-chip-list>\r\n            </mat-grid-tile>\r\n        </mat-grid-list>\r\n    </mat-card-content>\r\n</mat-card>\r\n"

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

module.exports = "<div class=\"tag\">\r\n    <mat-chip [color]=\"tagItem.tagColor\" selected=\"true\">\r\n        {{tagItem.tagName}}\r\n    </mat-chip>\r\n</div>"

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

module.exports = "<mat-card class=\"taskItem\">\r\n    <div class=\"taskOrder font-size-l\">\r\n        <b>#{{task.order}}</b>\r\n    </div>\r\n\r\n    <div class=\"taskName\" (click)=\"showDescription = !showDescription\">\r\n        <div *ngIf=\"showDescription === false\">\r\n            <b>{{task.name}}</b>\r\n        </div>\r\n        <div *ngIf=\"showDescription === true\">\r\n            {{task.description}}\r\n        </div>\r\n        <div class=\"padding-top-m\">\r\n            <mat-chip-list>\r\n                <ng-template ngFor let-iTag [ngForOf]=\"task.tags\" let-tagIndex=\"index\">\r\n                    <tag [tagItem]=\"iTag\"></tag>\r\n                </ng-template>\r\n            </mat-chip-list>\r\n        </div>\r\n        <div class=\"padding-top-m\">\r\n            <mat-progress-bar\r\n              color=\"primary\"\r\n              mode=\"determinate\"\r\n              [value]=\"percentageProgress\"\r\n              bufferValue=\"100\"></mat-progress-bar>\r\n            <div>\r\n                {{percentageProgress}} %\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"taskActions\">\r\n        <button mat-fab color=\"primary\" (click)=\"startTask()\" class=\"startTaskButton\" *ngIf=\"!startTime\">START</button>\r\n        <button mat-fab color=\"warn\" (click)=\"stopTask()\" class=\"stopTaskButton\" *ngIf=\"startTime\">STOP!</button>\r\n        <div class=\"padding-top-s\">\r\n            To do {{task.duration}} min\r\n        </div>\r\n        <div class=\"padding-top-s\">\r\n            Done {{roundedTotalDuration}} min\r\n        </div>\r\n    </div>\r\n</mat-card>"

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

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map