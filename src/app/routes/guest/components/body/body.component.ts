import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Department } from '../../../../core/models/department';
import { DepartmentService } from '../../../../core/services/department.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.sass']
})
export class BodyComponent {

    formGuest!: FormGroup;
    departments: Department[] = [];
    cities: string[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private _departmentSvc: DepartmentService
    ) {
        this.buildForm();
    }

    private buildForm() {

        this.formGuest = this.formBuilder.group
            ({
                department: ['', [Validators.required, Validators.maxLength(30)]],
                city: ['', [Validators.required, Validators.maxLength(50)]],
                name: ['', [Validators.required, Validators.maxLength(50)]],
                email: ['', [Validators.required, Validators.maxLength(30), Validators.email]]
            });

    }

    ngOnInit(): void {

        this.getDepartments();

    }

    private getDepartments(): void {

        try {

            // Consumo de API REST :: Obtengo los datos de la url
          this._departmentSvc.getDepartamentos().subscribe(Departments => {
              //console.log('Departments:', Departments);
              //console.log('✅ Object.entries(Departments) ', Object.entries(Departments));
              this.loadDepartments(Object.entries(Departments));
            });

        } catch (error) {
            console.log('Error: ', error);
        }

    }

    private loadDepartments(allDepartments: any[]): void {

        allDepartments.map((department: any) => {
          console.log('👉 department: ', department);

            this.departments.push({
                Department: department[0],
                Cities: department[1]
            });

        });

      console.log('😉 this.departments: ', this.departments);
    }

  public changeDepartment(department: any): void {

    department = department.target.value;

      try {
            department === ''
                ?
                (
                    this.formGuest.get('city')?.reset(''),
                    this.cities = []
                )
                : this.cities = this.departments.find(elemento => elemento.Department === department)?.Cities ?? [];

        } catch (error) {
            console.log('Error: ', error);
        }
    }

    public send(): void {

      if (this.formGuest.valid) {

        this.sweetAlert();

        console.log('Valid:', this.formGuest.value);


            // Obtenfo todos valores del formGuest
            const contacto = this.formGuest.value;

            /* this._contactoSvc.create(contacto).subscribe((response: any) => {

                // Condicional de corto circuito
                response.success === true && this.sweetAlert();

            }); */

        } else {
            // Activo todos los errores en el formGuest
            this.formGuest.markAllAsTouched();
        }

    }

    sweetAlert(): void {

        // Animación de Confirmación
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Datos Almacenados Exitosamente!',
            showConfirmButton: false,
            timer: 2200
        });

    }

    // - Recuperar los campos para que no sea tan repetitiva el llamado a dichos campos cuando trabaje con los errores
    get departmentField() {
        return this.formGuest.get('department');
    }

    get cityField() {
        return this.formGuest.get('city');
    }

    get nameField() {
        return this.formGuest.get('name');
    }

    get emailField() {
        return this.formGuest.get('email');
    }

}
