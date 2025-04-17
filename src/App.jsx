import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    async function getAllUsers () {
      let response = await fetch('http://localhost:5000', {headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}, method: 'POST', body: JSON.stringify({"query": "{getAllUsers{_data{id, email}, _statusCode}}"})});
      const users = (await response.json()).data.getAllUsers._data.map(user => {
        return {
          email: user.email,
          id: user.id
        }
      });
      const emails = users.map(user => 
        <li key={user.id}>{user.email}</li>
      );
      setEmails(emails);
      
    }
    getAllUsers();
  }, [])
  return (
    <ul>
      {emails}
    </ul>
  );
  
}

export default App
