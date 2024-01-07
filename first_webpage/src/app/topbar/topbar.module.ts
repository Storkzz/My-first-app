import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar.component';
import { TopbarService } from './topbar.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [TopbarComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [TopbarComponent],
  providers: [TopbarService]
})
export class TopbarModule {}
