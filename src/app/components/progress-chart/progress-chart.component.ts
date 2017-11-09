import { NgModule, Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

import check from 'check-types';
import Chart from 'chart.js';

import { ApiService } from '../../services/api.service';

import { ITaskModel } from '../../interfaces/taskModel.interface';

@Component({
    selector: 'progress-chart',
    templateUrl: 'progress-chart.component.html',
    styleUrls: ['progress-chart.component.css']
})

export class ProgressChartComponent implements OnInit {
    @ViewChild('chartElement') chartElement: ElementRef;

    SET_COLORS = ['#3f51b5', '#ff4081', '#f44336', '#009688', '#448AFF', '#448AFF', '#FFD740', '#FFAB40', '#795548',
                        '#B2FF59', '#AD1457', '#18FFFF', '#607D8B', '#E040FB', '#EEFF41', '#9E9D24', '#E91E63', '#4E342E'];

    allTasks: Array<ITaskModel> = [];
    totalTasks: Array<ITaskModel> = [];
    mapRoutineIdToIndexInArray: any = {};
    listDates: Array<string> = [];
    totalValues: Array<number> = [];
    arrayPositionOfDate: any = {};
    objectOfLineCharts: any = {};
    idToLabel: any = {}; // Key: routineItem, Value: name
    chart: any;

    constructor(private apiService: ApiService) {}

    ngOnInit(): void {
        this.recalculate();
    }

    recalculate(): void {
        this.allTasks = [];
        this.totalTasks = [];
        this.mapRoutineIdToIndexInArray = {};
        this.listDates = [];
        this.totalValues = [];
        this.arrayPositionOfDate = {};
        this.objectOfLineCharts = {};
        this.idToLabel = {};

        this.apiService.getTasks({_id: {'$ne': null}}).then((allTaskResult: Array<ITaskModel>) => {
            this.allTasks = allTaskResult.filter((iTask) => {
                return check.assigned(iTask.taskDate) && check.assigned(iTask.timeSpent) && check.number(iTask.timeSpent) && iTask.timeSpent > 0;
            });
            let minTaskDate = new Date();
            this.allTasks.forEach((iTask) => {
                if (check.assigned(this.mapRoutineIdToIndexInArray[iTask.routineItem])) {
                    const indexOfRoutine = this.mapRoutineIdToIndexInArray[iTask.routineItem];
                    this.totalTasks[indexOfRoutine].timeSpent += iTask.timeSpent;
                } else {
                    this.mapRoutineIdToIndexInArray[iTask.routineItem] = this.totalTasks.length;
                    this.totalTasks.push(iTask);
                }

                if (check.assigned(iTask.taskDate) && new Date(iTask.taskDate) < minTaskDate) {
                    minTaskDate = new Date(iTask.taskDate);
                }
            });
            this.buildListDates(minTaskDate);
            this.buildChart();
        }).catch((error) => {
            // TODO handle error
            console.log(error);
        });
    }

    private buildChart(): void {
        this.objectOfLineCharts = {};
        this.totalValues = this.initLineChart();
        this.allTasks.forEach((iTask) => {
            const xValue = new Date(iTask.taskDate).toLocaleDateString();
            const indexPosition = this.arrayPositionOfDate[xValue];
            this.totalValues[indexPosition] = Math.ceil(this.totalValues[indexPosition] + iTask.timeSpent);

            if (check.not.assigned(this.objectOfLineCharts[iTask.routineItem])) {
                this.objectOfLineCharts[iTask.routineItem] = this.initLineChart();
            }
            this.idToLabel[iTask.routineItem] = iTask.name;
            this.objectOfLineCharts[iTask.routineItem][indexPosition] = Math.ceil(this.objectOfLineCharts[iTask.routineItem][indexPosition] + iTask.timeSpent);
        });

        const totalDataset = {
            label: 'TOTAL',
            data: this.totalValues
        };

        // Total values will be in a bar chart, the others will be in lines
        const lineDatasets = [];
        Object.keys(this.objectOfLineCharts).forEach((iLineKey, index) => {
            const datasetLabel = this.idToLabel[iLineKey];
            const datasetData = this.objectOfLineCharts[iLineKey];
            lineDatasets.push({
                label: datasetLabel,
                data: datasetData,
                type: 'line',
                fill: false,
                borderColor: index < this.SET_COLORS.length ? this.SET_COLORS[index] : this.SET_COLORS[0]
            });
        });

        const allDatasets = [totalDataset].concat(lineDatasets);

        // Start drawing of chart:
        const chartCtx = this.chartElement.nativeElement.getContext('2d');
        if (!this.chart) {
            this.chart = new Chart(
                chartCtx,
                {
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
                }
            );
        } else {
            this.chart.data.datasets = allDatasets;
            this.chart.data.labels = this.listDates;
            this.chart.update();
        }
    }

    private buildListDates(startDate: Date): void { // List dates will be the x axis
        this.arrayPositionOfDate = {};
        this.listDates = [];
        const auxDate = startDate;
        const today = new Date();
        let index = 0;
        while (auxDate <= today) {
            this.listDates.push(auxDate.toLocaleDateString());
            this.arrayPositionOfDate[auxDate.toLocaleDateString()] = index;
            auxDate.setDate(auxDate.getDate() + 1);
            index++;
        }
        this.listDates.push(today.toLocaleDateString());
        this.arrayPositionOfDate[today.toLocaleDateString()] = index;
    }

    private initLineChart(): Array<number> {
        const result = this.listDates.map((iDate) => {
            return 0;
        });
        return result;
    }
}
