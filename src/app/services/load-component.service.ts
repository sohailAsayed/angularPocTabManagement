import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadComponentService {
  componentMapping: any = {
    demo_component: async () => {
      const { Demo1Component } = await import(
        '../Components/demo1/demo1.component'
      );
      return Demo1Component;
    },
    Child1Component: async () => {
      const { Child1Component } = await import(
        '../Components/child1/child1.component'
      );
      return Child1Component;
    },
    Child2Component: async () => {
      const { Child2Component } = await import(
        '../Components/child2/child2.component'
      );
      return Child2Component;
    },
    Child3Component: async () => {
      const { Child3Component } = await import(
        '../Components/child3/child3.component'
      );
      return Child3Component;
    },
    // batch_generic_comp: async () => {
    //   const { Demo1Component } = await import(
    //     '../Components/demo1/demo1.component'
    //   );
    //   return Demo1Component;
    // },
  };

  constructor() {}
}
