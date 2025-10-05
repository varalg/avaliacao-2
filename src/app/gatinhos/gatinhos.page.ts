import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gatinhos',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule], 
  templateUrl: './gatinhos.page.html',
  styleUrls: ['./gatinhos.page.scss'],
})
export class GatinhosPage implements OnInit {
  imagemUrl: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.carregarGatinho();
  }

  carregarGatinho() {
    this.http.get<any[]>('https://api.thecatapi.com/v1/images/search')
      .subscribe(res => {
        this.imagemUrl = res[0].url;
      });
  }
}
