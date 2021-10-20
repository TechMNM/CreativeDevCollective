import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormPageComponent } from './pages/form-page/form-page.component';

const appRoutes: Routes = [
    { path: 'home', component:HomePageComponent },
    { path: 'form', component: FormPageComponent}
]

@NgModule ({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [ FormPageComponent, HomePageComponent]