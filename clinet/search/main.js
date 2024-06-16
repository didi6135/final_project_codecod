


const createElement = () => {
    const createName = document.createElement('h2')
    const getData = localStorage.getItem('userDetails')
    createName.innerHTML = getData
    document.body.appendChild(createName)
    console.log(getData)
}

createElement()