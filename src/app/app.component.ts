import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PalioWebsite';
  isBurgerOpen = false
  isSubOpen = true

  public toggleMenu() {
      console.log("Toggle menu", this.isBurgerOpen);

      this.isBurgerOpen = !this.isBurgerOpen

  }
}
