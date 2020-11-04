import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipments = ['Habitait dome', 'Drones', 'Food containeres', 'Oxygen tanks']
  constructor() { }

  ngOnInit() {
  }

}
