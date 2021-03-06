import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatCardModule, MatFormFieldModule  ,MatInputModule  ,MatButtonModule ,MatTreeModule , MatIconModule , MatProgressBarModule, MatStepperModule} from '@angular/material';
import { WhitePaperComponent } from './white-paper/white-paper.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ImageDropperComponent } from './image-dropper/image-dropper.component';
import { NavRightComponent } from './nav-right/nav-right.component';
import { AngularDraggableModule } from 'angular2-draggable';
import { DraggerImageComponent } from './dragger-image/dragger-image.component';
import { ShapesComponent } from './shapes/shapes.component';
import { StickersComponent } from './stickers/stickers.component';
import { IconsComponent } from './icons/icons.component';
import { DrawPaperComponent } from './draw-paper/draw-paper.component';
import { MagicWandComponent } from './magic-wand/magic-wand.component';
import { EraseMagicComponent } from './erase-magic/erase-magic.component';
import { SensifaiSdkNgxModule } from 'sensifai-sdk-ngx';
import { AngularResizeElementModule } from 'angular-resize-element';

@NgModule({
  declarations: [
    AppComponent,
    WhitePaperComponent,
    HomePageComponent,
    WelcomePageComponent,
    ImageDropperComponent,
    NavRightComponent,
    DraggerImageComponent,
    ShapesComponent,
    StickersComponent,
    IconsComponent,
    DrawPaperComponent,
    MagicWandComponent,
    EraseMagicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     MatCardModule,
     MatFormFieldModule,
     MatInputModule,
     MatButtonModule,
     MatTreeModule,
     MatIconModule,
     MatProgressBarModule,
     BrowserAnimationsModule,
     ImageCropperModule,
     AngularDraggableModule,
     AngularResizeElementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
