import PropTypes from "prop-types";

const Person = ({ person }) => {
  if (!person) return null;

  const { firstName, lastName, email } = person;

  return (
    <ul>
      <li>First Name: {firstName}</li>
      <li>Last Name: {lastName}</li>
      <li>Email: {email}</li>
    </ul>
  );
};

Person.propTypes = {
  person: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
  }),
};

export default Person;
