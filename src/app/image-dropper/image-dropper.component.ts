import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import Cropper from 'cropperjs';
import { AngularDraggableModule } from 'angular2-draggable';


declare const $ : any;


enum AngularResizeElementDirection {
    TOP = 'top',
    TOP_RIGHT = 'top-right',
    RIGHT = 'right',
    BOTTOM_RIGHT = 'bottom-right',
    BOTTOM = 'bottom',
    BOTTOM_LEFT = 'bottom-left',
    LEFT = 'left',
    TOP_LEFT = 'top-left'
}

interface AngularResizeElementEvent {
    currentWidthValue: number;
    currentHeightValue: number;
    originalWidthValue: number;
    originalHeightValue: number;
    differenceWidthValue: number;
    differenceHeightValue: number;
    originalEvent: MouseEvent;
}

@Component({
  selector: 'app-image-dropper',
  templateUrl: './image-dropper.component.html',
  styleUrls: ['./image-dropper.component.css']
})
export class ImageDropperComponent implements OnInit {

 image : File;
 output: any;
 
  @ViewChild("image", {static: false})
    public imageElement: ElementRef;

    @Input("src")
    public imageSource:any;

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


  public readonly AngularResizeElementDirection = AngularResizeElementDirection;
     public data: any = {
     'width': 400,
     'height': 300
     };

    @ViewChild('container',  {read: ElementRef, static: false})
    public readonly containerElement;

  function() {

    $('#cropped').resizable()
    $('#resizeme').resizable({
     direction: 'horizontal'
    })
  	$('#one').resizable({
  		direction: 'right'
    })
  	$('#two').resizable({
  		direction: 'bottom',
      stop: function() {
      	alert('Yay!');
      }
    })
  }

    public onResize(evt: AngularResizeElementEvent): void {
        this.data.width = evt.currentWidthValue;
        this.data.height = evt.currentHeightValue;
        console.log(this.data.width);
      }

      readImg(img: File) {
        let reader = new FileReader();
        reader.onload = () => {
          let data = reader.result;
          this.output = data;
        };
        reader.readAsDataURL(img);
      }
      
      onFileChanged(event) {
        this.image = event.target.files[0];
        this.readImg(this.image);
      }
}
