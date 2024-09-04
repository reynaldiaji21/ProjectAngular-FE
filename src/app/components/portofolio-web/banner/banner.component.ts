import { NgFor } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [MatButtonModule,NgFor],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class BannerComponent {
 listImages = [ 
  'assets/images/bg1.jpg',
  'assets/images/bg2.jpg',
  'assets/images/bg3.jpg'
 ]
}
