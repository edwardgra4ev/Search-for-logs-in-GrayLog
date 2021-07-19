URL = "https://www.google.ru/search?q="
config = `
{   
    "Group one" : {
        "Search for coffee" : {
            "title" : "Specify the type of coffee",
            "alternative_url" : "false",
            "request_text" : "Where to buy coffee beans '{{@}}'"
        }
    },
    "Group two" : {
        "Ordering pizza" : {
            "title" : "What kind of pizza do you want to order?",
            "alternative_url": "false",
            "request_text": "Order '{{@}}' pizza"
        },
        "Order pasta" : {
            "title" : "What kind of pasta do you want to order?",
            "alternative_url": "false",
            "request_text": "Order '{{@}}' pasta"
        }
    }
}
`