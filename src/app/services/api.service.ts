import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import check from 'check-types';

import { ITaskModel } from '../interfaces/taskModel.interface';
import { IRoutineItemModel } from '../interfaces/routineItemModel.interface';

@Injectable()
export class ApiService {
    private API_URL = 'http://localhost:8080/api';
    constructor(private http: HttpClient) { }

    getTodayTasks(): Promise<Array<ITaskModel>> {
        return new Promise<Array<ITaskModel>>((resolve, reject) => {
            const httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
            const httpOptions = {
                headers: httpHeaders
            };

            this.http.get(`${this.API_URL}/tasks/today`, httpOptions).toPromise()
                .then((todayTasks: Array<ITaskModel>) => {
                    resolve(todayTasks);
                }).catch((error) => {
                    reject(error);
                });
        });
    }

    deleteTodayTasks(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            const httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
            const httpOptions = {
                headers: httpHeaders
            };

            this.http.delete(`${this.API_URL}/tasks/today`, httpOptions).toPromise()
                .then(() => {
                    resolve();
                }).catch((error) => {
                    reject(error);
                });
        });
    }

    updateTask(docId: string, bodyToUpdate: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            const httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
            const httpOptions = {
                headers: httpHeaders
            };

            const bodyCopy = Object.assign({}, bodyToUpdate);
            delete bodyCopy.__v;
            delete bodyCopy._id;

            this.http.put(`${this.API_URL}/task/${docId}`, bodyCopy, httpOptions).toPromise()
                .then((result: any) => {
                    resolve(result);
                }).catch((error) => {
                    reject(error);
                });
        });
    }

    createRoutineItem(bodyToCreate: any): Promise<IRoutineItemModel> {
        return new Promise<IRoutineItemModel>((resolve, reject) => {
            const httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
            const httpOptions = {
                headers: httpHeaders
            };

            const bodyCopy = Object.assign({}, bodyToCreate);
            delete bodyCopy.__v;
            delete bodyCopy._id;

            this.http.post(`${this.API_URL}/routine-item`, bodyCopy, httpOptions).toPromise()
                .then((result: any) => {
                    resolve(result);
                }).catch((error) => {
                    reject(error);
                });
        });
    }

    deleteRoutineItem(docId: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            const httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
            const httpOptions = {
                headers: httpHeaders
            };

            this.http.delete(`${this.API_URL}/routine-item/${docId}`, httpOptions).toPromise()
                .then((result: any) => {
                    resolve();
                }).catch((error) => {
                    reject(error);
                });
        });
    }

    getActiveRoutineItems(): Promise<Array<IRoutineItemModel>> {
        return new Promise<Array<IRoutineItemModel>>((resolve, reject) => {
            const httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
            const httpOptions = {
                headers: httpHeaders
            };

            this.http.get(`${this.API_URL}/active-routine-items`, httpOptions).toPromise()
                .then((activeRoutineItems: Array<IRoutineItemModel>) => {
                    resolve(activeRoutineItems);
                }).catch((error) => {
                    reject(error);
                });
        });
    }

    getRoutineItems(findBody: any): Promise<Array<IRoutineItemModel>> {
        return new Promise<Array<IRoutineItemModel>>((resolve, reject) => {
            const httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
            const httpOptions = {
                headers: httpHeaders
            };

            this.http.post(`${this.API_URL}/routine-item/find`, findBody, httpOptions).toPromise()
                .then((routineItems: Array<IRoutineItemModel>) => {
                    resolve(routineItems);
                }).catch((error) => {
                    reject(error);
                });
        });
    }

    updateRoutineItem(docId: string, bodyToUpdate: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            const httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
            const httpOptions = {
                headers: httpHeaders
            };

            const bodyCopy = Object.assign({}, bodyToUpdate);
            delete bodyCopy.__v;
            delete bodyCopy._id;

            this.http.put(`${this.API_URL}/routine-item/${docId}`, bodyCopy, httpOptions).toPromise()
                .then((result: any) => {
                    resolve(result);
                }).catch((error) => {
                    reject(error);
                });
        });
    }
}
