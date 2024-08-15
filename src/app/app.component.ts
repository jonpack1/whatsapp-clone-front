import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  NgbAccordionBody,
  NgbAccordionButton,
  NgbAccordionCollapse,
  NgbAccordionDirective,
  NgbAccordionHeader,
  NgbAccordionItem,
  NgbToast
} from "@ng-bootstrap/ng-bootstrap";
import {FaIconComponent, FaIconLibrary} from "@fortawesome/angular-fontawesome";
import { fontAwesomeIcons } from './shared/font-awesome-icons';  // Ensure this path is correct




//import { NavbarComponent } from './layout/navbar/navbar.component';
//import { HeaderComponent } from './layout/header/header.component';
//import { SendComponent } from './messages/send/send.component';
//import { MessagesComponent } from './messages/messages.component';


@Component({
  selector: 'app-root',
  standalone: true,
   imports: [RouterOutlet, NgbAccordionBody, NgbAccordionButton, NgbAccordionCollapse,
     NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbToast, FaIconComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'whatsapp-clone-front';



  private faIconLibrary: FaIconLibrary = inject(FaIconLibrary);

  ngOnInit(): void {
    this.initFontAwesome();
  }

  private initFontAwesome(): void {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
}



