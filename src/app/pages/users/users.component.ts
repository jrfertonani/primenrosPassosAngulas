import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
 // users: String[] = ['Ademir', 'fertonani','Jackeline']

 userSelecionado: User | undefined;
 userForm: FormGroup = new FormGroup({});

 constructor(private fb: FormBuilder, private userService: UserService) {};

 ngOnInit(): void {
   this.initializeForm();
 }


 initializeForm (){
   this.userForm = this.fb.group({
    nome: ['', [Validators.required, Validators.maxLength(250)]],
    idade: ['', [Validators.required, Validators.min(0), Validators.max(110)]]
 });
 }

 SubmitiForm(){
  if (this.userForm.valid){
    this.users.push(this.userForm.value);
    this.userForm.reset;
  }

 }

 users: User[] = [
  {
    nome: 'Ademir',
    idade: 55
  },
  {
    nome: 'Elida',
    idade: 54
  },
  {
    nome: 'Leticia',
    idade: 33
  },
  {
    nome: 'Junior',
    idade: 35
  },
 ];
 infoUserSelecionado(user: User){
    this.userSelecionado = user;
    this.userService.setUser(user);
 }

}
