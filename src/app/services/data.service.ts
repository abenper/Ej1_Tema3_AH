import { Injectable, signal } from '@angular/core';
import { Cliente } from '../models/cliente.model'; // <-- Importar el nuevo modelo

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  // Datos existentes (ej. para el perfil)
  private perfil = signal({
    nombre: 'A.H.',
    bio: 'Alumno del módulo de Desarrollo de Interfaces.'
  });

  // Punto 5: Propiedad para almacenar los datos del Cliente
  private datosCliente = signal<Cliente | null>(null);

  // Getter y Setter para Perfil (existentes)
  getPerfil() {
    return this.perfil.asReadonly();
  }
  setPerfil(data: { nombre: string, bio: string }) {
    this.perfil.set(data);
  }

  // Punto 5: Getter y Setter para Cliente
  getDatosCliente() {
    return this.datosCliente.asReadonly();
  }
  setDatosCliente(data: Cliente) {
    this.datosCliente.set(data);
  }
}

