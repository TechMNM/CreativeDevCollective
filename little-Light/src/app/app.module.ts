import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverviewCardComponent } from './components/overview-card/overview-card.component';
import { RegisterCtaComponent } from './components/register-cta/register-cta.component';
import { CardRowComponent } from './components/card-row/card-row.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { RegistrationOverviewComponent } from './components/registration-overview/registration-overview.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import { ClassroomSliderComponent } from './components/classroom-slider/classroom-slider.component';
import { BabyclassComponent } from './pages/classrooms/babyclass/babyclass.component';
import { ToddlerclassComponent } from './pages/classrooms/toddlerclass/toddlerclass.component';
import { Preschoolclass01Component } from './pages/classrooms/preschoolclass01/preschoolclass01.component';
import { Preschoolclass02Component } from './pages/classrooms/preschoolclass02/preschoolclass02.component';
import { GraderrComponent } from './pages/classrooms/graderr/graderr.component';
import { GraderComponent } from './pages/classrooms/grader/grader.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TopToolbarComponent } from './components/top-toolbar/top-toolbar.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgImageSliderModule } from 'ng-image-slider';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { RegisterComponent } from './register/register.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import {MatButtonModule} from '@angular/material/button';
import { ContactComponent } from './pages/contact/contact.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    OverviewCardComponent,
    RegisterCtaComponent,
    CardRowComponent,
    FooterComponent,
    RegistrationPageComponent,
    RegistrationOverviewComponent,
    ClassroomSliderComponent,
    BabyclassComponent,
    ToddlerclassComponent,
    Preschoolclass01Component,
    Preschoolclass02Component,
    GraderrComponent,
    GraderComponent,
    AboutUsComponent,
    TopToolbarComponent,
    SideNavComponent,
    NavigationComponent,
    GalleryPageComponent,
    RegisterComponent,
    FormPageComponent,
    ContactComponent,
    WhatsappButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    NgbModule,
    LazyLoadImageModule, 
    MatSliderModule, 
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    NgImageSliderModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
