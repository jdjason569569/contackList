import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/Contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {

  public listContacts: Contact[];
  constructor(private contactService: ContactService) {
    this.listContacts = contactService.listContacts;
   }

  ngOnInit(): void {
  }

}
