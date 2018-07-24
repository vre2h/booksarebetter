export default function(values) {
  const errors = {};
  const requiredFields = ['firstName', 'password'];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "You doesn't fill required field!";
    }

    if (values[field] && values[field].length < 5) {
      errors[field] = 'Your input must contain more than 5 symbols!';
    } else if (values[field] && values[field].trim().length < 5) {
      errors[field] = "You're trying to input spaces? Go Home!";
    }
  });

  return errors;
}
