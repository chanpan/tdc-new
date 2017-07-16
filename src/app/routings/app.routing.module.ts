import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { NotfoundComponent } from '../notfound/notfound.component'; 
const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },{
        path: '**',
        component: NotfoundComponent
    } 

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
