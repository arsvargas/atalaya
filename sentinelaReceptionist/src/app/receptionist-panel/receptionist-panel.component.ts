import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receptionist-panel',
  templateUrl: './receptionist-panel.component.html',
  styleUrls: ['./receptionist-panel.component.css']
})



export class ReceptionistPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  search(event:Event): void {
    const target = event.target as HTMLInputElement
    const value = target.value

  }

}
