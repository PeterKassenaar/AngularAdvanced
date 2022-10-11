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
    ElementRef,
    ViewChild,
    ViewContainerRef
} from '@angular/core';

// import the skeleton for our dynamic component
import {AlertComponent} from './alert/alert.component';

// The types of messages that we accept (see createComponent() further down).
type msgType = 'success' | 'danger' | 'warning';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    // The default return from the ViewChild decorator is the component instance or the DOM element
    // but in our case, we need to get the element as ViewContainerRef.
    @ViewChild('alertContainer', {read: ViewContainerRef}) container;
    @ViewChild('msg') msg: ElementRef;


    constructor(private resolver: ComponentFactoryResolver) {
        // 1. The ComponentFactoryResolver service exposes one primary method, .resolveComponentFactory().
        // 2. The .resolveComponentFactory() method takes a component and returns a ComponentFactory.
        // 3. A ComponentFactory is an object that knows how to create components (hence, a 'Factory')
    }

    createComponent(type: msgType = 'success') {
        // 1. clear current container, not neccessary if you want multiple components.
        this.container.clear();

        // 2. Create a factory (remember: the factory can create a component).
        const factory: ComponentFactory<AlertComponent> = this.resolver.resolveComponentFactory(AlertComponent);

        // 3. Create the component using the factory, assign it to a reference variable componentRef.
        const newComponentRef = this.container.createComponent(factory);

        // 4. Set its type and message
        newComponentRef.instance.type = type;
        newComponentRef.instance.msg = this.msg.nativeElement.value;

        // 5. The dynamic component exposes an @Output() EventEmitter that we can subscribe to
        const sub = newComponentRef.instance.closed.subscribe(() => {
            console.log('destroyed...');
            sub.unsubscribe(); // unsubscribe() to prevent memoryleaks
            newComponentRef.destroy();
        });

        // 6. Optional - let the component destroy itself after a 2,5s delay
        // setTimeout(() => {
        //   newComponentRef.destroy(); // or do some fancy fadeout animation
        // }, 2500);
    }
}
