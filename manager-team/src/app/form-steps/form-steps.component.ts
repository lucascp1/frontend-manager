import { HttpClient } from '@angular/common/http';
import { Service } from './../service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-form-steps',
  templateUrl: './form-steps.component.html',
  styleUrls: ['./form-steps.component.scss']
})

export class FormStepsComponent implements OnInit {

  public step: number = 1;
  public form: FormGroup;
  public messageText: String = '';
  public aplyMessage: Boolean = false;
  public isError: Boolean = false;
  public isCorrect: Boolean = false;
  public nextButton: Boolean = true;
  public previousButton: Boolean = false;
  public submitButton: Boolean = false;
  public teamForm: Boolean = true;
  public playerForm: Boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private service: Service) {
    this.form = new FormGroup({});
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      time: this.formBuilder.group({
        nomedotime: [null, [Validators.required, Validators.minLength(5)]],
        dono: [null, [Validators.required, Validators.minLength(3)]],
        tecnico: [null, [Validators.required, Validators.minLength(3)]]
      }),
      jogador: this.formBuilder.group({
        nomedojogador: [null, Validators.required],
        altura: [null, Validators.required],
        posicao: [null, Validators.required],
      }),
      quadra: this.formBuilder.group({
        nomedaquadra: [null, [Validators.required, Validators.minLength(3)]],
        cidade: [null, Validators.required],
        capacidade: [null, Validators.required]
      })
    });
  }

  buttonStep(action: string) {
    switch (action) {
      case 'next':
        this.step = (this.step + 1);
        break;

      case 'previous':
        this.step = (this.step - 1);
        break;

      case 'submit':
        break;

      default:
        break;
    }

    this.nextButton = this.step < 3;
    this.previousButton = this.step > 1;
    this.submitButton = this.step == 3;
    this.teamForm = this.step == 1;
    this.playerForm = this.step == 2;
  }

  onSubmit() {
    if (this.form.valid) {
      this.http.post('https://httpbin.org/post', JSON.stringify(this.form.value))
        .pipe(map(res => res))
        .subscribe(dados => {

          this.form.reset();
          this.aplyMessage = true;
          this.isCorrect = true;
          this.messageText = 'Cadastro realizado com sucesso!';
        })
    }
    else {
      console.log("form inválido");
      this.verifyFormValidations(this.form);
      this.aplyMessage = true;
      this.isError = true;
      this.messageText = 'Verifique se todos os campos estão preenchidos para realizar o cadastro!';
    }
  }

  // recursividade para verificação de aninhamento
  verifyFormValidations(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      let control = formGroup.get(field);
      control?.markAsTouched();

      if (control instanceof FormGroup) {
        this.verifyFormValidations(control);
      }
    });
  }

  verifyValidTouch(field: string | (string | number)[]) {
    return !this.form.get(field)?.valid && (this.form.get(field)?.touched || this.form.get(field)?.dirty);
  }

  aplyCssError(field: string | (string | number)[]) {
    return {
      'has-error': this.verifyValidTouch(field),
      'has-feedback': this.verifyValidTouch(field)
    }
  }
}


