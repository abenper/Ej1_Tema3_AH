import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonButtons, IonButton,
  IonContent, IonItem, IonLabel, IonInput, IonRouterOutlet,IonFooter
} from '@ionic/angular/standalone';
import { UserStateService } from '../core/user-state.service';
import { CounterComponent } from '../components/counter/counter.component';
// IMPORTAR EL NUEVO COMPONENTE
import { CalculadoraComponent } from '../components/calculadora/calculadora.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    CommonModule, FormsModule, RouterLink, RouterOutlet,
    IonHeader, IonToolbar, IonTitle, IonButtons, IonButton,
    IonContent, IonItem, IonLabel, IonInput, IonRouterOutlet,
    CounterComponent, IonFooter,
    // AÑADIR EL NUEVO COMPONENTE A LOS IMPORTS
    CalculadoraComponent
  ],
  templateUrl: './home.page.html'
})
export class HomePage {
  // ... (propiedades y lógica existentes) ...
  parentCount = 0;
  milestoneMsg = '';

  // PROPIEDADES PARA LA CALCULADORA (Punto 2 y 3)
  valor1: number | null = null;
  valor2: number | null = null;
  resultadoSuma: number | null = null;
  resultadoResta: number | null = null;
  resultadoMultiplicacion: number | null = null;
  resultadoDivision: number | null = null;

  /*onTituloChange(v: string) {
    this.titulo = v;
    this.state.setHeaderTitle(v);
  }*/

  incrementFromParent() {
    this.parentCount++;
  }

  onMilestoneReached(n: number) {
    this.milestoneMsg = `Ha llegado al ${n}`;
    // (Opcional) limpiar el mensaje a los X segundos:
    setTimeout(() => this.milestoneMsg = '', 3000);
  }

  // FUNCIÓN PARA CALCULAR (EN EL PADRE)
  onCalcularClick() {
    // Al hacer click, el two-way binding ([ngModel]) ya habrá actualizado
    // 'valor1' y 'valor2', y el hijo recibirá los nuevos valores
    // automáticamente vía @Input. No necesita lógica aquí.
  }

  // FUNCIÓN PARA RECIBIR LOS RESULTADOS DEL HIJO (Punto 3)
  onResultadosCalculados(resultados: { suma: number, resta: number, mult: number, div: number }) {
    this.resultadoSuma = resultados.suma;
    this.resultadoResta = resultados.resta;
    this.resultadoMultiplicacion = resultados.mult;
    this.resultadoDivision = resultados.div;
  }
}