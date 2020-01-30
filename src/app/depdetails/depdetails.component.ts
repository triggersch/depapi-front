import { Component, OnInit } from '@angular/core';
import { DepartementRepository } from '../repositories/departement.repository';
import { Departement } from "../model/departement.model";
import { CommonService } from "../services/common.service";

@Component({
  selector: 'app-depdetails',
  templateUrl: './depdetails.component.html',
  styleUrls: ['./depdetails.component.css']
})
export class DepdetailsComponent implements OnInit {

	departement : Departement = undefined;

  constructor(private repository: DepartementRepository,
  	          private service: CommonService) {
this.service.getParamValue().subscribe((newValue) => {
        this.departement = this.repository.getDepartement(newValue);
    });

  	           }

  ngOnInit() {
  }
}
