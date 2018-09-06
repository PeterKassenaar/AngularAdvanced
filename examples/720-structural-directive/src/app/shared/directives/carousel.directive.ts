// Credits: https://netbasal.com/understanding-angular-structural-directives-659acd0f67e
import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

// The context object for our carousel. It contains alle the properties
// we want to make available for binding in the template.
export interface CarouselContext {
  $implicit: string;
  controller?: {
    next: () => void;
    prev: () => void;
  };
}

@Directive({
  selector: '[carousel]'
})
export class CarouselDirective implements OnInit {

  context: CarouselContext | null = null;
  index: number = 0;

  @Input('carouselFrom') images: string[];

  constructor(
    private tpl: TemplateRef<CarouselContext>,
    private vcr: ViewContainerRef
  ) {
  }

  ngOnInit() {
    this.context = {
      $implicit: this.images[0],
      controller: {
        next: () => this.next(),
        prev: () => this.prev()
      }
    };
    this.vcr.createEmbeddedView(this.tpl, this.context);
  }// end ngOnInit

  private next() {
    this.index++;
    if (this.index >= this.images.length) {
      this.index = 0;
    }
    this.context.$implicit = this.images[this.index];
  }

  private prev() {
    this.index--;
    if (this.index < 0) {
      this.index = this.images.length - 1;
    }
    this.context.$implicit = this.images[this.index];
  }
}
