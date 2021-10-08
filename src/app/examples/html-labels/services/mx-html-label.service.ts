import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class mxHtmlLabelService {

  constructor(
  ) { }

  getPersonHtml(firstName: string, lastName: string) {
    let displayName = `${lastName}, ${firstName}`;
    return  '<div class="_mxPersonCard">' +
              '<div class="mxPersonIcon"></div>' +
              `<span class="mxPersonName">${displayName}</span>` +
            '</div>';
  }
}

