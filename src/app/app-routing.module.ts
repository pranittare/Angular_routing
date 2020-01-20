import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApplicationComponent } from './application/application.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ApplicationGuard } from './application.guard';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  // {path: 'home:id', component: HomeComponent},

  {path: 'application', component: ApplicationComponent,canActivate: [ApplicationGuard]},
  {path: 'application/:id', component: ApplicationComponent, canActivate: [ApplicationGuard]},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:id', component: ProductsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
