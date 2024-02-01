import { Component, OnInit} from '@angular/core';


interface bookDetails{
  id:number,
  name:string,
  author:string,
  img:string,
  originalPrice:number,
  discountPrice:number,
  desc:string,
  date:string
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent implements OnInit{
  bookArray: Array<bookDetails> =[];
  bookDetails: string = "";
  bookName: string = "";

  ngOnInit(): void {
    this.bookArray = [
      {
        id: 1,
        date:"1 Feb 2012",
        name: "Don't Believe Everything You Think (English)",
        author: "Joseph Nguyen",
        img: "https://m.media-amazon.com/images/I/715qi-cIbML._AC_UY327_FMwebp_QL65_.jpg",
        originalPrice: 299,
        discountPrice: 187,
        desc:"Discover how to conquer anxiety, self-doubt, and self-sabotage without depending on motivation or willpower. 'Don't Believe Everything You Think' uncovers the core of psychological suffering and offers insights to effortlessly shape the life you crave. Learn to detach from negativity, embrace love and joy, escape negative thought cycles, and tap into inner wisdom. The message is clear: anyone can attain peace, love, and fulfillment, irrespective of their history. It's not about rewiring your brain, but expanding your consciousness for lasting transformation. Within this book, delve into the core of emotional suffering and receive insights on effortlessly curating the life you aspire to."      },
      {
        id: 2,
        date:"1 March 2018",

        name: "Do It Today: Overcome procrastination, improve productivity and achieve more meaningful things [Paperback] Foroux, Darius",
        author: "Darius Foroux",
        img: "https://m.media-amazon.com/images/I/61jCkOVf1oL._AC_UY327_FMwebp_QL65_.jpg",
        originalPrice: 200,
        discountPrice: 134,
        desc:"Drawing books is an artist’s dreamland where he adds life to his imagination. Whether it is for kids, students, artists or adults, the plain white blank sheets of paper present a ground to explore their creativity and unleash their artistic side. These Plain Drawing Books for Kids Set of 3 books are 29.5 cm x 21 cm Approx and can be used to sketch, colour as well as paint. Its approx A4 Size and contains 34 unruled sheets in each book.  Made from quality paper, the pages are whiter, brighter and smoother. The carefully done cut and excellent finish ensures that the pages are in perfect alignment without any folded corners."
      },
      {
        id: 3,
        date:"1 Feb 2020",
        name: "Children learn new concepts each day and this boosts their understanding and allows them to think and reason. 201 Brain Booster Activity Book expands the horizons of young learners with over 200 engrossing activities. Gorgeous illustrations will aid in enhancing the critical thinking of young learners and will promote relaxation. Understanding of various topics Develops reasoning and cognitive skills Develops a confident learner Engaging activities A perfect book to stay occupied",
        author: "Holly Jackson",
        img: "https://m.media-amazon.com/images/I/61l7kkcaGFL._AC_UY327_FMwebp_QL65_.jpg",
        originalPrice: 499,
        discountPrice: 263,
        desc:"Children learn new concepts each day and this boosts their understanding and allows them to think and reason. 201 Brain Booster Activity Book expands the horizons of young learners with over 200 engrossing activities. Gorgeous illustrations will aid in enhancing the critical thinking of young learners and will promote relaxation. Understanding of various topics Develops reasoning and cognitive skills Develops a confident learner Engaging activities A perfect book to stay occupied"
      }
    ]
  }
  constructor(){}

  public getBookDetails(index:number):void{
    
      this.bookName=this.bookArray[index].name;
      this.bookDetails = this.bookArray[index].desc;
    
  }
}
