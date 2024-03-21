function books(title, author, msrp, genre, numberOfPages, images, description) {
  return {
    title: title,
    author: author,
    msrp: msrp,
    genre: genre,
    numberOfPages: numberOfPages,
    images: images,
    description: description,
  };
}

var array = [
  {
    name: "Night and Day",
    author: "Woolf novel",
    msrp: "13$",
    genre: "Classic",
    numberofpages: "442p",
    image: "https://m.media-amazon.com/images/I/41l0MnYmYRL.jpg",
    description: "Classic book",
  },
  {
    name: "The black book",
    author: "david beckam",
    msrp: "11.99$",
    genre: "classic",
    numberofpages: "212p",
    image:
      " https://m.media-amazon.com/images/I/71VkRBf1OlL._AC_UF1000,1000_QL80_.jpg ",
    description: "Classic book",
  },
  {
    name: "Phoenix",
    author: "James georgor",
    msrp: "16$",
    genre: "History",
    numberofpages: "457p",
    image:
      " https://m.media-amazon.com/images/I/71DY54NIGBL._AC_UF1000,1000_QL80_.jpg",
    description: "History book",
  },
  {
    name: "Troops in Contact ",
    author: "Human rights watch",
    msrp: "11$",
    genre: "History",
    numberofpages: "179p",
    image:
      "https://www.libertyhumanrights.org.uk/wp-content/uploads/2019/12/Soldiers-rights-Twitter-930x523.jpg",
    description: "History book",
  },
  {
    name: "The prospect ",
    author: "Eliot Parker",
    msrp: "17$",
    genre: "Sport",
    numberofpages: "175p",
    image:
      " https://m.media-amazon.com/images/M/MV5BNzc5MjkzZWEtMjBmZS00NDJlLWI3N2UtNzgwYmI4ZGM5ODM5XkEyXkFqcGdeQXVyOTMwNjQ3Nzg@._V1_.jpg",
    description: "Sport book",
  },
  {
    name: "The winter Road",
    author: "Terry Hokenson",
    msrp: "10$",
    genre: "Children",
    numberofpages: "123p",
    image:
      " https://blog.drivedifferent.com/hs-fs/hubfs/SMI-BLOG-How-to-Navigate-Winter-Road-Conditions-Safely.jpg?width=782&name=SMI-BLOG-How-to-Navigate-Winter-Road-Conditions-Safely.jpg",
    description: "Children book",
  },
  {
    name: "Joe Rat ",
    author: "Mark Barrat ",
    msrp: "14$",
    genre: "Children ",
    numberofpages: "320p",
    image:
      "https://m.media-amazon.com/images/I/81TliYKSpJL._AC_UF1000,1000_QL80_.jpg",
    description: "Children book",
  },
  {
    name: "Religion",
    author: "Hent De Vries",
    msrp: "13$",
    genre: "Philosophy",
    numberofpages: "544p",
    image:
      "https://m.media-amazon.com/images/I/61NHUDmFNpL._AC_UF1000,1000_QL80_.jpg",
    description: "Philosophy book",
  },
  {
    name: "The moral theory",
    author: "Todd Marry",
    msrp: "34?59$",
    genre: "Philosophy",
    numberofpages: "164p",
    image:
      "https://m.media-amazon.com/images/I/81uRjWJOAnL._AC_UF1000,1000_QL80_.jpg",
    description: "Philosophy book",
  },
];

function display() {
  for (i = 0; i < array.length; i++) {
    $("#items").append(` <div class="item">
        <img class="img" src=${array[i].image} >
        <h1 style="color:#d16924" ><i>${array[i].name}</i></h1> <h1 style="color:#d16924"><i>${array[i].author}</i></h1> <h1 style="color:#d16924"><i>${array[i].msrp}</i></h1> <h1 style="color:#d16924"><i>${array[i].numberofpages}</i></h1> 
       
        <h1 style="color:#d16924"><i>${array[i].description}</i></h1></div>`);
  }
}
display();

function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i]);
  }
}


var allImages = $(".img");


var linkUrl = [
  "https://en.wikipedia.org/wiki/Night_and_Day_(Woolf_novel)",
  "https://www.goodreads.com/book/show/35992.The_Black_Book",
  "https://www.goodreads.com/book/show/3439217-phoenix",
  "https://en.wikipedia.org/wiki/Line_of_Contact",
  "https://www.abebooks.com/9781434993731/Prospect-Eliot-Parker-1434993736/plp",
  "https://www.librarything.com/work/1789647",
  "https://www.goodreads.com/book/show/1237207.Joe_Rat",
  "https://journals.openedition.org/rsr/8957?lang=de",
  "https://www.psupress.org/books/titles/0-271-01468-7.html",
];


allImages.each(function (index) {
  $(this).click(function () {
    
    window.open(linkUrl[index]);
  });
});
