import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-btn-scroll',
  standalone: true,
  imports: [],
  templateUrl: './btn-scroll.component.html',
  styleUrls: ['./btn-scroll.component.css']
})
export class BtnScrollComponent implements OnInit, OnDestroy {
  private scrollToTopButton: HTMLElement | null = null;
  private scrollListener: (() => void) | null = null;
  constructor(private renderer: Renderer2) {}
  ngOnInit(): void {
    this.scrollToTopButton = document.getElementById("scrollToTop");
    if (this.scrollToTopButton) {
      this.scrollListener = this.renderer.listen('window', 'scroll', () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          if (this.scrollToTopButton) {
            this.scrollToTopButton.style.display = "block";
          }
        } else {
          if (this.scrollToTopButton) {
            this.scrollToTopButton.style.display = "none";
          }
        }
      });
      this.renderer.listen(this.scrollToTopButton, 'click', () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });
    }
  }
  ngOnDestroy(): void {
    if (this.scrollListener) {
      this.scrollListener();
    }
  }
}
