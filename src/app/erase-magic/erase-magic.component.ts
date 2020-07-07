import { Component, OnInit, Input, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { range, fromEvent } from "rxjs";
import { map, filter, switchMap, takeUntil, pairwise } from "rxjs/operators";

@Component({
  selector: 'app-erase-magic',
  template: '<canvas #canvas></canvas>',
  styles: ['canvas { border:none;}']
})
export class EraseMagicComponent implements OnInit {

  @ViewChild('canvas', {static: false}) public canvas: ElementRef;

    @Input() public width = 650;
    @Input() public height = 410;

  constructor() { }

  ngOnInit() {
  }

  private cx: CanvasRenderingContext2D;

      public ngAfterViewInit() {
        const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
        this.cx = canvasEl.getContext('2d');

        canvasEl.width = this.width;
        canvasEl.height = this.height;

        this.cx.lineWidth = 5;
        this.cx.lineCap = 'round';
        this.cx.strokeStyle = '#fff';

        this.captureEvents(canvasEl);
      }

      private captureEvents(canvasEl: HTMLCanvasElement) {
        // this will capture all mousedown events from the canvas element
        fromEvent(canvasEl, 'mousedown')
          .pipe(
            switchMap((e) => {
              // after a mouse down, we'll record all mouse moves
              return fromEvent(canvasEl, 'mousemove')
                .pipe(
                  // we'll stop (and unsubscribe) once the user releases the mouse
                  // this will trigger a 'mouseup' event
                  takeUntil(fromEvent(canvasEl, 'mouseup')),
                  // we'll also stop (and unsubscribe) once the mouse leaves the canvas (mouseleave event)
                  takeUntil(fromEvent(canvasEl, 'mouseleave')),
                  // pairwise lets us get the previous value to draw a line from
                  // the previous point to the current point
                  pairwise()
                )
            })
          )
          .subscribe((res: [MouseEvent, MouseEvent]) => {
            const rect = canvasEl.getBoundingClientRect();

            // previous and current position with the offset
            const prevPos = {
              x: res[0].clientX - rect.left,
              y: res[0].clientY - rect.top
            };

            const currentPos = {
              x: res[1].clientX - rect.left,
              y: res[1].clientY - rect.top
            };

            // this method we'll implement soon to do the actual drawing
            this.drawOnCanvas(prevPos, currentPos);
          });
      }

      private drawOnCanvas(prevPos: { x: number, y: number }, currentPos: { x: number, y: number }) {
        if (!this.cx) { return; }

        this.cx.beginPath();

        if (prevPos) {
          this.cx.moveTo(prevPos.x, prevPos.y); // from
          this.cx.lineTo(currentPos.x, currentPos.y);
          this.cx.stroke();
        }
      }

}
