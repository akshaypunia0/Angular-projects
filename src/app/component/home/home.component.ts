import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

  http = inject(HttpClient);

  MyData: any;

  ngOnInit() {
    this.getMyData();
  }

  getMyData() {

    this.http.get("https://api.github.com/users/akshaypunia0").subscribe((data:any) => {

      this.MyData = data;
      console.log(data);
    });
  }

}
