import { Component } from '@angular/core';
import { HeaderComponent } from '@components/portofolio-web/header/header.component';
import { BannerComponent } from '../../components/portofolio-web/banner/banner.component';
import { HeaderMenuComponent } from '../../components/portofolio-web/header-menu/header-menu.component';
// bisa menggunakan dan tidak usah ../../ seperti default di atas jika sudah set path di tsconfig.json baseUrl dan paths menjadi seperti di line 2 >> ini namanya path alias
@Component({
  selector: 'app-portofolio-web',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, HeaderMenuComponent],
  templateUrl: './portofolio-web.component.html',
  styleUrl: './portofolio-web.component.css'
})
export class PortofolioWebComponent {

}
