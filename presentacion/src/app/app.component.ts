import { Component } from '@angular/core';
import { ServicioService } from './servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presentacion';
  responseTest:any;

  constructor (private t: ServicioService){}

public ngOnInit() {
  this.t.test().subscribe(
    sucess =>{console.log(sucess)
    this.responseTest=sucess["data"]
  },
  err=>{console.log(err)}
  )
}
}
