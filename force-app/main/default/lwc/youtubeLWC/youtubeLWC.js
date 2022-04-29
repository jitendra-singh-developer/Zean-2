import { LightningElement, track } from 'lwc';
import getYoutbeVideo from '@salesforce/apex/YoutubeLWCController.getYoutubeVideo';
export default class YoutubeLWC extends LightningElement {

    @track videosList = [];
    srcQuery = null;

    storeQuery(event){
        this.srcQuery = event.target.value;
    }

    getYoutubeVideos(){
        getYoutbeVideo({searchKeyWord : this.srcQuery })
        .then(result => {
            console.log('result',result);
            var tempVideosList = [];
            var tempVideosList2 = [];
            tempVideosList = JSON.parse(result);
            console.log('tempVideosList',tempVideosList);
            tempVideosList.items.forEach(element => {
                console.log('el11-->', element);
                tempVideosList2.push({
                    videoURL : 'https://www.youtube.com/embed/'+element.id.videoId
                })
            });
            this.videosList = tempVideosList2;
            console.log('videos list', this.videosList);
            console.log('videos list', JSON.stringify(this.videosList));
        })
        .catch(error => {
            this.error = error;
            console.log('error', JSON.stringify(error));
        });
    }


}