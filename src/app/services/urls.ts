export class Urls{
    
  
  
    
    static  main_url =  "http://folowingdocuments.herokuapp.com/api/";
  static  refresh_token_url = this.main_url  + "refresh/";
  static  getToken_url = this.main_url  + "token/";
  
  
    static   item_url = this.main_url +"item/";
  
     static   shops_url = this.main_url +"shops/";
      static   freeLancers_url = this.main_url +"freeLancers/";
  
     static   normalUsers_url = this.main_url +"normalUsers/";
    static  user_url = this.main_url  +"userModul/";
    static  serviceCategory_url = this.main_url  +"ServiceCategory/";
    static  bienCategory_url = this.main_url  +"BienCategory/";
  
    static  TypeBienCategory_url = this.main_url  +"TypeBienCategory/";
  
    static  TypeServiceCategory_url = this.main_url  +"TypeServiceCategory/";
  
    static  ServiseOffer_url = this.main_url  +"ServiseOffer/";
  
    static  UserLikes_url = this.main_url  +"userlikes/";
    static  Like_or_unlike_url = this.main_url  +"likeOrUnlike/";
  
    static  BienOffer_url = this.main_url  +"BienOffer/";
  
  
    static  Add_url = this.main_url  +"Add/";
  
  
    static  SetReview_url = this.main_url  +"setreview/";
  
    static  Review_url = this.main_url  +"Review/";
  
  
    static  FreeLancerImages_url = this.main_url  +"FreeLancerImages/";
  
  
    static  userIdentification_url = this.main_url  +"userIdentification/";
  
    static  Produit_url = this.main_url  +"Produit/";
  
  
    static  Like_url = this.main_url  +"Like/";
  
  
  
  // Command urls
  
    static  Command_url = this.main_url  +"Command/";
  
    static  CommandItem_url = this.main_url  +"CommandItem/";
  
    static  SaveCommand_url = this.main_url  + "saveCommand/";
  
    static  CompliteCommand_url = this.main_url  +"compliteCommand/";
    
  static  CancelCommand_url = this.main_url  +"cancelCommand/";
  
    static  Service_url = this.main_url  +"Service/";
  
  
    static  FreeLancerActivatedOffer_url = this.main_url  +"FreeLancerActivatedOffer/";
  
  
  
    static  ShopActivatedOffer_url = this.main_url  +"ShopActivatedOffer/";
  
  
    static  setImageUrl = this.main_url  +"setimage/";
  
  
    static  createUserUrl = this.main_url + "create_user/";
  
   static    serviceCategoryTypesUrl( id:number):string {
     return this.main_url +'servicetypes/'+id;
   }
    static    bienCategoryTypesUrl( id:number):string{
     return this.main_url +'bientypes/'+id;
   }
  
  
        static   shopProduitsUrl( shopId:number):string {
          return this.main_url  +"shopProduit/" + shopId;
        }
        static   freeLancerServicesUrl( id:number):string{
          return this.main_url  +"freeLancerServices/" + id;
        }
  
        static   reviewerReviewsUrl( id:number, limit?:number ){
         
           return this.main_url  + id +"/reviewerReviews/" + limit ?? 0;
        }
        static   revieweeReviewsUrl( id:number, limit?:number ){
          return this.main_url  + id +"/revieweeReviews/" + limit ?? 0;
        }
  
         static   reviewUrl( reviewer:number, reviewee:number){
          return this.main_url  + reviewer+"/review/" + reviewee;
        }
  
          static   userInfo( id:number):string {
          return this.main_url  + "userIdentification/" +id;
        }
        
        static  getCommand( id:number):string {
          return this.main_url  + "getCommand/"+ id;
        }
  
         static  productsbytype( id:number):string {
          return this.main_url  + "productsbytype/"+ id;
        }
         static  productsbycategory( id:number):string {
          return this.main_url  + "productsbycategory/"+ id;
        }
  
       
        
  }