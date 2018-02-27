import { Component, ViewChildren, QueryList, AfterViewInit,ViewChild  } from '@angular/core';


import { DashboardComponent } from './dashboard/dashboard.component';
import { GiveAssistanceComponent } from './give-assistance/give-assistance.component';
import { NumberComponent } from './number/number.component';
import { MapComponent } from './map/map.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Airport Assistance';


    @ViewChild(NumberComponent)
    private numberComponent: NumberComponent;
    
    ngAfterViewInit() {
       
        //this.appAlerts.forEach(alertInstance => console.log(alertInstance));
    }

    increase() {
        console.log('increase');
        this.numberComponent.increaseByOne();
    }



}
