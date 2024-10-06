//отримує кнопку з HTML по ID
const button = document.querySelector('#button')
button.addEventListener('click', () => {
     
    
    fetch('/posts/create', {
     
        method: 'POST',
        
        body: JSON.stringify({
            name: 'New Post!!!',
            author: 'Noname',
            id: '4',
            date: '06.10'
        }),
        
        headers: {
            'Content-Type': 'application/json'
        }
    })
})