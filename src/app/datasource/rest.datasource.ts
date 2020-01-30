import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import {Departement } from "../model/departement.model";
import { map } from "rxjs/operators";


@Injectable()
export class RestDataSource {

	baseUrl: string;

	constructor(private http: HttpClient) {
        this.baseUrl = "/api"
    }

     getDepartements():Observable<Departement[]> {
     	return this.http.get<Departement[]>(this.baseUrl + "/departements")
     }


}