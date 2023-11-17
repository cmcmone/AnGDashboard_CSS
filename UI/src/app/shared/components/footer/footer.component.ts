import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  test : Date = new Date();
  public flatlogic: string = 'https://flatlogic.com/';
  public flatlogicAbout: string = 'https://flatlogic.com/about';
  public flatlogicBlog: string = 'https://flatlogic.com/blog';
}
