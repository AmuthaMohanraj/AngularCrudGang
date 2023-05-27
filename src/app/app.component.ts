import { Component,OnInit } from '@angular/core';
import { ServiceService,IgetData } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`<h2>seshika</h2>`,
  styleUrls: ['./app.component.scss']
})

export class AppComponent  implements OnInit {
  title = 'AngularCrud';

  reciveData:IgetData[]=[];
  post={}

  constructor(public s:ServiceService){
  }

  ngOnInit(): void {
  this.getAllUsers()  
  }

// getAllUsers
  getAllUsers(){
    this.s.getAllUser().subscribe((data:IgetData[]) => {
      this.reciveData = data;
      console.log(this.reciveData);
    });
  }

  // createUser
  createUser(){
    this.s.createUser().subscribe((data)=>{
      console.log('createUserclient');
        
    })
  }

  // editUser
  editUser(){
     this.s.editUser().subscribe((data:IgetData[]) => {
      this.reciveData = data;
      console.log(this.reciveData);
     })
 }

//  updateUser
 updateUser(){
  this.s.updateUser().subscribe(()=>{
    console.log('updateclient');
  })
 }

//  deleteUser
 deleteUser(){
  this.s.deleteUser().subscribe(()=>{
    console.log('deleteclient');
  })
}

}