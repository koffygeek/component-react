import Person from './Person'
import './App.css'


function App() {
  const persons = [
    {
       "fullName": "John Doe",
        "bio": "A software engineer with a passion for technology.",
        "imgSrc": 'https://randomuser.me/api/portraits/men/88.jpg',
        "profession": "Software Engineer",
        "shows": true
      },
    {
       "fullName": "Alexia Doe",
        "bio": "A software engineer with a passion for technology.",
        "imgSrc":'https://randomuser.me/api/portraits/women/64.jpg',
        "profession": "Software Engineer",
        "shows": true
      },
    {
       "fullName": "Amanda Doe",
        "bio": "A software engineer with a passion for technology.",
        "imgSrc": 'https://randomuser.me/api/portraits/women/90.jpg',
        "profession": "Software Engineer",
        "shows": false
      },
    {
       "fullName": "Aicha Doe",
        "bio": "A software engineer with a passion for technology.",
        "imgSrc": 'https://randomuser.me/api/portraits/women/54.jpg',
        "profession": "Software Engineer",
        "shows": true
      },
    {
       "fullName": " Clarence Doe",
        "bio": "A software engineer with a passion for technology.",
        "imgSrc": 'https://randomuser.me/api/portraits/men/75.jpg',
        "profession": "Software Engineer",
        "shows": false
      },
  
  ]

  return (
    
    <>
      <Person data={persons}/>
    
    </>
  )
}

export default App
