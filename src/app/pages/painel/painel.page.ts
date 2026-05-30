import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,
  IonCardContent, IonBadge, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { hourglassOutline } from 'ionicons/icons';
import { Senha, TipoSenha } from '../../models/senha.model';
import { FilaService } from '../../services/fila.service';
import { TipoLabelPipe } from '../../shared/pipes/tipo-label.pipe';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.page.html',
  styleUrls: ['./painel.page.scss'],
  standalone: true,
  imports: [CommonModule, TipoLabelPipe,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,
    IonCardContent, IonBadge, IonIcon],
})
export class PainelPage {
  painel$: Observable<Senha[]>;

  constructor(private filaService: FilaService) {
    this.painel$ = this.filaService.painel$;
    addIcons({ hourglassOutline });
  }

  corBadge(tipo: TipoSenha): string {
    return ({ SP: 'danger', SE: 'warning', SG: 'success' } as Record<string, string>)[tipo] ?? 'medium';
  }
}
