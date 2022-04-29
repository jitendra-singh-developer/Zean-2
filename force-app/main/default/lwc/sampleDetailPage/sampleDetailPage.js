import { LightningElement, track } from 'lwc';

export default class SampleDetailPage extends LightningElement {

   @track shipmentList = [];
   connectedCallback(){
       for (let index = 0; index < 10; index++) {
          this.shipmentList.push({
              Id : index,
              shipmentNumber : 123456+index*2,
              attentionTo :  'James knek'+index

          }) 
       }
   }

}