import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  numaleatorio=1
  aleatorio(){
    this.numaleatorio=Math.round(Math.random()*10);
    if(this.numaleatorio>6 || this.numaleatorio==0){
      this.aleatorio();
    }
  }
}
