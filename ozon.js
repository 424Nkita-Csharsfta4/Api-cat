fetch("https://www.ozon.ru/category/elektronika-15500/").then(resp=>console.log(resp)); let str = "Скачать фото" let strHtml = str.link("https://sun9-west.userapi.com/sun9-3/s/v1/ig2/-c8bWQgrs3b_vftFUGO3rhCplJGFABA5AR4VhR6_6-aXEY4t7yqE1bYZ2ssVXQMAGvrDO4N4DlmedUetsqDJhTpe.jpg?size=736x735&quality=95&type=album") document.write(strHtml); let items =["Twitter","Instagram","Youtube"]; let index = Math.floor(Math.random()*items.length); items[index] for(let i of items){ console.log(i); }