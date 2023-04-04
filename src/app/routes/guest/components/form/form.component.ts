import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '@core/models/contact';
import { Department } from '@core/models/department';
import { ContactService } from '@core/services/contact.service';
import { DepartmentService } from '@core/services/department.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
})
export class FormComponent {
  formGuest!: FormGroup;
  departments: Department[] = [];
  cities: string[] = [];
  listGuest: Contact[] = [];
  count: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private _departmentSvc: DepartmentService,
    private _contactSvc: ContactService
  ) {
    this.buildForm();
  }

  private buildForm() {
    this.formGuest = this.formBuilder.group({
      department: ['', [Validators.required, Validators.maxLength(30)]],
      city: ['', [Validators.required, Validators.maxLength(50)]],
      name: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.maxLength(30)]],
    });
  }

  ngOnInit(): void {
    this.getDepartments();
  }

  private getDepartments(): void {
    try {
      this._departmentSvc.getDepartamentos().subscribe((Departments) => {
        this.loadDepartments(Object.entries(Departments));
      });
    } catch (error) {
      console.log('Error: ', error);
    }
  }

  private loadDepartments(allDepartments: any[]): void {
    allDepartments.map((department: any) => {
      this.departments.push({
        Department: department[0],
        Cities: department[1],
      });
    });
  }

  public changeDepartment(department: any): void {
    department = department.target.value;
    console.log('Dto: ', department);

    try {
      department === ''
        ? (this.formGuest.get('city')?.reset(''), (this.cities = []))
        : ((this.cities =
            this.departments.find(
              (elemento) => elemento.Department === department
            )?.Cities ?? []),
          // TODO: add the first city default
          this.formGuest.patchValue({ city: this.cities[0] }));
    } catch (error) {
      console.log('Error: ', error);
    }
  }

  public send(): void {
    if (this.formGuest.invalid) return this.formGuest.markAllAsTouched(); // Activo todos los errores en el formGuest

    const guest: Contact = this.formGuest.value;
    console.log('guest:', guest);

    this._contactSvc.create(guest).subscribe((response: any) => {
      console.log('✅', response);
      // Condicional de corto circuito
      response.success === true && this.sweetAlert();
    });
  }

  sweetAlert(): void {
    // Animación de Confirmación
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Datos Almacenados Exitosamente!',
      showConfirmButton: false,
      timer: 2200,
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
