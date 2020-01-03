// values hardcoded for testing
user = "Username"
pass = "Password"

products = [
    {
        "name": "Nutella",
        "price": "10",
        "img": "nutella.jpg"
    },
    {
        "name": "Nutella",
        "price": "10",
        "img": "nutella.jpg"
    },
    {
        "name": "Nutella",
        "price": "10",
        "img": "nutella.jpg"
    },
    {
        "name": "Nutella",
        "price": "10",
        "img": "nutella.jpg"
    },
    {
        "name": "Nutella",
        "price": "10",
        "img": "nutella.jpg"
    },
    {
        "name": "Nutella",
        "price": "10",
        "img": "nutella.jpg"
    },
    {
        "name": "Nutella",
        "price": "10",
        "img": "nutella.jpg"
    },
    {
        "name": "Nutella",
        "price": "10",
        "img": "nutella.jpg"
    },
]

document.addEventListener("DOMContentLoaded", () => {
    products.forEach(item => {
        const card = (i) => {
            return '<div class="card"><img src="img/' + i.img + '" alt="nutella"><div class="price">' + i.price + '€</div><div class="buy" onclick="buy()">BUY</div><div class="name">' + i.name + '</div></div>'
        }

        document.querySelector('main').innerHTML += card(item)
    })
})

const buy = _ => {
    document.querySelector('#black_overlay').style.display = "block"
}

const cancel = _ => {
    document.querySelector('#black_overlay').style.display = "none"
}

const confirm = _ => {
    getUser = document.querySelector('#name').value
    getPass = document.querySelector('#pass').value
    if (getUser == user & getPass == pass) { // POST to the server
        document.querySelector('.form').style.color = "black"
        document.querySelector('#lightbox').style.display = "none"
        document.querySelector('#lightbox2').style.display = "block"
    } else {
        document.querySelectorAll('.form input')[0].style.color = "red"
        document.querySelectorAll('.form input')[1].style.color = "red"
    }
}

const confirmBuy = _ => {
    // sends POST request to the server
    console.log("request sent to the server");
}