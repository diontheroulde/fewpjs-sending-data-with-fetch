
    function submitData(name, email){
        
        const userData = {
            name : name,
            email : email
        }
        
        const configurationObject = {
            method : "POST",
            headers : {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body : JSON.stringify(userData)

            
        }
        
        
        
        return fetch('http://localhost:3000/users', configurationObject)
                .then(response => response.json())
                .then(object => {  // document.body.innerHTML = object[ "id" ]
                    console.log(object)
                    const newID = document.createElement('body')
                    newID.innerHTML =  object.id
                    document.querySelector("body").append(newID)  
                })
                .catch(error => {  //document.body.innerHTML = error.message
                    console.log(error)
                    alert("Uh Oh!")
                    const objectError = document.createElement('body')
                    objectError.innerHTML = error.message
                    document.querySelector('body').append(objectError)  

                    
                    

                })
    }
























// const formData =  {
//     dogName: "Byron",
//     dogBreed :"Poodle"
// }


// const configurationObject = {
//         method : "POST",
//         headers : {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body : JSON.stringify(formData)
//     }

// fetch('http://localhost:3000/dogs', configurationObject)
//     .then(response => response.json()) 
//     .then(object => console.log(object))