// --------------------- General ---------------------------
import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
//--------------------- Locale ----------------------------------
import { CommonModule, registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
registerLocaleData(localeES, 'es');
//------------------------- Modules ---------------------------------
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared/shared.module';
//------------------------- Interceptors ---------------------------------
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from './services/interceptors/spinner.interceptor';
import { ContextService } from './services/services/context.service';
import { HandleErrorInterceptor } from './services/interceptors/handle-error.interceptor';
//------------------------- Componentes ---------------------------------
import { LoginComponent } from './components/login/login.component';
import { ToolbarComponent } from './components/pages/layouts/toolbar/toolbar.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/pages/home/home.component';
import { CustomCurrencyPipe } from './shared/pipes/custom-currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    //------------------- System components -------------------
    ToolbarComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    CustomCurrencyPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    SharedModule,
  ],
  providers: [
    ContextService,
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'es' },
    { provide: HTTP_INTERCEPTORS, useClass: HandleErrorInterceptor, multi: true },],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
