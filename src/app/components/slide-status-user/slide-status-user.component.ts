import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-slide-status-user',
  templateUrl: './slide-status-user.component.html',
  styleUrls: ['./slide-status-user.component.scss']
})
export class SlideStatusUserComponent implements OnInit {

  @Input() statusUser:boolean;
  @Output() currentStatusUser: EventEmitter<boolean> = new EventEmitter<boolean>();
  statusUserForm: FormGroup;

  constructor() { 
    this.statusUser = true;
    this.statusUserForm = new FormGroup({
      statusUser: new FormControl(
        this.statusUser
      ),
    });
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
