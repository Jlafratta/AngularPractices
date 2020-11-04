import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SecondComponent } from './components/second/second.component';

const routes: Routes = [
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: '', redirectTo: '/first', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

// el pathMatch indica de que manera se va matchear el path de la ruta contra la ruta en especifico
// en el ejemplo de '' indica que si o si tiene que estar la ruta vacia

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
