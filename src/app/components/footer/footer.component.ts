import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UpComponent } from '../icon/up/up.component';
import { addIcons } from "ionicons";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, UpComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  title:string = "DJsMusic";

  constructor(private viewportScroller: ViewportScroller){}

  scrollTop(){
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
