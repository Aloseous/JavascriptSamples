const myPromise = (cnt) => Promise.resolve(cnt);

const checkfun = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('yes ece')
    // return "sec"
  },3000)

})
const checkfun2 = async () => {
  return 'immediate';

}


function firstFunction() {
  myPromise('1st').then((res) => console.log(res));

  console.log("second 1");
}

async function secondFunction() {
  // console.log(await checkfun);

   const getdate = await checkfun.then(data => {
    console.log('exe')
   })
  console.log('getdate')
  console.log("second 2");
}

firstFunction();
secondFunction();




// const makeRequest = () => {
//   try {
//     getJSON()
//       .then(result => {
//         // this parse may fail
//         const data = JSON.parse(result)
//         console.log(data)
//       })
//   } catch (err) {
//     console.log(err)
//   }
// }

// console.log(makeRequest)

// const makeRequestP = () =>
//   getJSON()
//     .then(data => {
//       console.log('from p-->',data.json())
//       return "done"
//     })

// makeRequestP()

// const makeRequest = async () => {
//   const resp = await getJSON()
//   const data = await resp.json()
//   console.log(data)
//   return "done"
// }

// makeRequest()

// function getJSON(){
//   return fetch('https://reqres.in/api/users?page=2')
// }


// const getWeather = ()  => {
//     return new Promise ((resolve, reject) => {
//       setTimeout(() => resolve('rainy'), 100)
//     })
//   }

//   const getWeatherIcon = (iconStr) => {
//     console.log('iconStr--',iconStr)
//       return new Promise((resolve, reject) => {
//         switch (iconStr) {
//           case 'winter':
//             resolve('😜');
//             break;
//             case 'rainy':
//             resolve('😅');            
//             break;        
//           default:
//             reject('😡')
//             break;
//         }
//       })
  
//   }
//   const onSuccess = (data) => {
//     console.log(`Success ${data}`)
//   }
    
//   const onError = (data) => {
//     console.log(`Error ${data}`)
//   }
    
    
//     const weather = getWeather();
//     weather.then(document.body.innerHTML = getWeatherIcon)
//     weather.then(onSuccess, onError)
//     console.log('weather -->',weather)

// const getWeather = (callBack)  => {
//   console.log('getWeather')
//   setTimeout(() => {
//     callBack('Winter')
//   }, 3000)
// }

// const weatherReceived = (data) => {
//   console.log('weatherReceived')
//   const weather = data;
//   document.body.innerText =(weather)
// }
  
  
  
//   const weather = getWeather(weatherReceived);
  
  
  
  
  
  
  
  
//   const fetchPromiseData = () => {
//     const p1 = new Promise((resolve, reject) =>{
//         fetch(`https://jsonplaceholder.typicode.com/users`).then(response =>{
//             response.json().then(result => {
//                 console.log('pr result-->',result)
//             })
//         }) 
//     })
//     console.log('executed')
// }

//   fetchPromiseData()


//   const fetchDataAsync = async () => {
//     const res = await fetch(
//       `https://jsonplaceholder.typicode.com/users`,
//     ).then(resp =>{
//         // console.log(resp.json())
//         resp.json().then(result => {
//             console.log('result-->',result)
//         })
//     // const json = await res.json().then(resp =>{
//     //     console.log(resp)
//     // })
// })
// console.log('executed async')
  // }
  // fetchDataAsync()
