import { Component } from '@angular/core';
import { SketchbService } from './services/sketchb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sketch_Bramha_Test';
  breweryData: any[];
  show = true;
  breweryDataByType: any[];

  constructor(private sv: SketchbService) {
  }

  ngOnInit() {
    this.getAllBrewery();
  }

  getAllBrewery() {
    this.sv.getAllReg().subscribe(res => {
      this.breweryData = res;
      this.show = true;
    })
  }

  getBreweryByData(type: string, data: string) {
    this.sv.getBreweryByData(type, data).subscribe(response => {
      this.breweryDataByType = response;
      this.show = false;
    })
  }
  returnToList(){
    this.show = true;
  }
}
