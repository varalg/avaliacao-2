import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCardSubtitle, IonCardContent, IonCardTitle, IonCardHeader, IonCard } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-meu-cartao',
  templateUrl: './meu-cartao.page.html',
  styleUrls: ['./meu-cartao.page.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonContent, RouterModule]
})
export class MeuCartaoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
