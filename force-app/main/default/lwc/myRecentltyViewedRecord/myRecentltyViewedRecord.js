import { api, LightningElement,track } from 'lwc';
import setCurrentDateTime from "@salesforce/apex/MYRecentlyViewedController.setCurrentDateTime";
export default class MyRecentltyViewedRecord extends LightningElement {

   dateTime;

    @api
    recordId;

 

    connectedCallback(){
      setCurrentDateTime({contactId : this.recordId})
      .then(result=>{
          console.log('its result', result);
          this.dateTime = result;

           
      }).catch(error=>{
          console.error(error);
      })

    }

 

}