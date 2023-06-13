const form = document.querySelector("form");
form.onsubmit = (e) => {
  e.preventDefault();
  const country = document.querySelector("input").value.toLowerCase();
  if(document.querySelector('img')){
    document.querySelectorAll('img').forEach((img)=>{img.remove()})
  }
  fetchData(country)
};

const fetchData = (country)=>{
    fetch('https://flagcdn.com/en/codes.json')
    .then((response)=>{return response.json()})
    .then((result)=>{
        for (const key in result) {
            if ((result[key]).toLowerCase() === country) {
                const flag = document.createElement('img')
                flag.src = 'https://flagcdn.com/80x60/'+key+'.png'
                document.querySelector('.flag').prepend(flag)
            }
        }
    })
}

// const prepCurry = (fn)=>{
//   return function curry(...arg) {
//     arg.length === fn.length ? fn(...arg) : (...newArg)=> curry(...arg,...newArg)
//   }
// }

// const multiplyAll = (a,b,c,d) => {
//   e = a * b * c * d
//   console.log(e) 
// }

// const currAll = prepCurry(multiplyAll)

// currAll(1)(2)(3)(4)

const prepCurry = (fn) => {
  return function curry(...arg) {
    return arg.length === fn.length ? fn(...arg) : (...newArg)=> curry(...arg,...newArg)
  }
}

const multiplyAll = (a,b,c,d) => {
  e = a * b * c * d
  console.log(e) 
}

const currAll = prepCurry(multiplyAll)

currAll(1)(2)(3)(4)

