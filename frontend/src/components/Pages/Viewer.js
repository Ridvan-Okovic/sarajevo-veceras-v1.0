const Auth = (props) => {
  const role = localStorage.getItem('role');

  if (role === 'viewer') {
    return props.children;
  } else {
    throw new Error('Could not find page');
  }
};

export default Auth;
