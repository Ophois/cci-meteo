import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Formulaire de recherche de ville.
 */
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  /**
   * Paramètre d'initialisation reçu de l'élément parent.
   */
  @Input() init!: string;

  /**
   * Evènement retourné vers l'élément parent.
   */
  @Output() submitted: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Objet formulaire (dans la balise html form)
   */
  public form!: FormGroup;

  /**
   * constructeur. Création d'un formBuilder.
   * @param {FormBuilder} fb FormBuilder.
   */
  constructor(private fb: FormBuilder) { }

  /**
   * Initialisation de la page.
   *
   * Création de l'objet formulaire, avec valeur par défaut
   * et validateur.
   */
  ngOnInit(): void {
    this.form = this.fb.group({
      ville: [this.init, Validators.required]
    });
  }

  /**
   * Soumission du formulaire. Emission d'un évènement qui devra
   * être intercepté par l'élément parent
   * @example (submitted)="fonction($event)".
   */
  onSubmit(): void {
    this.submitted.emit(this.form.value);
  }

}
