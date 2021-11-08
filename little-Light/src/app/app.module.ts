import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app.routing';
import { OverviewCardComponent } from './components/overview-card/overview-card.component';
import { RegisterCtaComponent } from './components/register-cta/register-cta.component';
import { CardRowComponent } from './components/card-row/card-row.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { RegistrationOverviewComponent } from './components/registration-overview/registration-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    OverviewCardComponent,
    RegisterCtaComponent,
    CardRowComponent,
    FooterComponent,
    RegistrationPageComponent,
    RegistrationOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
