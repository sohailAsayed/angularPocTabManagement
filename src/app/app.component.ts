import { Component } from '@angular/core';
import { LoadComponentService } from './services/load-component.service';
import { DynamicProcessingService } from './services/dynamic-processing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dummyAngular17Project';
  hideMenu: boolean = false;
  field_familiarization: any = {
    demo_component: {
      route: {
        url: 'demo',
        queryParams: { identifer: 'create_batch', name: 'Sohail' },
      },
      title: 'Create Batch',
      component_redirection: 'demo_component',
    },
  };
  constructor(
    private loadComponentService: LoadComponentService,
    private dynamicProcessingService: DynamicProcessingService
  ) {}
  // async dynamicallyLoad(ve?: any) {
  //   const comp =
  //     await this.loadComponentService.componentMapping.demo_component();

  //   this.dynamicProcessingService.openDialog(comp);
  // }
  async dynamicallyLoad(identifier?: keyof typeof this.field_familiarization) {
    if (identifier && this.field_familiarization[identifier].route) {
      this.hideMenu = true;
      this.dynamicProcessingService.redirectProcessing(
        this.field_familiarization[identifier]?.route?.url,
        this.field_familiarization[identifier]?.route?.queryParams
      );
    } else if (
      identifier &&
      this.field_familiarization[identifier].component_redirection
    ) {
      const identif =
        this.field_familiarization[identifier].component_redirection;
      const comp = await this.loadComponentService.componentMapping[identif]();

      this.dynamicProcessingService.openDialog(
        comp,
        null,
        undefined,
        '700px',
        '500px'
      );
      return;
    }
  }
}
