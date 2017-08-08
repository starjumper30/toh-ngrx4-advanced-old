import {
  ChangeDetectionStrategy, Component, EventEmitter, Input,
  Output
} from '@angular/core';

import {Hero} from '../hero';

@Component({
  selector: 'my-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardViewComponent {
  @Input() heroes: Hero[];
  @Output() heroClicked: EventEmitter<Hero> = new EventEmitter<Hero>();

  gotoDetail(hero: Hero): void {
    this.heroClicked.emit(hero);
  }
}
