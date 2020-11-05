import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductViewComponent } from './components/product-view/product-view.component';

const routes: Routes = [
  { path: 'list', component: ProductListComponent },
  { path: 'view/:id', component: ProductViewComponent },
  { path: 'add', component: ProductAddComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

// el pathMatch indica de que manera se va matchear el path de la ruta contra la ruta en especifico
// en el ejemplo de '' indica que si o si tiene que estar la ruta vacia

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
