import { Component, ViewChild } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  
  @ViewChild(NavbarComponent) navbarComponent: NavbarComponent | undefined;

  
  myFunc = () => {
    this.navbarComponent?.toggleExpand()
  }
  currentClass = 0
  iconSrc = '../../assets/true.png'
  rectangleClasses = ['rectanguloUno', 'rectanguloDos', 'rectanguloTres']
  rectangleClass = ()=> this.rectangleClasses[this.currentClass]
}
