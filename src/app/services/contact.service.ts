import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private _listContacts: Contact[];

  constructor() { 
    this._listContacts = [];
  }

  get listContacts(): Contact[]{
    return this._listContacts;
  }

  addContact(contact : Contact){
    this._listContacts.push(contact);
  }
}
