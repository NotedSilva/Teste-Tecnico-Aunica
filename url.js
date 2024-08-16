function PiiRemoval(url){
    
    var urlobj = new URL(url);
    

    return url;
  }
  
  console.log(PiiRemoval("https://www.aunica.com?email=john@doe.com&id=12345"));


  // não consegui fazer essa questão