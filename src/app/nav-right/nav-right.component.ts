import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.css']
})
export class NavRightComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  changeColorBlueDark(){
  document.getElementById("addTextId").style.color = "#2980b9";
  }

  changeColorRedDark(){
    document.getElementById("addTextId").style.color = "#c0392b";
   }

  changeColorBbDark(){
    document.getElementById("addTextId").style.color = "#34495e";
   }
  changeColorGrayLight(){
    document.getElementById("addTextId").style.color = "#95a5a6";
  }

  changeColorBlueLight(){
    document.getElementById("addTextId").style.color = "#16a085";
  }

  changeColorOrangeDark(){
    document.getElementById("addTextId").style.color = "#c23616";
    }

    changeColorYellowDark(){
      document.getElementById("addTextId").style.color = "#e1b12c";
     }

    changeColorPinkDark(){
      document.getElementById("addTextId").style.color = "#0652DD";
     }
    changeColorPurpleDark(){
      document.getElementById("addTextId").style.color = "#6F1E51";
    }

    changeColorWhite(){
      document.getElementById("addTextId").style.color = "#ffffff";
    }

    changeColorWhiteBlue(){
       document.getElementById("addTextId").style.color = "#bae8e8";
      }

     changeColorBling(){
       document.getElementById("addTextId").style.color = "#00adb5";
      }
     changeColorBlueNight(){
       document.getElementById("addTextId").style.color = "#393e46";
     }

     changeColorOrange(){
       document.getElementById("addTextId").style.color = "#f33535";
     }
}
