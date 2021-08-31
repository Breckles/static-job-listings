import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

export const showHideTrigger = [
  trigger('showHideTrigger', [
    state(
      'hidden',
      style({
        opacity: 0,
        height: 0,
      })
    ),

    state(
      'visible',
      style({
        opacity: 1,
        'min-height': '65px',
      })
    ),

    transition('hidden => visible', [animate('200ms ease-in')]),

    transition('visible => hidden', [animate('200ms ease-in')]),
  ]),
];
