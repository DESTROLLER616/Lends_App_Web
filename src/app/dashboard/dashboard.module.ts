import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LogoutComponent } from './shared/logout/logout.component';
import { TokenService } from '../interceptors/token/token.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TableCategoriesComponent } from './pages/categories/table-categories/table-categories.component';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    MainComponent,
    CategoriesComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    LogoutComponent,
    TableCategoriesComponent,
    PaginationComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports: [],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenService, multi: true},]
})
export class DashboardModule { }
