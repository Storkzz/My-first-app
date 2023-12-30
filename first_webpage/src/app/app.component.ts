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

  storkMode:string = "base mode";
  
  public onButtonClick(mode : string){
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
