import { Component, AfterViewInit, Renderer2 } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'Navbar-view',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.css', '../../styles.css']
})
export class Navbar implements AfterViewInit {
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const links = document.querySelectorAll('.side-link');

    links.forEach(link => {
      this.renderer.listen(link, 'click', () => {
        this.hideSidebar();
      });
    });
  }

  toggleMenu() {
    document.querySelector('.sidebar')?.classList.toggle('active');
    console.log("Sidebar toggled");
  }

  hideSidebar() {
    document.querySelector('.sidebar')?.classList.remove('active');
    console.log("Sidebar hidden");
  }
}
