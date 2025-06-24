import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Navigation } from '../../shared/navigation/navigation';

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [CommonModule, RouterModule, Navigation],
  templateUrl: './home.html',
  styleUrls: ['./home.css'] 
})
export class Home {}