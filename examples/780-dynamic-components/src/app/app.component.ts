// Credits: Netanel Basal: https://netbasal.com/dynamically-creating-components-with-angular-a7346f4a982d
// Rajat S: https://blog.bitsrc.io/how-to-build-dynamic-components-in-angular-6-41f50abddc64
// Use case for dynamic components:
// - dialog boxes
// - dynamic forms
// - Tabs
// - components with generic templates
// - ...
import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  OnDestroy,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

// import the skeleton for our dynamic component
import {AlertComponent} from './alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnDestroy {
  // The default return from the ViewChild decorator is the component instance or the DOM element
  // but in our case, we need to get the element as ViewContainerRef.
  @ViewChild('alertContainer', {read: ViewContainerRef}) container;
  @ViewChild('msg') msg: ElementRef;
  componentRef: ComponentRef<AlertComponent>;


  constructor(private resolver: ComponentFactoryResolver) {
    // 1. The ComponentFactoryResolver service exposes one primary method, resolveComponentFactory.
    // 2. The resolveComponentFactory() method takes a component and returns a ComponentFactory.
    // 3. A ComponentFactory is an object that knows how to create components (hence, a 'Factory')
  }

  createComponent(type: string) {
    this.container.clear(); // clear current container, not neccessary if you want multiple components
    const factory: ComponentFactory<AlertComponent> = this.resolver.resolveComponentFactory(AlertComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.type = type; // get the type (success|danger) from the parameter
    this.componentRef.instance.msg = this.msg.nativeElement.value; // read msg from the textbox

    // The dynamic component exposes an @Output() EventEmitter that we can subscribe to
    this.componentRef.instance.closed.subscribe(() => {
      console.log('destroyed...');
      this.componentRef.destroy();
    });

    // Optionally - let the component destroy itself after a 2,5s delay
    // setTimeout(() => {
    //   this.componentRef.destroy(); // or do some fancy fadeout animation
    // }, 2500);
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }
}
