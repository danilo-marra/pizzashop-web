import { Helmet } from 'react-helmet-async';

export function SignIn() {
  return (
    <>
      <Helmet key="signin-helmet" title="Login" />
      <h1>SignIn</h1>
    </>
  );
}
