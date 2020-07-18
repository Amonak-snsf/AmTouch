import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import $ from "jquery";
import Cropper from 'cropperjs';


@Component({
  selector: 'app-white-paper',
  templateUrl: './white-paper.component.html',
  styleUrls: ['./white-paper.component.css']
})
export class WhitePaperComponent implements OnInit {

   image: File;
   output: any;
    constructor() {

      }

    ngOnInit() {
    }

    validAddText(){
        document.getElementById("addTextId").style.border = "none";
        document.getElementById("addTextId").contentEditable = "false";
      }

      editTextAgain(){
        document.getElementById("addTextId").contentEditable = "true";
        document.getElementById("addTextId").style.borderBottom = "2px solid black";
      }

      changeFont(){
      var font = (document.getElementById("fontSelect") as HTMLInputElement).value;
      document.getElementById("addTextId").style.fontFamily = font;
      }

      changeSize(){
      var size = (document.getElementById("sizeSelect") as HTMLInputElement).value;
      document.getElementById("addTextId").style.fontSize = size+"px";
      }

    cropFunction(){
      document.getElementById("cropperId").style.zIndex = "100";
      document.getElementById("drawerId").style.zIndex = "1";
      document.getElementById("writerId").style.zIndex = "1";
      document.getElementById("eraserId").style.zIndex = "1";
    }

    drawFunction(){
      document.getElementById("cropperId").style.zIndex = "1";
      document.getElementById("drawerId").style.zIndex = "100";
      document.getElementById("writerId").style.zIndex = "1";
      document.getElementById("eraserId").style.zIndex = "1";
    }

    writeFunction(){
      document.getElementById("cropperId").style.zIndex = "1";
      document.getElementById("drawerId").style.zIndex = "1";
      document.getElementById("writerId").style.zIndex = "100";
      document.getElementById("eraserId").style.zIndex = "1";
    }

    eraseFunction(){
      document.getElementById("cropperId").style.zIndex = "1";
      document.getElementById("drawerId").style.zIndex = "1";
      document.getElementById("writerId").style.zIndex = "1";
      document.getElementById("eraserId").style.zIndex = "100";
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
