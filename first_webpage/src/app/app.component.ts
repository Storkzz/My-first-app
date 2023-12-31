import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Stork is cool';
  sideBoxWidth = "300px";
  sideBoxButtonWidth = "300px";

  storkMode:string = "base mode";

  public onButtonClick(mode : string){
    if(this.sideBoxWidth === "0px"){
      this.sideBoxWidth = "300px";
    }
     else if(this.sideBoxWidth === "300px"){
      this.sideBoxWidth = "0px";
    }

    if(mode === "base mode"){
      this.storkMode = "cool";
    }
     else if (mode ==="cool"){
      this.storkMode ="mysterious";
     }
    else{
      this.storkMode = "base mode";
    }


  }
}
