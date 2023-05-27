import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

export interface IgetData{
  id:number,
  username:string;
  email:string,
  message:string
}

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

 url='';
 editUserById:number=1;
 body={};
  constructor(private http:HttpClient) {}

  // getAllUserFunction
  getAllUser(){
    this.url='http://localhost:3000/getAllUser';
     return this.http.get<IgetData[]>(this.url);
  }
  
  // getUserById
   editUser(){
    this.url=`http://localhost:3000/getUserById/${this.editUserById}`;
    return this.http.get<IgetData[]>(this.url);
  }


  // createUser
  createUser(){
    this.url='http://localhost:3000/postUser';
    return this.http.post(this.url,this.body);
  }

// editUser
  updateUser(){
    this.url=`http://localhost:3000/updateUser/${this.editUserById}`;
    return this.http.put(this.url,this.body);
  }

  // deleteUser
  deleteUser(){
    this.url='http://localhost:3000/deleteUserById';
    return this.http.put(this.url,this.body);
  }

}
