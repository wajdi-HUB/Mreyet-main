import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home',component: HomeComponent},

  { path: 'header' , component: HeaderComponent},
  { path: 'footer' , component: FooterComponent},
  { path: 'about' , component: AboutUsComponent},
  { path: 'faq' , component: FaqComponent},
  { path: 'contact' , component: ContactUsComponent},

  //**************auth module *******************/
  {path: 'authentification',loadChildren: './AuthentificationModule/auth.module#AuthModule'},


  //**************product module *******************/

  {path: 'products',loadChildren: './ProductModule/product.module#ProductModule'},

  

    


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
