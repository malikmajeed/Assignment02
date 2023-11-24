// Sample book data (replace this with your actual data fetched from JSON)
const booksData = [
    {
      "id": 1,
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "category": "Fiction",
      "price": 12.99,
      "description": "Classic novel set in the American South during the 1930s.",
      "cover_image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRyBGZJNItRuruzp9BXfnuz-G7fqkIYg77-oHsS1zN24ZDQHuIT"
    },
    {
      "id": 2,
      "title": "1984",
      "author": "George Orwell",
      "category": "Dystopian",
      "price": 9.99,
      "description": "Classic dystopian novel about totalitarianism and surveillance.",
      "cover_image": "images/1984.jpg"
    },
    {
        "id": 3,
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "category": "Classic",
        "price": 11.50,
        "description": "A story of the Jazz Age and the American Dream.",
        "cover_image": "images/great_gatsby.jpg"
      },
      {
        "id": 4,
        "title": "Moby-Dick",
        "author": "Herman Melville",
        "category": "Classic",
        "price": 13.25,
        "description": "Novel about the voyage of the whaling ship Pequod.",
        "cover_image": "images/moby_dick.jpg"
      },
      {
        "id": 5,
        "title": "Brave New World",
        "author": "Aldous Huxley",
        "category": "Science Fiction",
        "price": 10.75,
        "description": "A dystopian social science fiction novel.",
        "cover_image": "images/brave_new_world.jpg"
      },
      {
        "id": 6,
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "category": "Classic",
        "price": 9.99,
        "description": "Classic romantic novel of manners.",
        "cover_image": "images/pride_and_prejudice.jpg"
      },
      {
        "id": 7,
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "category": "Fiction",
        "price": 8.50,
        "description": "Novel known for its themes of teenage angst and alienation.",
        "cover_image": "images/catcher_in_the_rye.jpg"
      },
      {
        "id": 8,
        "title": "The Lord of the Rings",
        "author": "J.R.R. Tolkien",
        "category": "Fantasy",
        "price": 15.99,
        "description": "High-fantasy novel series.",
        "cover_image": "images/lord_of_the_rings.jpg"
      },
      {
        "id": 9,
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "category": "Fantasy",
        "price": 11.75,
        "description": "Prequel to The Lord of the Rings.",
        "cover_image": "images/the_hobbit.jpg"
      },
      {
        "id": 10,
        "title": "The Da Vinci Code",
        "author": "Dan Brown",
        "category": "Mystery",
        "price": 14.25,
        "description": "Mystery thriller novel.",
        "cover_image": "images/da_vinci_code.jpg"
      },
      {
        "id": 11,
        "title": "The Alchemist",
        "author": "Paulo Coelho",
        "category": "Fiction",
        "price": 10.50,
        "description": "Philosophical novel.",
        "cover_image": "images/alchemist.jpg"
      },
      {
        "id": 12,
        "title": "A Tale of Two Cities",
        "author": "Charles Dickens",
        "category": "Classic",
        "price": 12.25,
        "description": "Historical novel set during the French Revolution.",
        "cover_image": "images/tale_of_two_cities.jpg"
      },
      {
        "id": 13,
        "title": "War and Peace",
        "author": "Leo Tolstoy",
        "category": "Historical Fiction",
        "price": 16.99,
        "description": "Epic novel set during the Napoleonic Wars.",
        "cover_image": "images/war_and_peace.jpg"
      },
      {
        "id": 14,
        "title": "The Picture of Dorian Gray",
        "author": "Oscar Wilde",
        "category": "Classic",
        "price": 11.99,
        "description": "Gothic and philosophical novel.",
        "cover_image": "images/dorian_gray.jpg"
      },
      {
        "id": 15,
        "title": "The Adventures of Huckleberry Finn",
        "author": "Mark Twain",
        "category": "Classic",
        "price": 10.99,
        "description": "Novel known for its social commentary.",
        "cover_image": "images/huckleberry_finn.jpg"
      },
      {
        "id": 16,
        "title": "Jane Eyre",
        "author": "Charlotte Bronte",
        "category": "Classic",
        "price": 9.50,
        "description": "Autobiographical novel.",
        "cover_image": "images/jane_eyre.jpg"
      },
      {
        "id": 17,
        "title": "The Road",
        "author": "Cormac McCarthy",
        "category": "Dystopian",
        "price": 13.75,
        "description": "Post-apocalyptic novel.",
        "cover_image": "images/the_road.jpg"
      },
      {
        "id": 18,
        "title": "Frankenstein",
        "author": "Mary Shelley",
        "category": "Gothic",
        "price": 11.25,
        "description": "Gothic novel about science and creation.",
        "cover_image": "images/frankenstein.jpg"
      },
      {
        "id": 19,
        "title": "The Stand",
        "author": "Stephen King",
        "category": "Horror",
        "price": 14.50,
        "description": "Post-apocalyptic horror/fantasy novel.",
        "cover_image": "images/the_stand.jpg"
      },
      {
        "id": 20,
        "title": "Crime and Punishment",
        "author": "Fyodor Dostoevsky",
        "category": "Classic",
        "price": 12.50,
        "description": "Psychological novel.",
        "cover_image": "images/crime_and_punishment.jpg"
      },
      {
        "id": 21,
        "title": "Les Miserables",
        "author": "Victor Hugo",
        "category": "Classic",
        "price": 13.99,
        "description": "Historical novel set in France.",
        "cover_image": "images/les_miserables.jpg"
      },
      {
        "id": 22,
        "title": "The Shining",
        "author": "Stephen King",
        "category": "Horror",
        "price": 11.75,
        "description": "Horror novel.",
        "cover_image": "images/the_shining.jpg"
      },
      {
        "id": 23,
        "title": "The Odyssey",
        "author": "Homer",
        "category": "Classic",
        "price": 10.25,
        "description": "Ancient Greek epic poem.",
        "cover_image": "images/the_odyssey.jpg"
      },
      {
        "id": 24,
        "title": "The Stranger",
        "author": "Albert Camus",
        "category": "Philosophical",
        "price": 12.25,
        "description": "Existential novel.",
        "cover_image": "images/the_stranger.jpg"
      },
      {
        "id": 25,
        "title": "Gone with the Wind",
        "author": "Margaret Mitchell",
        "category": "Historical Fiction",
        "price": 13.50,
        "description": "Historical novel set in the American South during the Civil War.",
        "cover_image": "images/gone_with_the_wind.jpg"
      },
      {
        "id": 26,
        "title": "The Kite Runner",
        "author": "Khaled Hosseini",
        "category": "Contemporary",
        "price": 10.99,
        "description": "Contemporary novel set in Afghanistan.",
        "cover_image": "images/kite_runner.jpg"
      },
      {
        "id": 27,
        "title": "The Bell Jar",
        "author": "Sylvia Plath",
        "category": "Autobiographical",
        "price": 11.50,
        "description": "Autobiographical novel.",
        "cover_image": "images/bell_jar.jpg"
      },
      {
        "id": 28,
        "title": "The Count of Monte Cristo",
        "author": "Alexandre Dumas",
        "category": "Adventure",
        "price": 12.99,
        "description": "Adventure novel.",
        "cover_image": "images/count_of_monte_cristo.jpg"
      },
      {
        "id": 29,
        "title": "Anna Karenina",
        "author": "Leo Tolstoy",
        "category": "Classic",
        "price": 12.75,
        "description": "Tragic novel.",
        "cover_image": "images/anna_karenina.jpg"
      },
      {
        "id": 30,
        "title": "The Grapes of Wrath",
        "author": "John Steinbeck",
        "category": "Classic",
        "price": 11.99,
        "description": "Novel set during the Great Depression.",
        "cover_image": "images/grapes_of_wrath.jpg"
      }
    


  ];
  // Function to extract unique book categories
