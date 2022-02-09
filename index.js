const BASE_URL = 'https://dog.ceo/api/breeds/image/random';
const dogButton = document.querySelector('#change-dog')
const dogImage = document.querySelector('#dog')

const getDogs = async () => {
    try {
        const data = await fetch(BASE_URL)
        .then(response => response.json())
        .catch(e => console.log(e))
        return data.message
    
    } catch(e) {
        console.log(e.message)
    }
}

const loadImg = async () => {
    dogImage.src = await getDogs();
}

dogButton.addEventListener('click', loadImg)

loadImg()