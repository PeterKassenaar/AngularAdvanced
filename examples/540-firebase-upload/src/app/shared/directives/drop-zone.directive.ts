import {Directive, HostListener, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[dropZone]'
})
export class DropZoneDirective {

  @Output() dropped = new EventEmitter<FileList>();
  @Output() hovered = new EventEmitter<boolean>();

  constructor() {
  }


  // Listen to Drop events from the host and emit its values
  @HostListener('drop', ['$event'])
  onDrop(event) {
    event.preventDefault();
    this.dropped.emit(event.dataTransfer.files);
    this.hovered.emit(false);
  }

  // Emit event if the user drags a file over the directive
  @HostListener('dragover', ['$event'])
  onDragOver(event) {
    event.preventDefault();
    this.hovered.emit(true);
  }

  // Emit event if the user stops dragging/leaves the directive
  @HostListener('dragleave', ['$event'])
  onDragLeave(event) {
    event.preventDefault();
    this.hovered.emit(false);
  }

}
