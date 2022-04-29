public without sharing class MYRecentlyViewedController {

   @AuraEnabled
   public static dateTime setCurrentDateTime(String contactId){
         System.debug('Hello'+ contactId);
        Contact con = new Contact();
        con.Id = contactId;
        con.demo25__MyLastViewedDate__c = System.now();
        update con; 
        return con.demo25__MyLastViewedDate__c;
   }

}