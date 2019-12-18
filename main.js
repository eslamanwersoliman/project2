var i = 0;
var div = document.getElementById('asd');

// print viewed with ajax and php
$('#event').on('click', () => {
    $.ajax({
        method: 'get',
        url: 'connection.php',
        success: function (data) {
            $('#events p').append(data);
        }
    });
});

// alert(div.textContent);
function gen() {
    div.innerHTML = "";
    var num = document.getElementById("number").value;

    var arrlet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    do {
        var p = Math.floor(Math.random() * 26 - 1) + 1 + 1;;

        var letter = arrlet[p];
        var btn = document.createElement("button");

        var nums = document.createTextNode(letter);
        btn.appendChild(nums);
        btn.onclick = function (e) {
            var o = 0;

            for (var h = 1; h <= 26; h++) {
                if (e.target.innerHTML == arrlet[h]) {
                    o++; for (var t = 0; t < 26; t++) { document.getElementsByTagName('img')[t].setAttribute('style', 'display:none'); }
                    h += 1; document.getElementById(h).setAttribute('style', 'display:block');
                }
            }
        }
        div.append(btn);
        //  document.write("<br/>");
        i++;
    }
    while (i < num);
}

// add lisent to btns
function addLisentTobtns() {
    $('button').on('click', function () {
        // get old viewd words to localStorage
        var localItems = localStorage.getItem('word-viewd');
        // save it with the new one
        var items = [$(this).text()].concat(localItems)
    
        // save viewd words to localStorage
        localStorage.setItem('word-viewd', items);
    });
}
$('button').on('click', () => {
    addLisentTobtns()
});



// send to database in main.php from localStorage
setInterval(() => {
    if(localStorage.getItem('word-viewd') != '') {
        var v = localStorage.getItem('word-viewd').split(',');
        v.length -= 1;
        v.forEach((btn) => {
            $.ajax({
                method: 'POST',
                data: {'name': btn},
                url: 'main.php',
                success: function(data, status) {
                  console.log('you have created item id is ' + data)
                }
              });
        });
        localStorage.setItem('word-viewd', '');
    }
}, 5000);