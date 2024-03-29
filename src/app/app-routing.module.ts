import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataDisplayComponent } from './data-display/data-display.component';
import { ImagesUploadComponent } from './images-upload/images-upload.component';

const routes: Routes = [
  {path: 'data', component: ImagesUploadComponent},
  { path: 'data-display', component: DataDisplayComponent },
  {path: '', redirectTo: 'data', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }