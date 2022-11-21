import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BtnEventsComponent } from './btn-events/btn-events.component';
import { TxtBoxComponent } from './txt-box/txt-box.component';

const routes: Routes = [
  { path: 'txtbox', component: TxtBoxComponent },
  { path: 'buttons', component: BtnEventsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
