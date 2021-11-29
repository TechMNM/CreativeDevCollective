import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/home-page/home-page.component';
// import { FormPageComponent } from './pages/form-page/form-page.component';
import { HomePageSliderComponent } from './image-slider/image-slider.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { RegisterComponent } from './register/register.component'

const appRoutes: Routes = [
    { path: '', component:HomePageComponent },
    { path: 'registration', component: RegistrationPageComponent},
    { path: 'banner', component: HomePageSliderComponent},
    { path: 'gallery', component: GalleryPageComponent},
    { path: 'contact', component: RegisterComponent},

]

@NgModule ({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [ RegistrationPageComponent, HomePageComponent, HomePageSliderComponent]