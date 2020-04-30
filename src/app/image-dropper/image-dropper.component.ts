import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import Cropper from 'cropperjs';
import { AngularDraggableModule } from 'angular2-draggable';
import $ from 'jquery';

@Component({
  selector: 'app-image-dropper',
  templateUrl: './image-dropper.component.html',
  styleUrls: ['./image-dropper.component.css']
})
export class ImageDropperComponent implements OnInit {

  @ViewChild("image", {static: false})
    public imageElement: ElementRef;

    @Input("src")
    public imageSource: string;

    public imageDestination: string;
    private cropper: Cropper;

    constructor() {
      this.imageDestination= "";
    }

    public ngOnInit() {
    }

    public ngAfterViewInit(){
      this.cropper = new Cropper(this.imageElement.nativeElement, {
        zoomable: true,
        scalable: true,
        aspectRatio: 1,
        crop: () => {
          const canvas = this.cropper.getCroppedCanvas();
          this.imageDestination = canvas.toDataURL("image/png");
        }
      });
    }


}
