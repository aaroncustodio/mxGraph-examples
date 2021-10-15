import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class mxHtmlService {

  constructor(
  ) { }

  getTriggerHtml(trigger: string, setup: string) { //'<div class="mxCardLabel">Trigger</div>'+
    return   '<div class="_mxAutoCard">' +
              '<div class="mxAutoTitle">'+
              `<span class="mxAutoIcon fromSteer"></span>`+
              `<span class="mx-auto-title">${trigger}</span> </div>`+
              `<div class="mx-auto-subtitle">${setup}</div>`+
            '</div>';
  }
  
  getConditionHtml(condition: string, setup: string){
      return '<div class="_mxAutoCard">' +
              '<div class="mxAutoTitle">'+
              `<span class="mxAutoIcon ifCondition"></span>`+
              `<span class="mx-auto-title">${condition}</span> </div>`+
              `<div class="mx-auto-subtitle">${setup}</div>`+
            '</div>';
    }
}

