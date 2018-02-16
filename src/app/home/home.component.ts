import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
  }

  goToTrucks() {
    this.router.fragment.subscribe(f => {
      let element = document.querySelector("#" + f);
      if (element) {
        element.scrollIntoView();
      } 
    });
  }

  goToHeavy() {
    this.route.navigate(['trucks', 'heavy']);
  }

  goToMedium() {
    this.route.navigate(['trucks', 'medium']);
  }

  goToLight() {
    this.route.navigate(['trucks', 'light']);
  }

}
