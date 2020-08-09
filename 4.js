// a
let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",    
    address: 
    {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    }
let data2 = {
    name:"Satria Adhi Nugraha",
    email:"satriaadhinugraha05@gmail.com",
    hobby: ['futsal','renang','anime','komik']
}

    const databaru ={...data,...data2}
    
    console.log(databaru)

// b
const { address } = data
const {street, city} = address
console.log(street)
console.log(city)
