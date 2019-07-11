import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggle = new EventEmitter<void>();
  @Output() toggleDarkTheme = new EventEmitter<boolean>(); 

  constructor() { }

  ngOnInit() {
  }

  openSiderBar() {
    // 发射 siderBar 点击事件
    this.toggle.emit();
  }

  onchange(checked: boolean) {
    this.toggleDarkTheme.emit(checked);
  }

}
