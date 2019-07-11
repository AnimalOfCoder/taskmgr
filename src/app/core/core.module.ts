import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderbarComponent } from './sliderbar/sliderbar.component';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { loadSvgResources } from '../utils/svg.utils';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SliderbarComponent],
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent, 
    FooterComponent, 
    SliderbarComponent,
  ]
})
export class CoreModule { 
  constructor(
    @Optional() @SkipSelf() parent: CoreModule,
    ir: MatIconRegistry, 
    ds: DomSanitizer
    ) {
    if (parent) {
      throw new Error("模块已经存在，不能再次加载！")
    }
    // 加载SVG资源
    loadSvgResources(ir, ds);
  }
}
