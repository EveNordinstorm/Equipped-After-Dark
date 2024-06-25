import { Component } from '@angular/core';
import { AdvertComponent } from '../../components/advert/advert.component';

@Component({
  selector: 'app-be-inspired',
  standalone: true,
  imports: [ AdvertComponent ],
  templateUrl: './be-inspired.component.html',
  styleUrl: './be-inspired.component.scss'
})
export class BeInspiredComponent {

}
