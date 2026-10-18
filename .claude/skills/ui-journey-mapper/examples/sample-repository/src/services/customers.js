// Fictional in-memory data only. This file makes no network requests.
const customers = [
  { id: "c-101", name: "Ava Shah", email: "ava@example.test" },
  { id: "c-102", name: "Noah Reed", email: "noah@example.test" }
];

export function listCustomers() {
  return customers.map((customer) => ({ ...customer }));
}

export function getCustomer(id) {
  const customer = customers.find((candidate) => candidate.id === id);
  return customer ? { ...customer } : null;
}

export function updateCustomer(id, changes) {
  const index = customers.findIndex((candidate) => candidate.id === id);
  if (index < 0) return null;
  customers[index] = { ...customers[index], ...changes };
  return { ...customers[index] };
}
