import { Component, inject, OnInit } from '@angular/core';
import { Navigation } from '../../shared/navigation/navigation';
import { Aviationstack } from '../../../services/aviationstack';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-flight-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, Navigation, RouterModule],
  templateUrl: './flight-detail.html',
  styleUrls: ['./flight-detail.css']
})
export class DetailsComponent implements OnInit {
  searchValue: string = '';
  flights: any[] = [];
  selectedFlight: any = null;

constructor(private api: Aviationstack, private route: ActivatedRoute) {}

ngOnInit(): void {
this.route.paramMap.subscribe(params => {
  const icao = params.get('icao');

  if (icao) {
    this.api.searchFlightByIcao(icao).subscribe((res: any) => {
      this.flights = res.data;
      this.selectedFlight = res.data.length ? res.data[0] : null;
    });
  } else {
    this.api.getLiveFlights().subscribe((res: any) => {
      this.flights = res.data;
      this.selectedFlight = null;
    });
  }
});
}

  search() {
    if (!this.searchValue) return;
    this.api.searchFlightByIcao(this.searchValue).subscribe((res: any) => {
      this.flights = res.data;
      this.selectedFlight = res.data.length ? res.data[0] : null;
    });
  }

  showDetails(flight: any) {
    this.selectedFlight = flight;
  }
}
