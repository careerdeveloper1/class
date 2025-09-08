export const API_URL = import.meta.env.VITE_API_URL;

export async function fetchEmployees() {
  const res = await fetch(`${API_URL}/employees`);
  return await res.json();
}

export async function addEmployee(employee) {
  const res = await fetch(`${API_URL}/employees`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(employee)
  });
  return await res.json();
}
