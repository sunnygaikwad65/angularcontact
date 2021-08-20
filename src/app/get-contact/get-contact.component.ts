import { Component, OnInit } from '@angular/core';
import Contact from '../Contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-get-contact',
  templateUrl: './get-contact.component.html',
  styleUrls: ['./get-contact.component.css']
})
export class GetContactComponent implements OnInit {

  contacts:Contact[]=[]
  constructor(private contactService:ContactService) {

   }

  ngOnInit() {
    this.getContact()
  }

  getContact(){
    this.contactService.getContacts().subscribe((resp:any)=>{
      this.contacts = resp.data
    })
  }
}
