import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  Menu(e:any){
    let list = document.querySelector('ul')

    e.name === 'menu' ? (e.name = "close", list?.classList.add('top-[80px]'), list?.classList.add('opacity-100')) :(e.name = "menu", list?.classList.remove('top-[80px]'), list?.classList.remove('opacity-100'))
  }
}
