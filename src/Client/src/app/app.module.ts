import { CategoryService } from './services/category.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { AppRoutingModule } from './/app-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { RouterModule, Routes } from '@angular/router';
import { PpalComponent } from './components/ppal/ppal.component';


const routes: Routes = [
  { path: 'categories', component: CategoryComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: PpalComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    PpalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    DataTablesModule,
    NgxPaginationModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
