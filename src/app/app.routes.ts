import { Routes } from '@angular/router';
import { PortofolioWebComponent } from './template/portofolio-web/portofolio-web.component';
import { AdminComponent } from './template/admin/admin.component';

export const routes: Routes = [
//https://facebook.com/profile/security
//penjelasan 
//  https://facebook.com/ ini adalah baseURL
//  /profile adalah segment 1 atau path atau router
//  /security adalah segment 2 atau path atau router
{
  path:'',
  component:PortofolioWebComponent  
},
{
    
    path:'admin',
    component:AdminComponent,
    //jika setelah admin ada path atau segment tambahan 
    //contohnya : localhost/admin/dashboard
    //nah dashboard itu kita set di children  
    //dan seterusnya jika ada path lagi setelah dashbord tambahkan lagi children nya
    // children:[
    //         {
    //             path:'dashboard'
    //         }
    // ]
}
  
];
