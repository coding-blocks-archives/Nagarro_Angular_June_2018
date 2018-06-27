import { Component, OnInit } from '@angular/core';
import {FakeApiService} from '../fake-api.service';

@Component({
  selector: 'app-servicecompo',
  templateUrl: './servicecompo.component.html',
  styleUrls: ['./servicecompo.component.css']
})
export class ServicecompoComponent implements OnInit {

  constructor(private fake: FakeApiService) { }

  ngOnInit() {
    this.fake.provideData().subscribe((data) => {
      console.log(data);
    });
  }

}
