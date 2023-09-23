import { Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { dataStudents } from 'src/app/constants/data-students';
import { ModalEditComponent } from '../pures/modal-edit/modal-edit.component';
import { Student } from 'src/app/interfaces/student.interface';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss'],
})
export class ListComponentComponent {
  students = dataStudents;
  typeTable = '';

  constructor(public modalService: NgbModal) {}

  deleteStudent(id: number): void {
    const response = this.students.filter((student) => student.id !== id);
    this.students = response;
  }
  changeTypeTable(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.typeTable = target.value;
  }

  openModal(student: Student) {
    const modalRef: NgbModalRef = this.modalService.open(ModalEditComponent, {
      size: 'md',
    });
    modalRef.componentInstance.student = student;
  }
}
