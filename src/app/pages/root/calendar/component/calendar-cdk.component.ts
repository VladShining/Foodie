import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop connected sorting group
 */
@Component({
  selector: 'app-calendar-cdk',
  templateUrl: './calendar-cdk.html',
  styleUrls: ['./calendar-cdk.scss'],
})
export class CalendarCdk {}
