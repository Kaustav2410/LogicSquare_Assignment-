const cafeTable = document.getElementById('cafeDetails');
const cafeBody = document.querySelector('tbody');
const input = document.getElementById('cafename')
input.addEventListener('input',searchCafe)

document.addEventListener('DOMContentLoaded', () => {
    searchCafe({ target: input }); // Simulate input event with input element as target
});
async function searchCafe(e){
    
    const cafeUrl = 'http://localhost:4000'
    const CAFE = await fetch(cafeUrl).then(response => response.json()) 
    const cafes = CAFE.cafe;
    const places =CAFE.place;
    // console.log(CAFE.cafe)
    
    //    Return a array of objects that matches the search term
    let cafeList = [];
    
    // Use map function to iterate over each object 
    // Check whether the search term in present in the current object name 
    let searchTerm = e.target.value.toLowerCase() || '';
    console.log(searchTerm);
    cafes.map((key)=>{
        if(key.name.toLowerCase().includes(searchTerm)) {
            // if it is then we find the address in the places array 
            // where place_id and id is same 
            let cafeDetails={};
            let cafeAddress = places.find((temp)=>{
                return temp.id===key.location_id;
            })
            // console.log(cafeAddress);
            // Add elements using spread operator 
            cafeDetails = {name:key.name, ...cafeAddress};
            cafeList.push(cafeDetails);
        }
    })
    cafeBody.innerHTML='';
    cafeList.forEach((cafe)=>{
        const row = document.createElement('tr');
        for(let  key in cafe){
            const col  = document.createElement('th');
            col.textContent=cafe[key];
            row.appendChild(col);
        }
        cafeBody.append(row);
    })
}