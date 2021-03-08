import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveToggleComponent } from './archive-toggle/archive-toggle.component';
import { CreateToggleComponent } from './create-toggle/create-toggle.component';
import { UpdateToggleComponent } from './update-toggle/update-toggle.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListTogglesComponent } from './list-toggles/list-toggles.component';

const routes: Routes = [
  { path: 'create-toggle', component: CreateToggleComponent },
  { path: 'archive-toggle', component: ArchiveToggleComponent },
  { path: 'update-toggle', component: UpdateToggleComponent },
  { path: 'list-toggles', component: ListTogglesComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
