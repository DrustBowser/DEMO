import { Component } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContextService } from 'src/app/services/services/context.service';
import { MainService } from 'src/app/services/services/main.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public clientCredentials = new UntypedFormGroup({
    numEmpleado: new UntypedFormControl('', Validators.required),
    contrasenia: new UntypedFormControl('', Validators.required)
  })
  showPsw = false;
  constructor(private toastr: ToastrService,
    private router: Router,
    private _service: MainService,
    private _context: ContextService) { }

  ngOnInit(): void {
    if (this._context.isAuth)
      this.router.navigate(['/colabs-rotation']);
  }

  login() {
    if (this.clientCredentials.invalid) {
      this.toastr.warning('Faltan campos por llenar', 'Incompleto');
      return;
    }
    if (environment.production == true) {
      const clientCredentials = { ... this.clientCredentials.value, numEmpleado: Number(this.clientCredentials.value.numEmpleado) }
      this._service.login(clientCredentials).subscribe((resp: any) => {
        if (resp.resultado) {
          localStorage.clear();
          this._context.SesionId();
          this._context.setInformation();
          this.toastr.success('Hola ' + resp.resultado.informacion.nombre, 'Bienvenido');
          this.router.navigate(['/dashboard']);
        }
      });
    } else {
      localStorage.clear();
      this._context.SesionId();
      this._context.setInformation();
      this.toastr.success('Hola Kathya', 'Bienvenido');
      this.router.navigate(['/dashboard']);
    }
  }

  validarEntrada(event: KeyboardEvent): boolean {
    const valorActual = this.clientCredentials.value.numEmpleado;

    if (event.key === 'Backspace')
      return true;
    const nuevoValor = valorActual + event.key;
    const patronRegex: RegExp = /^[0-9]\d*$/;
    if (!patronRegex.test(nuevoValor)) {
      event.preventDefault();
      return false;
    }
    return true;
  }
}
