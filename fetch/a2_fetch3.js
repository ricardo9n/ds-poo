//ok - local
	//global
//import fetch from 'node-fetch';
	//local
import fetch from '/C:/Users/Ricardo/AppData/Roaming/npm/node_modules/node-fetch/src/index.js';

//fetch: https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch

async function consulta1 (url, payload=""){
	console.log(`1: ${url}`);
	fetch(url)
	.then(resp => resp.body)
	//.then(resp => resp.json())
	//.then(resp => console.log(resp))
	;
}

async function consulta2 (url, payload=""){
	console.log(`2: ${url}`);
	try{
		let resp = await fetch(url);
			resp = await resp.text();
		console.log(resp);
		return resp;
	}catch (error){
		console.log(error);
	}
}

let payload = {
	"method": "POST", 
	"data": {
		"token": "7vUJuYF6bnETfsvQBhzOyQ",
		"data": {
			"numeros":  [1,2,3]
	  	}
	  }
	}

function main(){
		console.log('main');
		let url= "https://app.fakejson.com/q";
		//let url = 'https://codepen.io/CampCoderMoe/pen/oZZBya';
		//let url = 'https://jsonplaceholder.typicode.com/todos/1';
		consulta2(url, payload);
		//consulta1(url, payload);
		console.log(JSON.stringify(payload));
}

main();