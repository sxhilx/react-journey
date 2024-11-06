function customRender(reactElement, container){
    /*
    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.childern
    domElement.setAttribute('href', element.props.href)
    
    container.appendChild(domElement)*/

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.childern;
    for(prop in reactElement.props){
        if(prop === 'childern') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement);
}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com'
    },
    childern: "Click me"
}

const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)