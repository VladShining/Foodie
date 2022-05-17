import { Component, OnInit } from '@angular/core';
import { firebaseAuth, fireGoogleAuth } from 'src/environments/firebase';

@Component({
  selector: 'app-root-container',
  templateUrl: './root-container.component.html',
  styleUrls: ['./root-container.component.scss'],
})
export class RootContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  list = [
    {
      title: 'untiti',
      paragraph: ['blablabla', 'blablablllabbl'],
    },
    {
      title: 'untiti',
      paragraph: ['blablabla', 'blablablllabbl'],
    },
    {
      title: 'untiti',
      paragraph: ['blablabla', 'blablablllabbl'],
    },
    {
      title: 'untiti',
      paragraph: ['blablabla', 'blablablllabbl'],
    },
    {
      title: 'untiti',
      paragraph: ['blablabla', 'blablablllabbl'],
    },
    {
      title: 'untiti',
      paragraph: ['blablabla', 'blablablllabbl'],
    },
    {
      title: 'untiti',
      paragraph: ['blablabla', 'blablablllabbl'],
    },
    {
      title: 'untiti',
      paragraph: ['blablabla', 'blablablllabbl'],
    },
    {
      title: 'untiti',
      paragraph: ['blablabla', 'blablablllabbl'],
    },
  ];
}
