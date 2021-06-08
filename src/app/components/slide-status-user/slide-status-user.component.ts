import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-slide-status-user',
  templateUrl: './slide-status-user.component.html',
  styleUrls: ['./slide-status-user.component.scss']
})
export class SlideStatusUserComponent implements OnInit, OnChanges {

  @Input() statusUser:boolean = true;
  @Output() currentStatusUser: EventEmitter<boolean> = new EventEmitter<boolean>();
  statusUserForm: FormGroup;

  constructor() { 
    this.statusUserForm = new FormGroup({
      statusUser: new FormControl()
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.statusUser){
      this.statusUser = changes.statusUser.currentValue;
      this.statusUserForm.controls.statusUser.setValue(this.statusUser);
    }
  }

  ngOnInit(): void {
    this.setControlListeners();
  }

  setControlListeners() {
    this.statusUserForm
    .controls
    .statusUser
    .valueChanges
    .subscribe( data => {
      this.statusUser = data;
      this.currentStatusUser.emit(data);
    })
  }

}
