

document.addEventListener('DOMContentLoaded', (event) => 
{
    fetch("http://localhost:3000/pups")
    .then((resp) => resp.json())
    .then((element) =>
    {
        const div = document.getElementById("dog-bar")
        element.forEach((e) =>
        {
            const span = document.createElement('span')
            span.innerText = e.name

            const bigDiv = document.getElementById("dog-info")
            
            span.addEventListener('click', () =>
            {
                bigDiv.innerHTML = ""

                const image = document.createElement("img")
                image.src = e.image
                bigDiv.append(image)

                const name = document.createElement('h2')
                name.innerText = e.name
                bigDiv.append(name)

                const button = document.createElement("button")
                if (e.isGoodDog == true)
                {
                    button.innerText = "Good dog!"
                }
                else if (e.isGoodDog == false)
                {
                    button.innerText = "Bad dog!"
                }
                bigDiv.append(button)
            })
            div.append(span)
        })
    })
})
