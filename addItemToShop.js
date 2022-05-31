function shopItem(name, image=null, description, price) {
    shopMenuDiv.innerHTML += `<div class='shopItem'><div style="display: inline; margin-left: 20px;">${name}</div><p style="text-align: right; font-size: 20px; margin-top: -35px; margin-right: 20px;">${description}, <span style="color: green;">$${price}<span></p></div>`
}
