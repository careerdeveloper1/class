import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import './App.css';

export default function App() {
  return (
    <div className="container">
      <header>
        <h1>Vishal Technologies - HRMS V1</h1>
      </header>

      <main>
        <section className="form-section">
          <h2>Add New Employee</h2>
          <AddEmployee />
        </section>

        <section className="table-section">
          <h2>Employee Directory</h2>
          <EmployeeList />
        </section>
      </main>

      <footer>
        <p>© 2025 Vishal Technologies. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
