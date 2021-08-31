# Search for logs in GrayLog


Данный проект призван упросить поиск однотипных логов в grayLog.
Плагин конфигурируется на основе Json. 
</br> 
Пример:
```Json
URL = "https://www.google.ru/search?q="
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
```
`URL` - ссылка по умолчанию (заменить на свою).
`Group one` - название группы.
</br> 
`Search for coffee` - название кнопки для вызова модального кона.
</br> 
`Title` - Описание того что нужно указать.
</br> 
`alternative_url` - альтернативная ссылка, указывается если `URL` должен быть не стандарный. Во всех остальных  случия `"false"`. 
</br>
`request_text` - Текст запроса. Символ `'` будет заменен на `"` при открытии ссылки.
