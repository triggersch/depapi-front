import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Injectable()
export class CommonService {

    private paramValue: Subject<string> = new Subject();

    public getParamValue() : Observable<string> {
        return this.paramValue.asObservable();
    }

    public setParamValue(value: string) : void {
        this.paramValue.next(value);
    }

}