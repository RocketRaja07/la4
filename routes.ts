import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
const routeConfig: Routes = [
{
path: '',
component: HomeComponent,
title: 'Home page'
},
{
path: 'details/:id',
component: DetailsComponent,
title: 'Home details'
}
];
export default routeConfig;
housing-location.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterLink, RouterOutlet} from '@angular/router';
@Component({
selector: 'app-housing-location',
standalone: true,
imports: [CommonModule, RouterLink, RouterOutlet],
template: `
<section class="listing">
<img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of
{{housingLocation.name}}">
<h2 class="listing-heading">{{ housingLocation.name }}</h2>
<p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
<a [routerLink]="['/details', housingLocation.id]">Learn More</a>
</section>
`,
styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
@Input() housingLocation!: HousingLocation;
}
