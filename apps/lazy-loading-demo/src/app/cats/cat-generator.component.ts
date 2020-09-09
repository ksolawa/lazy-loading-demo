import {Component, ComponentFactoryResolver, ComponentRef, Injector, ViewChild, ViewContainerRef} from '@angular/core';
import {LazyCatPresenterComponent} from './lazy-cat-presenter.component';

@Component({
  selector: 'cat-generator',
  template: `
    <button (click)="onShowCatClick()">Pokaż kota</button>
    <ng-container #catPresenterContainer></ng-container>
<!--        <lazy-cat-presenter [catIndex]="catIndex"></lazy-cat-presenter>-->
  `,
  styleUrls: ['./cat-generator.component.scss'],
})
export class CatGeneratorComponent {

  @ViewChild('catPresenterContainer', {read: ViewContainerRef}) catPresenterContainer: ViewContainerRef;
  private componentRef: ComponentRef<LazyCatPresenterComponent>;

  constructor(private cfr: ComponentFactoryResolver,
              private injector: Injector) {
  }

  async onShowCatClick(): Promise<void> {
    const {LazyCatPresenterComponent} = await import('./lazy-cat-presenter.component');
    this.componentRef?.destroy();
    this.componentRef = this.catPresenterContainer.createComponent(
      this.cfr.resolveComponentFactory(LazyCatPresenterComponent), null, this.injector);
    this.componentRef.instance.catIndex = Math.floor(Math.random() * 3);
  }

}
