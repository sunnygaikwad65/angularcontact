import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contactForm:any;
  id:any=null;
  contact:any={};
  constructor(private fb:FormBuilder, private contactService:ContactService,
    private router:Router,
    private route:ActivatedRoute) {
    this.createForm()
   }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      if(params['id']){
        this.id=params['id'];
        this.getContactById(this.id)
      }
    })
  }

  createForm(){
    this.contactForm=this.fb.group({
      name:['',Validators.required],
      phone_number:['',Validators.required],
    })
  }

  addEditContact(name:String,phone_number:String){
    if(this.id){
      this.contactService.editContact(this.id,{name,phone_number});
      this.router.navigate(['contact'])
    }else{
      
    this.contactService.addContact({name,phone_number});
    this.router.navigate(['contact'])

    }
  }

  getContactById(id:String){
    this.contactService.getContactById(id).subscribe((res:any)=>{
      if(res.success){
        console.log(this.contactForm)
        this.contactForm.setValue({name:res.data.name, phone_number:res.data.phone_number})
      }
    })
  }

}
