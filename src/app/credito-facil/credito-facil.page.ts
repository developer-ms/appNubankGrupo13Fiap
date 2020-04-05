import { CreditoFacilService } from './credito-facil.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'nbk-credito-facil',
  templateUrl: './credito-facil.page.html',
  styleUrls: ['./credito-facil.page.scss'],
})
export class CreditoFacilPage implements OnInit {


  userId: number

  resultMoney: number;
  resultMonth: number;

  valueTotal: number;

  labelTotal: string;
  labelMonth: string;

  showMessage: boolean = false

  constructor(private route: ActivatedRoute, private nav: Router, public alertController: AlertController, private easyCreditService: CreditoFacilService) {
    this.route.queryParams.subscribe(params => {
      let getNav = this.nav.getCurrentNavigation()
      if (getNav.extras.state) {
        this.userId = getNav.extras.state.userId
      }})
   }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.mathTotal()
  }

  valueMoney(valor){
    this.resultMoney = valor
    this.mathTotal()
  }

  valueMonth(valor){
    this.resultMonth = valor
    this.mathTotal()
  }

  mathTotal(){

    this.valueTotal = this.resultMoney * 1.3
    this.labelTotal = "R$ " + (parseFloat(this.valueTotal.toString())).toLocaleString("pt-BR", { maximumFractionDigits: 2, minimumFractionDigits: 2 })
    this.labelMonth = "R$ " + (parseFloat((this.valueTotal/this.resultMonth).toString())).toLocaleString("pt-BR", { maximumFractionDigits: 2, minimumFractionDigits: 2 })
  }

  async alertConfirmEasyCredit() {
    const alert = await this.alertController.create({
      header: 'Confirmação!',
      message: 'Você confirma a contratação de crédito em conta corrente no valor <strong>' + this.labelTotal + ' </strong>?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {

          }
        }, {
          text: 'Contratar',
          handler: () => {
            this.easyCreditService.postEasyCredit(JSON.stringify({"userId": this.userId, "value": this.valueTotal, "qtyMonth": this.resultMonth}))
            .subscribe(result => {
              this.callAccount()
            },
            error =>{
              this.showMessage = true
            })

          }
        }
      ]
    });

    await alert.present();
  }

  callAccount(){
    let navigationExtras: NavigationExtras = {
      state: {
        userId: this.userId
      }
    }
    this.nav.dispose()
    this.nav.navigate(['conta-corrente'], navigationExtras)
  }

}
