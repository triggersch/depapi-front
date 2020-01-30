import { Component, OnInit } from '@angular/core';
import { DepartementRepository } from '../repositories/departement.repository';
import { Departement } from "../model/departement.model";
import { CommonService } from "../services/common.service";

@Component({
  selector: 'app-deplist',
  templateUrl: './deplist.component.html',
  styleUrls: ['./deplist.component.css']
})
export class DeplistComponent implements OnInit {

  constructor(private repository: DepartementRepository,
  	          private service: CommonService) { }

  ngOnInit() {
  }

  get departements():Departement[]{
  	return this.repository.getDepartements();
  }

  getDepartementDetail(nom: string){
  	console.log(nom);
  	this.service.setParamValue(nom);
  }

}
