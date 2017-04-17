import { Component } from '@angular/core';

import { ServicosPage } from '../servicos/servicos';
import { MensagensPage } from '../mensagens/mensagens';
import { HomePage } from '../home/home';
import { AjustesPage } from '../ajustes/ajustes';

@Component({
  templateUrl: 'tabs.html',
  selector: 'tabs'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MensagensPage;
  tab3Root = ServicosPage;
  tab4Root = AjustesPage;

  constructor() {

  }
}
