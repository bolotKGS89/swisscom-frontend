import { Component, Input, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-toggle-form',
  templateUrl: './toggle-form.component.html',
  styleUrls: ['./toggle-form.component.scss']
})
export class ToggleFormComponent implements OnInit {

  @Input()
  actionType!: string;

  public color: ThemePalette;
  public isChecked: boolean = true;
  public toggleForm: FormGroup = new FormGroup({
    technicalName: new FormControl('', [Validators.required]),
    expiryDate: new FormControl(new Date()),
    description: new FormControl('', [Validators.required]),
    isInverted: new FormControl(''),
    customerIds: new FormControl('', [Validators.required])
  });;

  constructor() { }

  get technicalName() { return this.toggleForm.get('technicalName'); }
  get description() { return this.toggleForm.get('description'); }
  get customerIds() { return this.toggleForm.get('customerIds'); }

  ngOnInit(): void {
    this.color = 'primary';
  }

  onSubmit(): void {

  }

}
