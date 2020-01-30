import { Injectable } from "@angular/core";
import { Departement } from "../model/departement.model";

import { RestDataSource } from "../datasource/rest.datasource";

@Injectable()
export class DepartementRepository {

	private departements: Departement[] = [];

	constructor(private dataSource: RestDataSource) {
        dataSource.getDepartements().subscribe(data => {
            this.departements = data;
        });
    }

    getDepartements(): Departement[] {
    	return this.departements;
    }

     getDepartement(nom: string): Departement {
     	return this.departements.find(d => d.nom === nom);
     }


}


