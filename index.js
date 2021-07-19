// Основной div для вставки
var main = document.getElementById('main');

// Парсим аля JSON
var config_data = JSON.parse(config);
    // Проходим в цикле по первым жлементам массива
    for(var k in config_data){
        // Создаем блок details
        var details = document.createElement("details");
        // Создаем блок summary
        var summary = document.createElement("summary");
        // Добавляем в summary заголовок из k
        summary.appendChild(document.createTextNode(k))
        // Добавляем блок summary в details
        details.appendChild(summary);
        // Проходимся по вложенным ключам массива(Кнопкам)
        for(var s in config_data[k]){
            // Создаем блок p
            var p = document.createElement("p");
            // Создаем блок button
            var button = document.createElement("button");
            // Добавляем в summary заголовок из s
            button.appendChild(document.createTextNode(s));
            // Добавляем атрибут id с именем s
            button.setAttribute("id", s);
            // Добавляем атрибут class с именем opens
            button.setAttribute("class", "opens");            
            // Добавляем блок button в p
            p.appendChild(button);
            // Добавляем блок p в details
            details.appendChild(p)
       };
       main.appendChild(details);
    };

// Спасибо индусам
// Это штука определяет какую кнопку нажали и вызывает функцию ButtonClickHandler
var allButtons = document.querySelectorAll('button[id]');
for (var i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener('click', function() {
    ButtonClickHandler(this.innerHTML);
  });
}

function ButtonClickHandler(event) {
    console.log(event)
    // Выводим модальное окно
    var overlay = document.getElementById("overlay");
    overlay.style.visibility = 'visible';
	overlay.style.opacity = '1';
	overlay.style.transition = 'all 0.7s ease-out 0s';
    var asd = document.getElementById("qwe");
    // Добавляем нужный текст
    // Берем Названия груп
    for(j in config_data){
        // проваливаемся внутрь и смотрим название кнопки
        for(i in config_data[j]){
            // Если название кнопки и i совпадают
            if(event == i){
                // Устанавливает текст Заголовка
                var title = config_data[j][i]["title"];
                document.querySelector(".title_popup").innerHTML = title;
                // Устанавливаем класс
                asd.setAttribute("class", config_data[j][i]["request_text"]);     
            }
        }
    }
    }

// функиця перехода
var sss = document.getElementById("go");
sss.onclick = function OpenLogs(){
    // Получает текст из title_popup
    var title = document.getElementById("title_popup").textContent;
    var req_text = document.getElementById('text')
    var msg = req_text.value;
    var ff = document.getElementById("qwe");
    // Првоеряем что оно не пустое и не пробел
    if(msg == "" || msg == " "){
        return
    }
    // пробигаемся по ключам
    for(j in config_data){
        // проваливаемся внутрь и смотрим название кнопки
        for(i in config_data[j]){
            // нашли совпадение
            if(title == config_data[j][i]["title"] && ff.className == config_data[j][i]["request_text"] ){
                // проверяем что есть альтернативная ссылка
                if(config_data[j][i]["alternative_url"] != "false"){
                    var search = config_data[j][i]["request_text"].replace("{{@}}", msg).replace("'", '"');
                    window.open(config_data[j][i]["alternative_url"] + search, '_blank')
                }
                // если альтернативной ссылки нет
                else{
                    var search = config_data[j][i]["request_text"].replace("{{@}}", msg).replaceAll("'", '"');
                    window.open(URL + search, '_blank')
                }
            }
        }
    }
}

// Ловим нажатие закртыь окно
var ss = document.getElementById("closed");
ss.onclick = function closed(){
    var bb = document.getElementById('overlay');
	bb.style.visibility = 'hidden';
	bb.style.opacity = '0';
    var req_text = document.getElementById('text');
    req_text.value ="";

}