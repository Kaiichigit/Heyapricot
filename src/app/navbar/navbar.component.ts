import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  classes = ['navbar']
  setClasses =(classArray: string[]) => this.classes = classArray
  toggleExpand =() => {
    let classes = this.classes;

    
    classes = (()=> {
      if(classes.includes('expanded')) return classes.filter(elem => elem !== 'expanded')

      return [...this.classes, 'expanded']
    })()

    this.setClasses(classes)
  }
}