// Function to extract unique book categories
function extractCategories() {
    const categories = new Set();
  
    booksData.forEach(book => {
      categories.add(book.category);
    });
  
    return Array.from(categories);
  }
  
  // Function to display book categories in the dropdown
  function displayCategories() {
    const dropdownContent = document.querySelector('.dropdown-content');
    const categories = extractCategories();
  
    categories.forEach(category => {
      const categoryLink = document.createElement('a');
      categoryLink.textContent = category;
      categoryLink.href = `#`; // Replace with actual category links if needed
      dropdownContent.appendChild(categoryLink);
    });
  }
  
  // Show/hide submenu on hover
  document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
  
    dropdown.addEventListener('mouseenter', () => {
      const submenu = dropdown.querySelector('.dropdown-content');
      submenu.style.display = 'block';
    });
  
    dropdown.addEventListener('mouseleave', () => {
      const submenu = dropdown.querySelector('.dropdown-content');
      submenu.style.display = 'none';
    });
  
    displayCategories();
  });
  
  // Function to display books in the HTML
  function displayBooks() {
    const booksContainer = document.querySelector('.books-container');
  
    booksData.forEach(book => {
      const bookCard = document.createElement('div');
      bookCard.classList.add('book-card');
  
      const coverImg = document.createElement('img');
      coverImg.src = book.cover_image;
      coverImg.alt = book.title;
  
      const title = document.createElement('h3');
      title.textContent = book.title;
  
      const author = document.createElement('p');
      author.textContent = `Author: ${book.author}`;
  
      const category = document.createElement('p');
      category.textContent = `Category: ${book.category}`;
  
      const price = document.createElement('p');
      price.classList.add('price');
      price.textContent = `$${book.price}`;
  
      const addToCartBtn = document.createElement('button');
      addToCartBtn.classList.add('add-to-cart');
      addToCartBtn.textContent = 'Add to Cart';
  
      bookCard.appendChild(coverImg);
      bookCard.appendChild(title);
      bookCard.appendChild(author);
      bookCard.appendChild(category);
      bookCard.appendChild(price);
      bookCard.appendChild(addToCartBtn);
  
      booksContainer.appendChild(bookCard);
    });
  }
  
  // Display the books on page load
  document.addEventListener('DOMContentLoaded', () => {
    displayBooks();
  });
  


  // Fetch book details based on categories from books.json file
function fetchBooksByCategory(category) {
    // Fetch books based on the selected category
    // Perform JSON fetch or filtering of books based on category
    // Example: Use fetch or filter method to get books by category from booksData
  
    // Replace the following example code with actual implementation
    const filteredBooks = booksData.filter(book => book.category === category);
    displayBooks(filteredBooks);
  }
  
  // Display books based on the selected category
  function displayBooks(books) {
    const bookListSection = document.querySelector('.book-list');
    bookListSection.innerHTML = ''; // Clear previous content
  
    books.forEach(book => {
      const bookCard = document.createElement('div');
      bookCard.classList.add('book-card');
  
      // Create elements to display book details (title, author, cover image, price, etc.)
      // Append these elements to bookCard element
  
      bookListSection.appendChild(bookCard);
    });
  }
  
  // Example usage of fetchBooksByCategory function with a selected category
  const selectedCategory = 'Fiction'; // Replace with the selected category
  fetchBooksByCategory(selectedCategory);
  