import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonicModule } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-calculadora',
  imports: [CommonModule, IonicModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent],
  templateUrl: './calculadora.component.html'
})
export class CalculadoraComponent implements OnChanges {
  // Puntos 1 y 2: Recibir los dos valores del padre
  @Input() val1: number | null = null;
  @Input() val2: number | null = null;

  // Punto 3: Emitir los resultados al padre
  @Output() resultados = new EventEmitter<{ suma: number, resta: number, mult: number, div: number }>();

  ngOnChanges(changes: SimpleChanges) {
    // Se ejecuta cada vez que cambia un @Input (Punto 2)
    if (changes['val1'] || changes['val2']) {
      this.realizarCalculo();
    }
  }

  realizarCalculo() {
    // Convertir a número y asegurarse de que no son null
    const num1 = Number(this.val1);
    const num2 = Number(this.val2);

    // Validar que los valores son números finitos
    if (!Number.isFinite(num1) || !Number.isFinite(num2) || this.val1 === null || this.val2 === null) {
      // Si no son válidos, emitir 0s o nulls
      this.resultados.emit({ suma: 0, resta: 0, mult: 0, div: 0 });
      return;
    }

    // Punto 1: Realizar las operaciones
    const suma = num1 + num2;
    const resta = num1 - num2;
    const mult = num1 * num2;
    // Evitar división por cero
    const div = num2 !== 0 ? num1 / num2 : 0;

    // Punto 3: Devolver los resultados al padre
    this.resultados.emit({
      suma: suma,
      resta: resta,
      mult: mult,
      div: div
    });
  }
}