import { Component } from '@angular/core';
import { MysqlService } from './share/mysql.service';
const $ = require("jquery");
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Desktop Application';
  constructor(private mysql:MysqlService){}
  Test(){
 
       this.mysql.DatabaseConnection().subscribe(
          (next) => {
             this.mysql.Query("SELECT * FROM user").subscribe((next)=>{
                console.log(next.results);
                this.mysql.CloseDatabaseConnection();
             })
          },
          (error) => alert(error)
       );
     
  
    
     
  }
}
