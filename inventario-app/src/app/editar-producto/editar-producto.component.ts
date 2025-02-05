import { Component } from '@angular/core';
import { ProductoService } from '../producto.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Producto } from '../producto';

@Component({
  selector: 'app-editar-producto',
  standalone: false,
  
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.css'
})
export class EditarProductoComponent {
  producto: Producto = new Producto();
  id: number;

  constructor(private productoServicio: ProductoService, 
    private ruta: ActivatedRoute, 
    private enrutador: Router) { }

  ngOnInit(): void {  
    this.id = this.ruta.snapshot.params['id'];
    this.productoServicio.obtenerProductoPorId(this.id).subscribe(
      {
        next: (datos) => this.producto = datos
        ,
        error: (errores:any) => console.error(errores)
      } 
    );    
  }

  onSubmit() {
    //Editar el Producto
   this.guardarProducto(); 
  }
  guardarProducto(){
    this.productoServicio.editarProducto(this.id, this.producto).subscribe(
      {
        next: (datos) => this.irProductosLista(),
        error: (errores) => console.error(errores)
      }
    );
  }
  irProductosLista(){
    this.enrutador.navigate(['/productos']);
  }
}
