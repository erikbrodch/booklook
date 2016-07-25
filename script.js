var booklookApp = function () {

	var books = [];
	// store the data I get and push to an array using a function
	var addNewBook = function(bookTitle,bookAuthor,bookDescription,imgUrl,numberOfPages,numberOfRead) {
		//insert book to object
		var readTime = numberOfPages/numberOfRead
		var newBook = {
			title: bookTitle,
			author: bookAuthor,
			description: bookDescription,
			image: imgUrl,
			pages: numberOfPages,
			minutesYouReadDay: numberOfRead,
			readtime: readTime
			}
			//push object to books arr
			books.push(newBook);

			console.log("page number insdie", newBook)

	}

	//render the data I got and write how will it be in the html (empty first)
	var renderBook = function(){

		//empty existing text
		$(".result_fields").empty()

		//for loop on book arr and append
			for (var i = 0; i<books.length; i++) {
				
				var source = $("#book-template").html();

				// compile our template html using handlebars
				var template = Handlebars.compile(source);

				// fill our template with information
				var newHTML = template(books[i]);

				// append our new html to the page
				$(".result_fields").append(newHTML);
			}

	}
	//return functions
	return {
		addnewbook: addNewBook,
		renderbook:renderBook,
	}
};

var app = booklookApp();





//add event
$(".btn-primary").on('click', function (e) {
  e.preventDefault();
  //get variables
  var bookTitle = $("#bookTitle1").val();
  var bookAuthor = $("#bookAuthor1").val();
  var bookDescription = $("#bookSescription1").val();
  var imgUrl = $("#imageUrl1").val();
  var numberOfPages = parseInt($("#numberOfPages1").val());
  var numberOfRead = parseInt($("#minutesuRead1").val());

  //invoke function

  app.addnewbook(bookTitle,bookAuthor,bookDescription,imgUrl,numberOfPages,numberOfRead);
  app.renderbook();
  console.log("button click page inp value",typeof numberOfPages);




});
/*One Hundred Years of Solitude
 Gabriel García Márquez
 tells the multi-generational story of the Buendía family, whose patriarch, José Arcadio Buendía, founds the town of Macondo, the metaphoric Colombia.
 https://en.wikipedia.org/wiki/File:Cien_a%C3%B1os_de_soledad_(book_cover,_1967).jpg
 300
 10

*/