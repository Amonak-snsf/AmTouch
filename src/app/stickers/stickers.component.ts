import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stickers',
  templateUrl: './stickers.component.html',
  styleUrls: ['./stickers.component.css']
})
export class StickersComponent implements OnInit {

  show = false;

  constructor() { }

  ngOnInit() {
  }

  buyStickFunction(){
  this.show = !this.show;
  }

  comStickFunction(){
  document.getElementById("stick1").style.display = "block";  
  }

  commerceStickFunction(){
    document.getElementById("stick2").style.display = "block";  
    }

    shopStickFunction(){
    document.getElementById("stick3").style.display = "block";  
    }

    comshopStickFunction(){
    document.getElementById("stick4").style.display = "block";  
    }

    comshop2StickFunction(){
    document.getElementById("stick5").style.display = "block";  
    }

    comshop3StickFunction(){
    document.getElementById("stick6").style.display = "block";  
    }

    comshop4StickFunction(){
    document.getElementById("stick7").style.display = "block";  
    }

    comshop5StickFunction(){
    document.getElementById("stick8").style.display = "block";  
    }

    guaranteeStickFunction(){
    document.getElementById("stick9").style.display = "block";  
    }

    interfaceStickFunction(){
    document.getElementById("stick10").style.display = "block";  
    }

    labSil1StickFunction(){
    document.getElementById("stick11").style.display = "block";  
    }
    labSil2StickFunction(){
      document.getElementById("stick12").style.display = "block";  
      }
    labSil3StickFunction(){
    document.getElementById("stick13").style.display = "block";  
    }
    logoStickFunction(){
    document.getElementById("stick14").style.display = "block";  
    }

    shoppingStickFunction(){
    document.getElementById("stick15").style.display = "block";  
    }

    signStickFunction(){
    document.getElementById("stick16").style.display = "block";  
    }

    signsStickFunction(){
    document.getElementById("stick17").style.display = "block";  
    }

    starStickFunction(){
    document.getElementById("stick18").style.display = "block";  
    }

    startrekStickFunction(){
    document.getElementById("stick19").style.display = "block";  
    }

    tagStickFunction(){
    document.getElementById("stick20").style.display = "block";  
    }
}
