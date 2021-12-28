import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { PoMenuItem } from '@portinari/portinari-ui';

@Component({
  selector: 'app-painel-chamadas-page',
  templateUrl: './painel-chamadas-page.component.html',
  styleUrls: ['./painel-chamadas-page.component.css']
})
export class PainelChamadasPageComponent implements OnInit {
  private hubConnection: HubConnection;
  nick = 'Paciente';
  message = 'Consultorio';
  index : number = 0; // teste
  pacientes = ["Anderson 0","Anderson 1", "Anderson 2", "Anderson 3", "Anderson 4", "Anderson 5", "Anderson 6", "Anderson 7"];//teste
  lugar = ["Sala0", "Sala1", "Sala2", "Sala3", "Sala4", "Sala5", "Sala6", "Sala7"]; //teste
  chamadosAnteriores = [];
  dataHoje = new Date();

  constructor() { }

  ngOnInit() {


    this.hubConnection = new HubConnectionBuilder()
    .withUrl("https://localhost:44396/CallHub")
    .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log('Error while establishing connection :('));

      this.hubConnection.on("ReceiveMessage", (user: string, message: string) => {
        var msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        //var text = user + " go to " + msg;
        this.nick = user;
        this.message = msg;

        this.preencheChamadasAnteriores(user, msg);
        //say(text);
       });


    }
    chamada(){
      let nome = this.pacientes[this.index];
      let dir = this.lugar[this.index];
      this.index ++;
      this.hubConnection.invoke("Call", nome, dir).then(resp => console.log(resp)).catch(err => console.log('Erro no request:('));
    }

    async preencheChamadasAnteriores(nick, message) {
      await this.delay(5000);

      if (this.chamadosAnteriores.length == 4) {
        this.chamadosAnteriores.shift();
      }
      this.chamadosAnteriores.push({nick, message});
      this.nick = "";
      this.message = "";
    }


    delay(ms) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(true);
        }, ms);
      });
    }

}
