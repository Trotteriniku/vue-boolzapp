export{dateConstructor} 
dateConstructor() {
    const date = new Date()

    let formattedDate = date.toLocaleDateString() + '  ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    return formattedDate
},