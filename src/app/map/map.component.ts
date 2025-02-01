import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet'; // Importa Leaflet
import { NgIcon, NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapPlusLg, bootstrapSearch } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  imports: [NgIconComponent],
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  private map: L.Map | undefined;

  icon = bootstrapSearch;
  icono = bootstrapPlusLg;

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('hs-grayscale-leaflet').setView([40.4168, -3.7038], 13);
    var marker = L.marker([40.4168, -3.7038]).addTo(this.map);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(this.map);
  }
}
