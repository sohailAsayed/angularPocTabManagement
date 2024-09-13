import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DynamicProcessingService } from '../../services/dynamic-processing.service';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';
import { Child3Component } from '../child3/child3.component';
import { DynamicComponentDirective } from '../../directive/dynamic-component.directive';
import { LoadComponentService } from '../../services/load-component.service';
@Component({
  selector: 'app-demo1',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    MatTabsModule,
    CommonModule,
    DynamicComponentDirective,
  ],
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.scss',
})
export class Demo1Component {
  constructor(public loadComponentServcie: LoadComponentService) {}
  tabs: any = [
    { name: 'FIELD_FAMILIARIZATION', component: 'Child1Component' },
    {
      name: 'OJT',
      component: 'Child2Component',
    },
    {
      name: 'Certification',
      component: 'Child3Component',
    },
  ];
  changePage(event: any) {
    // this.redirect.redirectProcessing(
    //   this.tabs[event.index].route,
    //   this.tabs[event.index].queryParams
    // );
    // this.changeDetect.detectChanges();
  }
}
