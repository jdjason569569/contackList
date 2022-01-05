import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/Contact';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private _listContacts: Contact[];

  constructor(private http: HttpClient) { 
    this._listContacts = [];
  }

  get listContacts(): Contact[]{
    return this._listContacts;
  }

  addContact(contact : Contact){
    this._listContacts.push(contact);
  }

  getData(path: string){
  return this.http.get<Contact[]>(path).pipe(map(v=>{
    this._listContacts = v
    return this._listContacts;
  })
  )}
}
