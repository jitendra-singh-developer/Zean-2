public without sharing class YoutubeLWCController {
  
    @AuraEnabled(cacheable=true)
    public static String getYoutubeVideo(String searchKeyWord){
        HttpRequest request = new HttpRequest();
        HttpResponse response = new HttpResponse();
        Http http = new Http();
        request.setEndpoint('https://www.googleapis.com/youtube/v3/search?maxResults=5&part=snippet&q='+searchKeyWord.replaceAll(' ', '+')+'&type=video&key=AIzaSyCfDtCxL7QIEUKRDIwX5xswogmUG6bdNC4');
        request.setMethod('GET');
        try{
            response = http.send(request);
            System.debug(response.getBody());
            }catch(System.CalloutException e) {
            System.debug('Callout error: '+ e);
            System.debug(response.toString());
        }
        return response.getBody();
        
    }
}
