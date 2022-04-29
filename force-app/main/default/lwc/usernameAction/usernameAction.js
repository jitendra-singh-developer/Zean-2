import { LightningElement, track  } from 'lwc';

export default class UsernameAction extends LightningElement {
    validPassword = 'jitendra@1234';
    @track isPasswordModelOpen = true;
    @track password; 
    @track showNextPage = false;
    @track mSpinner = false;
   
    doPasswordFetch(evt){ 
        var isTimeToCall = false;
        this.password = evt.target.value;
 
        if(this.password === this.validPassword){
           
            this.isPasswordModelOpen = false;
            this.mSpinner = true;
            for (let index = 0; index < 1001; index++) {
                if(index === 1000){
                    isTimeToCall = true;
                }
                
            }
            if(isTimeToCall){
                this.makeSpinnerFalse();
            }
         
        }else{
            this.showNextPage = false;
            this.isPasswordModelOpen = true;
        }
        
    }
    testValue;
    makeSpinnerFalse(){
        this.mSpinner = false;
        this.showNextPage = true;
    }

    storeText(evt){
        console.log('store text', evt.target.value);
        this.testValue = evt.target.value;
    }

    doCopy(){
        console.log('store text111', this.testValue);  

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(this.testValue);
    }

    playVideo(){
        var videoElement = document.getElementById("myid");
        console.log('videoElement', videoElement);
        videoElement.play();        
    }
}