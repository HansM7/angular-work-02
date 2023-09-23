import { Component, Input } from '@angular/core';
import { Student } from 'src/app/interfaces/student.interface';

@Component({
  selector: 'app-row-pure',
  templateUrl: './row-pure.component.html',
  styleUrls: ['./row-pure.component.scss'],
})
export class RowPureComponent {
  @Input() students: Student[] = [];
}
