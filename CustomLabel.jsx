import './CustomLabel.css';

function CustomLabel({theme, username, year, degree, major, statement}) {
  return (
    <blockquote className="label" id={theme}>
      <p>
      {username}, <i>Yale University Class of {year}.</i> <br />
      {degree} Candidate, {major}. <br />
      {statement}
      </p>
    </blockquote>
  );
}

export default CustomLabel;
