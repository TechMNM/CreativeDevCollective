import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { HomePageSliderComponent } from './image-slider/image-slider.component';
import { AboutUsComponent} from './pages/about-us/about-us.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { BabyclassComponent} from './pages/classrooms/babyclass/babyclass.component';
import { Preschoolclass01Component } from './pages/classrooms/preschoolclass01/preschoolclass01.component';
import { Preschoolclass02Component } from './pages/classrooms/preschoolclass02/preschoolclass02.component';
import { ToddlerclassComponent} from './pages/classrooms/toddlerclass/toddlerclass.component';
import { GraderrComponent} from './pages/classrooms/graderr/graderr.component';
import { GraderComponent} from './pages/classrooms/grader/grader.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './pages/contact/contact.component';

const appRoutes: Routes = [
    { path: '', component:HomePageComponent },
    {path: 'about', component:AboutUsComponent},
    { path: 'registration', component: RegistrationPageComponent},
    { path: 'banner', component: HomePageSliderComponent},
    { path: 'babyclass', component: BabyclassComponent},
    { path: 'toddlerclass', component: ToddlerclassComponent},
    { path: 'preschool01', component: Preschoolclass01Component},
    { path: 'preschool02', component: Preschoolclass02Component},
    { path: 'graderr', component: GraderrComponent},
    { path: 'grader', component: GraderComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'gallery', component: GalleryPageComponent},
    { path: 'contact-us', component: FormPageComponent}

]

@NgModule ({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [ RegistrationPageComponent, HomePageComponent, HomePageSliderComponent]