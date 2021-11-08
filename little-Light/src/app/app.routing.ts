import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/home-page/home-page.component';
// import { FormPageComponent } from './pages/form-page/form-page.component';
import { HomePageSliderComponent } from './image-slider/image-slider.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';

const appRoutes: Routes = [
    { path: '', component:HomePageComponent },
    { path: 'registration', component: RegistrationPageComponent},
    { path: 'banner', component: HomePageSliderComponent}
]

@NgModule ({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [ RegistrationPageComponent, HomePageComponent, HomePageSliderComponent]