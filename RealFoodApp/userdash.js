const FoodData = [
    {
        "Quisar Quiche": {
          "img": "Quisar_Quiche.jpg",
          "price": 9.99,
          "name": "Quisar Quiche",
          "rating": 4.5
        },
        "Intergalactic Goulash": {
          "img": "Intergalactic_Goulash.jpg",
          "price": 8.99,
          "name": "Intergalactic Goulash",
          "rating": 4.4
        }
        ,
        "Cosmic Cavier": {
          "img": "Cosmic_Cavier.jpg",
          "price": 15.99,
          "name": "Cosmic Cavier",
          "rating": 4.7
        },
        "Interstellar S'mores": {
          "img": "Interstellar_S'mores.jpg",
          "price": 7.99,
          "name": "Interstellar S'mores",
          "rating": 4.0
        },
        "Gorgomaxian Meklent": {
          "img": "Gorgomaxian_Meklent.jpg",
          "price": 11.99,
          "name": "Gorgomaxian Meklent",
          "rating": 4.3
        },
        "Red Planet Antipasto": {
            "img": "8.jpg",
            "price": 8.99,
            "name": "Red Planet Antipasto",
            "rating": 4.6
          },
        "Thaloxian Kralix": {
          "img": "Thaloxian_Kralix.jpg",
          "price": 10.99,
          "name": "Thaloxian Kralix",
          "rating": 4.1
        },
        "Arlorxian Daxoblade": {
            "img": "5.jpg",
            "price": 13.99,
            "name": "Arlorxian Daxoblade",
            "rating": 4.4
          },
        "Cosmic Crab Cakes": {
          "img": "Cosmic_Crab_Cakes.jpg",
          "price": 10.99,
          "name": "Cosmic Crab Cakes",
          "rating": 4.6
        },
        "Martian Mountain Stew": {
            "img": "Martian_Mountain_Stew.jpg",
            "price": 12.99,
            "name": "Martian Mountain Stew",
            "rating": 4.2
          }
    }
  ];
  
  
  // Extract the food items and ratings into an array
  let foodArr = Object.values(FoodData[0]);

  // Sort the food items based on rating in descending order
  foodArr= foodArr.sort((a, b) => b.rating - a.rating);
  
  
  
  function createCard(el) {
    // Create elements for card
    let div = document.createElement('div');
    let img = document.createElement('img');
    let div2 = document.createElement('div');
    let h4 = document.createElement('h4');
    let p = document.createElement('p');
    let div3 = document.createElement('div');
    let price = document.createElement('span');
    let cart = document.createElement('button');
  
    // Set attributes and content for elements
    div.classList.add('card');
    img.src = el.img;
    img.alt = el.name;
    h4.innerText = el.name;
    p.innerText = `Rating: ${el.rating}/10`;
    price.innerText = el.price ? `$${el.price.toFixed(2)}` : '';
    cart.innerHTML = `Add to Cart`;
  
    // Add event listener to "Add to Cart" button
    cart.addEventListener('click', function(e) {
      addToCart(el);
    });
  
    // Append elements to card
    div2.append(h4, p);
    div3.append(price, cart);
    div.append(img, div2, div3);
    return div;
  }
  
  function addToCart(item) {
    // Create food object and push to foodArr
    let foodObj = {
      name: item.name,
      price: item.price,
      img: item.img
    };
    foodArr.push(foodObj);
    localStorage.setItem('food', JSON.stringify(foodArr));
    updateCartNotification(item);
  }
  
  function updateCartNotification(item) {
    let notifd = document.getElementById('notif');
    let timer = setInterval(() => {
      notifd.innerHTML = `${item.name} <b>added to cart</b>`;
      notifd.style.display = 'block';
    }, 300);
  
    setTimeout(() => {
      notifd.style.display = 'none';
      clearInterval(timer);
    }, 2000);
  }
  
  function displayCards() {
    const showElement = document.getElementById('show');
    
    foodArr.forEach((item) => {
      const card = createCard(item); // Create the card element
      showElement.appendChild(card); // Append the card to the container element
    });
  }
  
  displayCards();
  