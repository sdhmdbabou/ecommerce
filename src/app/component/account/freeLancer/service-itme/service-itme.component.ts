import { Component, OnInit,Input } from '@angular/core';
import { Service } from 'src/app/interface/service';

@Component({
  selector: 'app-service-itme',
  templateUrl: './service-itme.component.html',
  styleUrls: ['./service-itme.component.css']
})
export class ServiceItmeComponent implements OnInit {
  @Input() service:Service|null=null
  constructor() { }

  ngOnInit() {
  }

}
