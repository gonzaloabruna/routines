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

    updateTask(docId: string, bodyToUpdate: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            const httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
            const httpOptions = {
                headers: httpHeaders
            };

            delete bodyToUpdate.__v;
            delete bodyToUpdate._id;

            this.http.put(`${this.API_URL}/api/task/${docId}`, bodyToUpdate, httpOptions).toPromise()
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

            delete bodyToCreate.__v;
            delete bodyToCreate._id;

            this.http.post(`${this.API_URL}/api/routine-item`, bodyToCreate, httpOptions).toPromise()
                .then((result: any) => {
                    resolve(result);
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

            delete bodyToUpdate.__v;
            delete bodyToUpdate._id;

            this.http.put(`${this.API_URL}/api/routine-item/${docId}`, bodyToUpdate, httpOptions).toPromise()
                .then((result: any) => {
                    resolve(result);
                }).catch((error) => {
                    reject(error);
                });
        });
    }
}
