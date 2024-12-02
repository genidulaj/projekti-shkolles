// Initialize localStorage with default listings if not already set
function initializeLocalStorage(){
    if(!localStorage.getItem('listings')){
      localStorage.setItem('listings',JSON.stringify([
      {
      carBrands: "Audi",
      type: "hatchback",
      isSuv: "carIcons/hatchback.png",
      category: "normal",
      carModels: "A3",
      gearbox: "automatic",
      isAutomatic: "carIcons/automatic-transmission.png",
      year: 2012,
      fuel: "diesel",
      engine: "2.0" ,
      personsNo: "5 persons",
      image: "carPhotos/audi_a3_2012.jpg",
      link: "carsPages/audi-a3-2012.html"
    },
    {
    
      carBrands: "You Click. ",
      carModels: "We pick",
      type: "?",
      isSuv: "carIcons/sedan.png",
      category: "?",
      gearbox: "?",
      isAutomatic: "carIcons/automatic-transmission.png",
      year: "?",
      fuel: "?",
      engine: "?" ,
      personsNo: "?",
      image: "carPhotos/Untitleddesign.png",
      link: "carsPages/you-pick-we-choose.html"
    },
    {
      carBrands: "Audi",
      carModels: "A4",
      type: "sedan",
      isSuv: "carIcons/sedan.png",
      category: "normal",
      gearbox: "automatic",
      isAutomatic: "carIcons/automatic-transmission.png",
      year: 2013,
      fuel: "diesel",
      engine: "2.0" ,
      personsNo: "5 persons",
      image: "carPhotos/audi_a4_2013.jpg",
      link: "carsPages/audi-a4-2013.html"
    },
    {
      carBrands: "Audi",
      carModels: "A4",
      type: "sedan",
      isSuv: "carIcons/sedan.png",
      category: "normal",
      gearbox: "automatic",
      isAutomatic:"carIcons/automatic-transmission.png",
      year: 2010,
      fuel: "diesel",
      engine: "2.0" ,
      personsNo: "5 persons",
      image: "carPhotos/audi_a4_2010.jpg",
      link:"carsPages/audi-a4-2010.html"
    },
    {

      carBrands: "Audi",
      carModels: "A4",
      type: "sedan",
      isSuv: "carIcons/sedan.png",
      category: "normal",
      gearbox: "automatic",
      isAutomatic: "carIcons/automatic-transmission.png",
      year: 2011,
      fuel: "diesel",
      engine: "2.0" ,
      personsNo: "5 persons",
      image: "carPhotos/audi-a4-2011-portobagazh.jpg",
      link: "carsPages/audi-a4-2011.html"
    },
    {
     
      carBrands: "Audi",
      carModels: "A5",
      type: "sedan",
      isSuv: "carIcons/sedan.png",
      category: "luxury",
      gearbox: "automatic",
      isAutomatic: "carIcons/automatic-transmission.png",
      year: 2013,
      fuel: "diesel",
      engine: "2.0" ,
      personsNo: "5 persons",
      image: "carPhotos/audi_a5_2013.jpg",
      link: "carsPages/audi-a5-2013.html"
    },
    {
     
      carBrands: "Audi",
      carModels: "A5",
      type: "sedan",
      isSuv: "carIcons/sedan.png",
      category: "normal",
      gearbox: "automatic",
      isAutomatic: "carIcons/automatic-transmission.png",
      year: 2012,
      fuel: "diesel",
      engine: "2.0" ,
      personsNo: "5 persons",
      image: "carPhotos/audi_a5_2012.jpg",
     link: "carsPages/audi-a5-2012.html"
    },
    {
     
      carBrands: "Audi",
      carModels: "A6",
      type: "sedan",
      isSuv: "carIcons/sedan.png",
      category: "luxury",
      gearbox: "automatic",
      isAutomatic: "carIcons/automatic-transmission.png",
      year: 2012,
      fuel: "diesel",
      engine: "3.0" ,
      personsNo: "5 persons",
      image: "carPhotos/audi-a6-2012.jpg",
      link: "carsPages/audi-a6-2012.html"
    },
    {
    
      carBrands: "Audi",
      carModels: "A6",
      type: "sedan",
      isSuv: "carIcons/sedan.png",
      category: "luxury",
      gearbox: "automatic",
      isAutomatic: "carIcons/automatic-transmission.png",
      year: 2013,
      fuel: "diesel",
      engine: "3.0" ,
      personsNo: "5 persons",
      image: "carPhotos/audi_a6_2013.jpg",
      link: "carsPages/audi-a6-2013.html"
    },
    {
      carBrands: "Audi",
      carModels: "A8L",
      type: "sedan",
      isSuv: "carIcons/sedan.png",
      category: "luxury",
      gearbox: "automatic",
      isAutomatic: "carIcons/automatic-transmission.png",
      year: 2014,
      fuel: "diesel",
      engine: "3.0" ,
      personsNo: "5 persons",
      image: "carPhotos/audi_a8L_2014.jpg",
      link: "carsPages/audi-a8L-2014.html"
    },
    {
      
      carBrands: "Audi",
      carModels: "Q2",
      type: "suv",
      isSuv: "carIcons/suv.png",
      category: "luxury",
      gearbox: "automatic",
      isAutomatic: "carIcons/automatic-transmission.png",
      year: 2020,
      fuel: "diesel",
      engine: "1.6" ,
      personsNo: "5 persons",
      image: "carPhotos/audi_q2_2020.jpg",
      link: "carsPages/audi-q2-2020.html"
    },
    {
    
      carBrands: "Audi",
      carModels: "Q3",
      type: "suv",
      isSuv: "carIcons/suv.png",
      category: "luxury",
      gearbox: "automatic",
      isAutomatic: "carIcons/automatic-transmission.png",
      year: 2016,
      fuel: "diesel",
      engine: "2.0" ,
      personsNo: "5 persons",
      image: "carPhotos/audi_q3_2016.jpg",
      link: "carsPages/audi-q3-2016.html"
    },
    {
   
      carBrands: "Audi",
      carModels: "Q3",
      type: "suv",
      isSuv: "carIcons/suv.png",
      category: "luxury",
      gearbox: "automatic",
      isAutomatic: "carIcons/automatic-transmission.png",
      year: 2020,
      fuel: "diesel",
      engine: "2.0" ,
      personsNo: "5 persons",
      image: "carPhotos/audi_q3_2020.jpg",
      link: "carsPages/audi-q3-2020.html"
    },
    {
   
      carBrands: "Audi",
      carModels: "Q5",
      type: "suv",
      isSuv: "carIcons/suv.png",
      category: "luxury",
      gearbox: "automatic",
      isAutomatic: "carIcons/automatic-transmission.png",
      year: 2013,
      fuel: "diesel",
      engine: "2.0" ,
      personsNo: "5 persons",
      image: "carPhotos/audi_q5_2013.jpg",
      link: "carsPages/audi-q5-2013.html"
    },
    {
 
      carBrands: "Audi",
      carModels: "Q5",
      type: "suv",
      isSuv: "carIcons/suv.png",
      category: "luxury",
      gearbox: "automatic",
      isAutomatic: "carIcons/automatic-transmission.png",
      year: 2016,
      fuel: "diesel",
      engine: "3.0" ,
      personsNo: "5 persons",
      image: "carPhotos/audi_q5_2016.jpg",
      link: "carsPages/audi-q5-2016.html"
    },
    {
     
      carBrands: "Audi",
      carModels: "Q7",
      type: "suv",
      isSuv: "carIcons/suv.png",
      category: "luxury",
      gearbox: "automatic",
      isAutomatic: "carIcons/automatic-transmission.png",
      year: 2009,
      fuel: "diesel",
      engine: "3.0" ,
      personsNo: "7 persons",
      image: "carPhotos/audi_q7_2009.jpg",
      link: "carsPages/audi-q7-2009.html"

    },
    {
    
      carBrands: "Audi",
      carModels: "Q7",
      type: "suv",
      isSuv: "carIcons/suv.png",
      category: "luxury",
      gearbox: "automatic",
      isAutomatic: "carIcons/automatic-transmission.png",
      year: 2014,
      fuel: "diesel",
      engine: "3.0" ,
      personsNo: "7 persons",
      image: "carPhotos/audi_q7_2014.jpg",
      link: "carsPages/audi-q7-2014.html"
    },
    {
      carBrands: "BMW",
      carModels: "1 series",
      type: "hatchback",
      isSuv: "carIcons/hatchback.png",
      category: "economic",
      gearbox: "automatic",
      isAutomatic: "carIcons/automatic-transmission.png",
      year: 2014,
      fuel: "diesel",
      engine: "2.0" ,
      personsNo: "5 persons",
      image: "carPhotos/bmw-seria1.jpeg",
      link: "carsPages/bmw-1series-2014.html"
    },
    {
      carBrands: "BMW",
      carModels: "3 series",
      type: "sedan",
      isSuv: "carIcons/sedan.png",
      category: "normal",
      gearbox: "automatic",
      isAutomatic: "carIcons/automatic-transmission.png",
      year: 2012,
      fuel: "diesel",
      engine: "2.0" ,
      personsNo: "5 persons",
      image: "carPhotos/bmw_seria_3_2012.jpg",
      link: "carsPages/bmw-3series-2012.html"
    },
    {
    
      carBrands: "BMW",
      carModels: "3 series GT",
      type: "sedan",
      isSuv: "carIcons/sedan.png",
      category: "normal",
      gearbox: "automatic",
      isAutomatic:"carIcons/automatic-transmission.png",
      year: 2012,
      fuel: "diesel",
      engine: "2.0" ,
      personsNo: "5 persons",
      image: "carPhotos/bmw_series_3gt_2012.png",
      link: "carsPages/bmw-3series-gt.html"
    },
    {
     
      carBrands: "BMW",
      carModels: "5 series",
      type: "sedan",
      isSuv: "carIcons/sedan.png",
      category: "luxury",
      gearbox: "automatic",
      isAutomatic:"carIcons/automatic-transmission.png",
      year: 2012,
      fuel: "diesel",
      engine: "2.0" ,
      personsNo: "5 persons",
      image: "carPhotos/bmw_seria_5_2012.jpg",
      link: "carsPages/bmw-5series-2012.html"
    },
    {
     
      carBrands: "BMW",
      carModels: "5 series GT",
      type: "sedan",
      isSuv: "carIcons/sedan.png",
      category: "luxury",
      gearbox: "automatic",
      isAutomatic:"carIcons/automatic-transmission.png",
      year: 2012,
      fuel: "diesel",
      engine: "2.0" ,
      personsNo: "5 persons",
      image: "carPhotos/bmw_seria_5_GT_2012.jpg",
      link: "carsPages/bmw-5series-gt.html"
    },
    {
    
      carBrands: "BMW",
      carModels: "X1",
      type: "suv",
      isSuv: "carIcons/suv.png",
      category: "luxury",
      gearbox: "automatic",
      isAutomatic:"carIcons/automatic-transmission.png",
      year: 2013,
      fuel: "diesel",
      engine: "2.0" ,
      personsNo: "5 persons",
      image: "carPhotos/bmw_x1_2013.jpg",
      link: "carsPages/bmw-x1-2013.html"
    }, 
    {
     
      carBrands: "BMW",
      carModels: "X1",
      type: "suv",
      isSuv: "carIcons/suv.png",
      category: "luxury",
      gearbox: "automatic",
      isAutomatic:"carIcons/automatic-transmission.png",
      year: 2014,
      fuel: "diesel",
      engine: "2.0" ,
      personsNo: "5 persons",
      image: "carPhotos/bmw_x1_2014.jpg",
      link: "carsPages/bmw-x1-2014.html"
    },
    {
     
      carBrands: "BMW",
      carModels: "X3",
      type: "suv",
      isSuv: "carIcons/suv.png",
      category: "luxury",
      gearbox: "automatic",
      isAutomatic:"carIcons/automatic-transmission.png",
      year: 2012,
      fuel: "diesel",
      engine: "2.0" ,
      personsNo: "5 persons",
      image: "carPhotos/bmw_x3_2012.jpg",
      link: "carsPages/bmw-x3-2012.html"
    },
    {
    
      carBrands: "BMW",
      carModels: "X5",
      type: "suv",
      isSuv: "carIcons/suv.png",
      category: "luxury",
      gearbox: "automatic",
      isAutomatic:"carIcons/automatic-transmission.png",
      year: 2010,
      fuel: "diesel",
      engine: "3.0" ,
      personsNo: "5 persons",
      image: "carPhotos/bmw_x5_2010.jpg",
      link: "carsPages/bmw-x5-2010.html"
    },
    {
    
      carBrands: "BMW",
      carModels: "X6",
      type: "suv",
      isSuv: "carIcons/suv.png",
      category: "luxury",
      gearbox: "automatic",
      isAutomatic:"carIcons/automatic-transmission.png",
      year: 2010,
      fuel: "diesel",
      engine: "3.0" ,
      personsNo: "5 persons",
      image: "carPhotos/bmw-x6-2012-2.jpeg",
      link: "carsPages/bmw-x6-2010.html"
    },
    {
    
      carBrands: "Fiat",
      carModels: "Bravo",
      type: "hatchback",
      isSuv: "carIcons/hatchback.png",
      category: "economic",
      gearbox: "automatic",
      isAutomatic:"carIcons/automatic-transmission.png",
      year: 2008,
      fuel: "diesel",
      engine: "2.0" ,
      personsNo: "5 persons",
      image: "carPhotos/fiat_bravo_2008.jpg",
      link: "carsPages/fiat-bravo-2008.html"
    },
    {
   
      carBrands: "Ford",
      carModels: "Fiesta",
      type: "hatchback",
      isSuv: "carIcons/hatchback.png",
      category: "economic",
      gearbox: "manuak",
      year: 2008,
      fuel: "diesel",
      engine: "1.4" ,
      personsNo: "5 persons",
      image: "carPhotos/2007-ford-fiesta.jpg",
      isAutomatic: "carIcons/manual-transmission.png",
      link: "carsPages/ford-fiesta-2008.html"
    },
    {
   
      carBrands: "Ford",
      carModels: "Fiesta",
      type: "hatchback",
      isSuv: "carIcons/hatchback.png",
      category: "economic",
      gearbox: "automatic",
      year: 2015,
      fuel: "diesel",
      engine: "1.4" ,
      personsNo: "5 persons",
      image: "carPhotos/fiesta 2015.jpeg",
      isAutomatic: "carIcons/automatic-transmission.png",
      link:"carsPages/ford-fiesta-2015.html"
    },
    {
  
      carBrands: "Mercedes Benz",
      carModels: "C Class",
      type: "sedan",
      isSuv: "carIcons/sedan.png",
      category: "normal",
      gearbox: "automatic",
      isAutomatic:"carIcons/automatic-transmission.png",
      year: 2010,
      fuel: "diesel",
      engine: "2.2" ,
      personsNo: "5 persons",
      image: "carPhotos/MB_c_class_2010.jpg",
      link: "carsPages/mercedes-c-class.html"
    },
    {
    
      carBrands: "Mercedes Benz",
      carModels: "GLK",
      type: "suv",
      isSuv: "carIcons/suv.png",
      category: "luxury",
      gearbox: "automatic",
      isAutomatic:"carIcons/automatic-transmission.png",
      year: 2014,
      fuel: "diesel",
      engine: "2.2" ,
      personsNo: "5 persons",
      image: "carPhotos/mercedes_glk_2014.jpg",
      link: "carsPages/mercedes-glk-2014.html"
    },
    {
      
      carBrands: "Seat",
      carModels: "Altea",
      type: "hatchback",
      isSuv: "carIcons/hatchback.png",
      category: "economic",
      gearbox: "automatic",
      isAutomatic:"carIcons/automatic-transmission.png",
      year: 2010,
      fuel: "diesel",
      engine: "1.9" ,
      personsNo: "5 persons",
      image: "carPhotos/seat-altea-xl-sport-packet-1-9-tdi-2008-3900.jpeg",
      link: "carsPages/seat-altea-2010.html"
    },
    {
      
      carBrands: "Seat",
      carModels: "Ibiza",
      type: "hatchback",
      isSuv: "carIcons/hatchback.png",
      category: "economic",
      gearbox: "manuak",
      isAutomatic:"carIcons/manual-transmission.png",
      year: 2015,
      fuel: "petrol",
      engine: "1.2" ,
      personsNo: "5 persons",
      image: "carPhotos/seat-ibiza-2015.jpeg",
      link: "carsPages/seat-ibiza-2015.html"
    },
    {
      carBrands: "Toyota",
      carModels: "Auris",
      type: "hatchback",
      isSuv: "carIcons/hatchback.png",
      category: "economic",
      gearbox: "automatic",
      isAutomatic:"carIcons/automatic-transmission.png",
      year: 2008,
      fuel: "diesel",
      engine: "1.4" ,
      personsNo: "5 persons",
      image: "carPhotos/auris.jpg",
      link: "carsPages/toyota-auris-automatic.html"
    },
    {
    
      carBrands: "Toyota",
      carModels: "Auris",
      type: "hatchback",
      isSuv: "carIcons/hatchback.png",
      category: "economic",
      gearbox: "manuak",
      year: 2008,
      fuel: "diesel",
      engine: "1.4" ,
      personsNo: "5 persons",
      image: "carPhotos/auris.jpg",
      isAutomatic: "carIcons/manual-transmission.png",
      link:  "carsPages/toyota-auris-manual.html"
    },
    {
     
      carBrands: "Toyota",
      carModels: "Yaris",
      type: "hatchback",
      isSuv: "carIcons/hatchback.png",
      category: "economic",
      gearbox: "manuak",
      year: 2009,
      fuel: "diesel",
      engine: "1.4" ,
      personsNo: "5 persons",
      image: "carPhotos/toyota_yaris_2009.jpg",
      isAutomatic: "carIcons/manual-transmission.png",
      link: "carsPages/toyota-yaris-2009.html"
    },
    {
      
      carBrands: "Volkswagen",
      carModels: "Golf 5",
      type: "hatchback",
      isSuv: "carIcons/hatchback.png",
      category: "economic",
      gearbox: "manuak",
      year: 2009,
      fuel: "diesel",
      engine: "2.0" ,
      personsNo: "5 persons",
      image: "carPhotos/vw_golf_2009.jpg",
      isAutomatic: "carIcons/manual-transmission.png",
      link: "carsPages/vw-golf5-manual.html"
    },
    {
     
      carBrands: "Volkswagen",
      carModels: "Golf 5",
      type: "hatchback",
      isSuv: "carIcons/hatchback.png",
      category: "economic",
      gearbox: "automatic",
      isAutomatic:"carIcons/automatic-transmission.png",
      year: 2009,
      fuel: "diesel",
      engine: "2.0" ,
      personsNo: "5 persons",
      image: "carPhotos/vw_golf_2009.jpg",
      link: "carsPages/vw-golf5-automatic.html"
    },
    {

      carBrands: "Volkswagen",
      carModels: "Golf 6",
      type: "hatchback",
      isSuv: "carIcons/hatchback.png",
      category: "economic",
      gearbox: "automatic",
      isAutomatic:"carIcons/automatic-transmission.png",
      year: 2011,
      fuel: "diesel",
      engine: "2.0" ,
      personsNo: "5 persons",
      image: "carPhotos/volkswagen_golf_2010.jpg",
      link: "carsPages/vw-golf6-2011.html"
    },
    {

      carBrands: "Volkswagen",
      carModels: "Jetta",
      type: "sedan",
      isSuv: "carIcons/sedan.png",
      category: "normal",
      gearbox: "automatic",
      isAutomatic:"carIcons/automatic-transmission.png",
      year: 2012,
      fuel: "diesel",
      engine: "2.0" ,
      personsNo: "5 persons",
      image: "carPhotos/volkswagen_jetta_2012.jpg",
      link: "carsPages/vw-jetta-2012.html"
    },
    {
    
      carBrands: "Volkswagen",
      carModels: "Passat",
      type: "sedan",
      isSuv: "carIcons/sedan.png",
      category: "normal",
      gearbox: "automatic",
      isAutomatic:"carIcons/automatic-transmission.png",
      year: 2012,
      fuel: "diesel",
      engine: "2.0" ,
      personsNo: "5 persons",
      image: "carPhotos/volkswagen_passat_2012.jpg",
      link:"carsPages/vw-passat-2012.html"
    },
    {

      carBrands: "Volkswagen",
      carModels: "Passat",
      type: "sedan",
      isSuv: "carIcons/sedan.png",
      category: "normal",
      gearbox: "manuak",
      year: 2008,
      fuel: "diesel",
      engine: "2.0" ,
      personsNo: "5 persons",
      image: "carPhotos/volkswagen_passat_2008.jpg",
      isAutomatic: "carIcons/manual-transmission.png",
      link:"carsPages/vw-passat-2008.html"
    },
    {
      
      carBrands: "Volkswagen",
      carModels: "Passat CC",
      type: "sedan",
      isSuv: "carIcons/sedan.png",
      category: "luxury",
      gearbox: "automatic",
      isAutomatic:"carIcons/automatic-transmission.png",
      year: 2014,
      fuel: "diesel",
      engine: "2.0" ,
      personsNo: "5 persons",
      image: "carPhotos/volkswagen_cc_2014.jpg",
      link:"carsPages/vw-passat-cc-2014.html"
    },
    {
     
      carBrands: "Volkswagen",
      carModels: "Polo",
      type: "hatchback",
      isSuv: "carIcons/hatchback.png",
      category: "economic",
      gearbox: "automatic",
      isAutomatic:"carIcons/automatic-transmission.png",
      year: 2011,
      fuel: "diesel",
      engine: "1.4",
      personsNo: "5 persons",
      image: "carPhotos/vw-polo-1-6-tdi-2012.jpeg",
      link:"carsPages/vw-polo-2011.html"
    },
    {
      carBrands: "Volkswagen",
      carModels: "Golf 5 Plus",
      type: "hatchback",
      isSuv: "carIcons/hatchback.png",
      category: "economic",
      gearbox: "manuak",
      year: 2008,
      fuel: "diesel",
      engine: "2.0",
      personsNo: "5 persons",
      image: "carPhotos/golf-5-plus-1-9 (1).jpeg",
      isAutomatic: "carIcons/manual-transmission.png",
      link:"carsPages/vw-golf5-plus.html"
    },
    {
   
      carBrands: "Volkswagen",
      carModels: "Golf 6 Plus",
      type: "hatchback",
      isSuv: "carIcons/hatchback.png",
      category: "economic",
      gearbox: "automatic",
      isAutomatic:"carIcons/automatic-transmission.png",
      year: 2010,
      fuel: "diesel",
      engine: "2.0",
      personsNo: "5 persons",
      image: "carPhotos/golf6+.jpeg",
      link: "carsPages/vw-golf6-plus.html"
    },
    {

      carBrands: "Volkswagen",
      carModels: "Tiguan",
      type: "suv",
      isSuv: "carIcons/suv.png",
      category: "luxury",
      gearbox: "automatic",
      isAutomatic:"carIcons/automatic-transmission.png",
      year: 2010,
      fuel: "diesel",
      engine: "2.0" ,
      personsNo: "5 persons",
      image: "carPhotos/volkswagen_tiguan_2010.jpg",
      link:"carsPages/vw-tiguan-2010.html"
    },
    {
     
      carBrands: "Volkswagen",
      carModels: "Tiguan",
      type: "suv",
      isSuv: "carIcons/suv.png",
      category: "luxury",
      gearbox: "automatic",
      isAutomatic:"carIcons/automatic-transmission.png",
      year: 2020,
      fuel: "diesel",
      engine: "2.0" ,
      personsNo: "7 persons",
      image: "carPhotos/volkswagen_tiguan_2020.jpg",
      link:"carsPages/vw-tiguan-2020.html"
     
    },
    {
     
     carBrands: "Volkswagen",
     carModels: "Touran",
     type: "suv",
     isSuv: "carIcons/suv.png",
     category: "normal",
     gearbox: "automatic",
     isAutomatic:"carIcons/automatic-transmission.png",
     year: 2011,
     fuel: "diesel",
     engine: "2.0" ,
     personsNo: "7 persons",
     image: "carPhotos/turan 2011.jpg",
     link: "carsPages/vw-touran-2011.html"
    
   },
   {
     
     carBrands: "Volkswagen",
     carModels: "Touran",
     type: "suv",
     isSuv: "carIcons/suv.png",
     category: "luxury",
     gearbox: "automatic",
     isAutomatic:"carIcons/automatic-transmission.png",
     year: 2014,
     fuel: "diesel",
     engine: "2.0" ,
     personsNo: "7 persons",
     image: "carPhotos/touran-2014.jpeg",
     link: "carsPages/vw-touran-2014.html"
    
   },
    {
    
      carBrands: "Volvo",
      carModels: "XC60",
      type: "suv",
      isSuv: "carIcons/suv.png",
      category: "luxury",
      gearbox: "automatic",
      isAutomatic:"carIcons/automatic-transmission.png",
      year: 2010,
      fuel: "diesel",
      engine: "2.4" ,
      personsNo: "5 persons",
      image: "carPhotos/volvo_xc60_2010.jpg",
      link:"carsPages/volvo-xc60.html"
    }
      ]))



    }
  }
  // Function to get listings from localStorage
