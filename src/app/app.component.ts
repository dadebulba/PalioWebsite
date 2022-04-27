import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PalioWebsite';
  isBurgerOpen = false
  isSubOpen = true

  constructor(private router: Router) {

  }

  public toggleMenu() {
    console.log("Toggle menu", this.isBurgerOpen);

    this.isBurgerOpen = !this.isBurgerOpen

  }

  scroll(el: string) {
    if (this.router.routerState.snapshot.url != '/') {
      this.router.navigate(['/']).then(() => {
        const element = document.querySelector(el)
        element ? element.scrollIntoView({ behavior: "smooth" }) : null;
      })
    }
    else {
      const element = document.querySelector(el)
      element ? element.scrollIntoView({ behavior: "smooth" }) : null;
    }

    this.toggleMenu()
  }
}
