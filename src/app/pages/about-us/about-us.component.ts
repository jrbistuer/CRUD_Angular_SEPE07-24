import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from "../../shared/components/header/header.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

  constructor(private router: Router) {

  }

  goToHome() {
    this.router.navigateByUrl('home');
  }

}
