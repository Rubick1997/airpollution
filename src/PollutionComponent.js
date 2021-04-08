// import React, { useEffect, useState } from "react";
// // import { API_KEY } from "./requests";
// function PollutionComponent() {
// 	const [countries, setCountries] = useState([]);

// 	useEffect(() => {
// 		async function fetchData() {
// 			try {
// 				const data = await fetch(
// 					`http://api.airvisual.com/v2/countries?key=${API_KEY}`
// 				);
// 				const info = await data.json();
// 				setCountries(info.data);
// 			} catch (error) {
// 				console.log(error.message);
// 			}
// 		}
//         fetchData();
// 	});
// return(
//     <div>
//         {countries.slice(0,20).map(item=>(
//             <div>
//                 {item.country}
//             </div>
//         ))}
//     </div>
// )
// }

// export default PollutionComponent
