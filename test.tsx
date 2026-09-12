// import {useState, useEffect} from 'react';

// function App() {
//   const [username, setUsername] = useState("");

//   return (
//     <div>
//       <input value={username}
//       onChange={(e) => setUsername(e.target.value)}
//       placeholder="Enter your github username"
//       />

//       <Profile username={username}/>
//     </div>
//   )}

//     function Profile({username}){
//         const [user, setUser] = useState(null);

//         useEffect(() => {
//             fetch(`https://api.github.com/users/${username}`)
//             .then((res) => res.json())
//             .then((act) => setUser(act));
//         }, [username])

//         if(!username) return <p>Type a username to search</p>
//         if(!user) return <p>loading...</p>

//         return (
//             <div>
//                 <img src={user.avatar_url} width={50} />
//                 <p>{user.name}</p>
//             </div>
//         )
//     }

// export default App
