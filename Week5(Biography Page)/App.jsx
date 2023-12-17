import React from 'react';
import './App.css';
import Biography from './Components/Biography';
import Contact from "./Components/Contact"
import Languages from './Components/Languages';

function App() {
  const biographyData = {
    name: 'Osman Gündüz',
    birthDate: '04.07.2002',
    birthPlace: 'Konya/Turkey',
    bio: 'I live in Konya, and studying at Konya Food and Agriculture University as an Computer engineering student at 3. class.',
    Languages: [
      'CSS-HTML-Javascript',
      'Python',
      'Java',
      "C/C++"
    ],
    contact: {
      email: 'osman.gunduz@gmail.com',
      twitter: '@twitterhandle',
      linkedin: 'https://www.linkedin.com/in/osman-g%C3%BCnd%C3%BCz-2084a521b/',
      Github: 'https://github.com/OsmanGndz'
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Biography data={biographyData} />
        <Languages langs= {biographyData.Languages}/>
        <Contact contact={biographyData.contact} />
      </header>
    </div>
  );
}

export default App;
