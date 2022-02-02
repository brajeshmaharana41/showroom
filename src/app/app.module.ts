import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './landing/login-page/login-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import { SignupPageComponent } from './landing/signup-page/signup-page.component';
import { NewAgreementsComponent } from './main/agreements/new-agreements/new-agreements.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import {MatStepperModule} from '@angular/material/stepper';
import { CreateDetailsComponent } from './main/agreements/new-agreements/create-details/create-details.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ProductDetailsComponent } from './main/agreements/new-agreements/product-details/product-details.component';
import { FinanciaDetailsComponent } from './main/agreements/new-agreements/financia-details/financia-details.component';
import { GuarantorDetailsComponent } from './main/agreements/new-agreements/guarantor-details/guarantor-details.component';
import { EmiDetailsComponent } from './main/agreements/new-agreements/emi-details/emi-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HeaderComponent,
    FooterComponent,
    SignupPageComponent,
    NewAgreementsComponent,
    DashboardComponent,
    CreateDetailsComponent,
    ProductDetailsComponent,
    FinanciaDetailsComponent,
    GuarantorDetailsComponent,
    EmiDetailsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    AppRoutingModule,
    MatSidenavModule,
    MatCardModule,
    FlexLayoutModule,
    MatTabsModule,
    MatMenuModule,
    MatExpansionModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
