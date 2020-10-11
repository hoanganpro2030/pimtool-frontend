import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  projectForm = new FormGroup({
    projectNumber: new FormControl('', [Validators.required]),
    projectName: new FormControl('', [Validators.required]),
    customer: new FormControl('', [Validators.required]),
    group: new FormControl('new', [Validators.required]),
    members: new FormControl(''),
    status: new FormControl('', [Validators.required]),
    startDay: new FormControl('', [Validators.required]),
    endDay: new FormControl(''),
  })
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.projectForm.invalid);
  }

}
