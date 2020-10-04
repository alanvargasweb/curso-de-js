const list = document.querySelectorAll('li');

list.forEach((item, index) => {
    let secondaryList = ['Mazzolinha','lulinha','brandao','dirley','ubirajara']
    item.textContent += secondaryList[index].toLocaleUpperCase();
})