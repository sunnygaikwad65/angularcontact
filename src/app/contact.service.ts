import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Contact from './Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url='http://localhost:8888/contacts'
  constructor(private http:HttpClient) { }

  addContact(c:Contact){
    this.http.post(this.url,c).subscribe(res=>console.log("DONE"))
  }

  getContacts(){
    return this.http.get(this.url);
  }

  getContactById(id:String){
    return this.http.get(`${this.url}/${id}`);
  }

  editContact(id:String,c:Contact){
    this.http.put(`${this.url}/${id}`,c).subscribe(res=>console.log("DONE"))
  }
}
