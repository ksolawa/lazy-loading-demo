import {CommonModule} from '@angular/common';
import {Component, Input, NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'lazy-cat-presenter',
  template: `
    <mat-card>
      <img src='{{"assets/cat" + catIndex + ".jpg"}}'/>
    </mat-card>
  `,
  styleUrls: ['./lazy-cat-presenter.component.scss'],
})
export class LazyCatPresenterComponent {

  @Input() catIndex = 0;

}

@NgModule({
  declarations: [LazyCatPresenterComponent],
  imports: [BrowserModule, CommonModule, MatCardModule]
})
class CatPresenterModule {
}
