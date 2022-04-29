global with sharing class CommunitiesLoginControllerCustom {

 public String password { get; set; }

 public String username { get; set; }

 global CommunitiesLoginControllerCustom () {}

 global PageReference forwardToAuthPage() {

 String startUrl = System.currentPageReference().getParameters().get('startURL');

 String displayType = System.currentPageReference().getParameters().get('display');

 return Network.forwardToAuthPage(startUrl, displayType);

 }

 global PageReference RedirectToLogin()

 {

 return new PageReference( '/apex/StudentLogin');

 /* 'StudentLogin' is the name of the VF Page for login that is created below */

 }

 public PageReference loginUser()

 {

 return Site.login(username, password,'/NeedSupport');

 /* 'NeedSupport'  is the Page to which we will be redirected after Login */

 }
    
  global PageReference registerUserToCommunity()

 {

 		PageReference pr = new PageReference('apex/SiteRegister?core.apexpages.request.devconsole=1');
        pr.setRedirect(true);
        return pr;



 }

    

 }