import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  name = new FormControl('')
  // email = new FormControl('')
  // mobile = new FormControl('')
  // gender = new FormControl('')
  // pokemon = new FormControl('')
  // subscribe= new FormControl('')

  profile = this.fb.group({
    name:[''],
    email:[''],
    mobile:[''],
    gender:[''],
    pokemon:[''],
    subscribe:['']
  })

  ngOnInit(): void {
  }

}
