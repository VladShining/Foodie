import {
  trigger,
  transition,
  style,
  query,
  animateChild,
  animate,
  group,
} from '@angular/animations';

export const fade = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter', [style({ opacity: 0 }), style({ position: 'absolute' })]),
    query(':enter', [animate('1000ms', style({ opacity: 1 }))]),
    query(':leave', [style({ opacity: 1 }), style({ position: 'absolute' })]),
    query(':leave', [animate('1000ms', style({ opacity: 0 }))]),
  ]),
]);
export const home = trigger('routeAnimations', [
  transition('<=> *', [
    query(':enter', [style({ opacity: 0 }), style({ position: 'absolute' })]),
    query(':enter', [animate('1000ms', style({ opacity: 1 }))]),
    query(':leave', [style({ opacity: 1 }), style({ position: 'absolute' })]),
    query(':leave', [animate('1000ms', style({ opacity: 0 }))]),
  ]),
]);
