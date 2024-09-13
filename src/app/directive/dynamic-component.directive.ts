import {
  Directive,
  Input,
  ViewContainerRef,
  OnInit,
  inject,
} from '@angular/core';

@Directive({
  selector: '[dynamicComponent]',
  standalone: true,
})
export class DynamicComponentDirective implements OnInit {
  @Input() component: any;
  @Input() loadComponent: any;
  // @Input() compMapping: any;
  private viewContainerRef = inject(ViewContainerRef);

  async ngOnInit() {
    // const getComp = this.compMapping[this.component];
    const comp = await this.loadComponent.componentMapping[this.component]();
    this.viewContainerRef.clear();
    // Dynamically create the standalone component
    this.viewContainerRef.createComponent(comp);
  }
}
