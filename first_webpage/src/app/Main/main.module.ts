import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { DataService } from '../data/data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [MainComponent],
  providers: [DataService],
})
export class MainModule {}