function getListings() {
    return JSON.parse(localStorage.getItem('listings'));
  }
  
  // Initialize localStorage if not already done
  initializeLocalStorage();
  
  // Retrieve listings
  const listings = getListings();
  
  // Attach event listeners to checkboxes and search input
  document.querySelectorAll('[data-category]').forEach(checkbox => {
    checkbox.addEventListener('change', filterListings);
  });
  
  // Function to populate listings into the container
  function populateListings(listings) {
    const listingContainer = $('#listingContainer');
    listingContainer.empty(); // Clear previous listings
  
    if (listings.length === 0) {
      listingContainer.append('<p>No listings found.</p>');
    } else {
      listings.forEach(function (listing) {
        const listingHTML = generateListingHTML(listing);
        listingContainer.append(listingHTML);
      });
    }
  }
  
  // Populate all listings
  function populateFullListings() {
    populateListings(listings);
  }
  
  // Filter listings based on search and checkboxes
  function filterListings() {
    const searchText = document.getElementById('exampleFormControlInput1').value.toLowerCase().trim();
    const selectedValues = [];
  
    // Collect selected checkboxes
    document.querySelectorAll('[data-category]:checked').forEach(checkbox => {
      selectedValues.push({ category: checkbox.getAttribute('data-category'), value: checkbox.value.toLowerCase() });
    });
  
    // Filter listings
    const filteredListings = listings.filter(listing => {
      // Combine car brand and model for search text matching
      const combinedText = `${listing.carBrands} ${listing.carModels}`.toLowerCase();
      const matchesSearch = combinedText.includes(searchText);
  
      // Check if all selected filters match the corresponding properties (AND logic)
      const matchesSelectedValues = selectedValues.every(filter =>
        listing[filter.category] && listing[filter.category] && listing[filter.category] && listing[filter.category] && listing[filter.category].toLowerCase().includes(filter.value)
      );
  
      return matchesSearch && matchesSelectedValues;
    });
  
    populateListings(filteredListings);
  }
  
  // Event listeners for checkboxes and search input
  document.querySelectorAll('[data-category]').forEach(category => {
    category.addEventListener('change', function (event) {
      if (!event.target.checked) {
        filterListings(); // If a checkbox is unchecked, show all listings
      } else {
        filterListings(); // Apply filters when checkbox is checked
      }
    });
  });
  
  document.getElementById('exampleFormControlInput1').addEventListener('input', filterListings);
  
  // Initial population of listings
  populateListings(listings);
  
  // Adjust layout on screen resize
  $(window).on('resize', function () {
    const screenWidth = $(window).width();
    const columns = screenWidth <= 800 ? 3 : 2;
    $('#listingContainer > .col-md-4').removeClass('col-md-4').addClass('col-md-' + (12 / columns));
  });
  
  // Generate listing HTML
  function generateListingHTML(listing) {
    return `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${listing.image}" class="card-img-top" alt="${listing.carBrands}">
          <div class="card-body">
            <h4 class="card-title ">${listing.carBrands} ${listing.carModels}</h4>
            <div class="container text-center">
              <div class="row align-items-start">
                <div class="col">
                  <p>
                    <img width="40px" src="${listing.isSuv}">
                    ${listing.type}
                  </p>
                  <p>
                    <img width="40px" src="carIcons/category.png"> 
                    ${listing.category}
                  </p>
                  <p>
                    <img width="40px" src="${listing.isAutomatic}">
                    ${listing.gearbox}
                  </p>
                  <p>
                    <img width="40px" src="carIcons/car-year.png">  
                    ${listing.year}
                  </p>
                </div>
                <div class="col">
                  <p>
                    <img width="40px" src="carIcons/fuel.png">  
                    ${listing.fuel}
                  </p>
                  <p>
                    <img width="40px" src="carIcons/car-engine.png"> 
                    ${listing.engine}
                  </p>
                  <p>
                    <img width="40px" src="carIcons/persons.png">  
                    ${listing.personsNo}
                  </p>
                </div>
                <a onclick="alert('You are renting ${listing.carBrands} ${listing.carModels}')" class="btn btn-primary">Rent Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  