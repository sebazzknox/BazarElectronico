import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pagina-crud',
  templateUrl: './pagina-crud.component.html',
  styleUrls: ['./pagina-crud.component.scss'],
})
export class PaginaCrudComponent implements OnInit {
  form: FormGroup;
  selectedFile: File | null = null; // Variable para almacenar el archivo seleccionado

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, Validators.required],
    });
  }

  // Manejo de la selección de archivos
  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    if (files.length > 0) {
      this.selectedFile = files[0];
    }
  }

  // Lógica para agregar un nuevo producto
  addProduct() {
    // Aquí debes agregar la lógica para enviar la información del producto
    // y la foto al servidor o hacer lo que necesites con esos datos.

    // Puedes acceder a la información del formulario con this.form.value
    // y a la foto seleccionada con this.selectedFile
  }

  ngOnInit(): void {
    // Puedes realizar cualquier lógica de inicialización aquí si es necesario.
  }
}


