function Languages({ langs }) {
    return (
      <div>
        <h2>Programming Languages</h2>
        <ul>
        {langs.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
      </div>
    );
  }
  
  export default Languages;