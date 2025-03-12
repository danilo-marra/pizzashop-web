import { Helmet } from 'react-helmet-async';

export function Dashboard() {
  return (
    <>
      <Helmet key="dashboard-helmet" title="Dashboard" />
      <h1>Dashboard</h1>
    </>
  );
}
