import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temperature',
  standalone: true, // ✅ standalone component
  imports: [CommonModule, FormsModule], // ✅ required for ngModel and *ngIf
  templateUrl: './temperature.html',
  styleUrls: ['./temperature.css'] // ✅ fix typo (styleUrl → styleUrls)
})
export class Temperature {
  celsius: number | null = null;
  fahrenheit: number | null = null;

  fahrenheitInput: number | null = null;
  celsiusResult: number | null = null;

  convertToFahrenheit() {
    if (this.celsius !== null) {
      this.fahrenheit = (this.celsius * 9 / 5) + 32;
    } else {
      this.fahrenheit = null;
    }
  }

  convertToCelsius() {
    if (this.fahrenheitInput !== null) {
      this.celsiusResult = (this.fahrenheitInput - 32) * 5 / 9;
    } else {
      this.celsiusResult = null;
    }
  }
}
