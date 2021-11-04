import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { HomePageSliderComponent } from './image-slider/image-slider.component';

const appRoutes: Routes = [
    { path: '', component:HomePageComponent },
    { path: 'form', component: FormPageComponent},
    { path: 'banner', component: HomePageSliderComponent}
]

@NgModule ({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [ FormPageComponent, HomePageComponent, HomePageSliderComponent]