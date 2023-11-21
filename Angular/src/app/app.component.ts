import { Component } from '@angular/core';
import { appService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  export class AppComponent {

    //NodeJs application will run on http://localhost:8080, which needs to be set as apiHost.
    public apiHost="http://localhost:8080";
  
    //Url of the authorizationserver action in NodeJs application.
    public authorizationUrl= "/authorizationserver";
    
    //Url of the GetDetails action in NodeJs application.
    public getEmbedConfigUrl= "/getData";

    public embedConfig: any;
      
    public dashboards: any;
  
    public baseUrl: any;
  
    public dashboardServerApiUrl!: string;
    
    constructor(private _app: appService) {
    }

  ngOnInit() {
  }
}