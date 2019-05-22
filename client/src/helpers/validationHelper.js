function getError(value, fieldName){
  let regex;

  switch(fieldName) {
    case 'name':
      regex = /^[a-zA-Z_ ]+$/;
      if (value.match(regex)) {
        return '';
      } else if (value === ''){
        return '*Please enter the name';
      } else {
        return '*Please enter alphabet characters only';
      }

    case 'email':
      regex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
      if (value.match(regex)) {
        return '';
      } else if (value === ''){
        return '*Please enter the email';
      } else {
        return '*Please enter valid email-ID';
      }

    case 'about':
      if ( value === '' ) {
        return '*Please enter the description';
      } else {
        return '';
      }
  }}

  export default getError;
