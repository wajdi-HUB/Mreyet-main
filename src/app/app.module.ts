import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule,ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AuthModule } from './AuthentificationModule/auth.module';

import { BestBrandsComponent } from './home/components/best-brands/best-brands.component';
import { NewCollectionComponent } from './home/components/new-collection/new-collection.component';
import { OurProductsComponent } from './home/components/our-products/our-products.component';
import { PictureService } from './services/picture.service';
import { UserService } from './services/user.service';
import { StoreService } from './services/store.service';
import { BrandService } from './services/brand.service';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './helpers/auth-interceptor';
import { ProductModule } from './ProductModule/product.module';



@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    FaqComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    BestBrandsComponent,
    NewCollectionComponent,
    OurProductsComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    ProductModule,
  

    

  ],
  providers: [PictureService,UserService,StoreService,BrandService,
    {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  },  
],

  bootstrap: [AppComponent]
})
export class AppModule { }


















