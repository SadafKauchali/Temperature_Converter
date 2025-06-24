import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Temperature } from './temperature/temperature';

@Component({
  selector: 'app-root',
  standalone: true, // ✅ REQUIRED for standalone component
  imports: [RouterOutlet, FormsModule, Temperature], // ✅ FormsModule is needed for ngModel
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // ✅ Corrected from styleUrl → styleUrls
})
export class App {
  protected title = 'temperature-app';
}
