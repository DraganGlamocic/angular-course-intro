import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data = {
  title: 'The No Clicking Game',
    displayMessage: 'No Clicking!'
}

onLogoClicked() {
    alert('Naughty, naughty...');
}

onKeyUp(newTitle:string){
    this.data.title = newTitle;
}

}
