import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    public _headerservice: HeaderService
  ) {
  }
}
