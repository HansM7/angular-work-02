import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Student } from 'src/app/interfaces/student.interface';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss'],
})
export class ModalEditComponent {
  @Input() student: Student = {
    id: 1,
    name: 'string',
    email: 'string',
    age: 20,
    enabled: true,
  };

  constructor(public activeModal: NgbActiveModal) {
    console.log(this.student);
  }

  closeModal() {
    this.activeModal.close('Modal cerrado');
  }

  saveChanges() {
    this.activeModal.close('Cambios guardados');
  }
}
