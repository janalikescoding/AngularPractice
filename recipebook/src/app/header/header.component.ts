import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output() navigation = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onTabClick(tab : string){
    this.navigation.emit(tab);
  }

}
