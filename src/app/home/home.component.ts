import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit {
  Follow_list: any=[];
  model:any = {
    stepone:{},
    steptwo:[]
  }
  bntStyle: string;
  bntStylesec:string;
  fisrtStep=true;
  intrestType=[
    {"id":"1","name":"Book"},
    {"id":"2","name":"TV"},
    {"id":"3","name":"Video games"}
  ]

  constructor() { 
  }

  ngOnInit() {
    console.log("intrestType",this.intrestType)
  
    this.fisrtStep=true;
    this.bntStyle = 'button-style-active';
    this.bntStylesec = 'button-style'; 
  }

  nextStep(e){
    console.log("model",this.model)
    //e.preventdefault()
    this.fisrtStep=false;
    this.bntStyle = 'button-style';
    this.bntStylesec = 'button-style-active';
  }

  
  submit(data) {
    console.log("checkbox",this.model)
   

  }

  onCheckUser(intrest, event) {
    console.log("checkbox",this.model)
    const checked = event.target.checked; 
     if (checked) {
       this.model.steptwo.push( intrest ); 
        } else {
        const index = this.model.steptwo.findIndex(list => list == intrest);
        this.model.steptwo.splice(index, 1); 
      }
   }

 
}
