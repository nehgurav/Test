import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { listCustomers } from "../services/customers.js";

export default function CustomerSearch() {
  const [queryInput, setQueryInput] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");

  const results = useMemo(() => {
    const normalized = submittedQuery.trim().toLowerCase();
    const customers = listCustomers();
    if (!normalized) return customers;
    return customers.filter((customer) =>
      customer.name.toLowerCase().includes(normalized) ||
      customer.email.toLowerCase().includes(normalized)
    );
  }, [submittedQuery]);

  function handleSearch(event) {
    event.preventDefault();
    setSubmittedQuery(queryInput);
  }

  return (
    <main>
      <h1>Customer search</h1>
      <form onSubmit={handleSearch}>
        <label htmlFor="customer-query">Name or email</label>
        <input
          id="customer-query"
          value={queryInput}
          onChange={(event) => setQueryInput(event.target.value)}
          placeholder="Search customers"
        />
        <button type="submit">Search</button>
      </form>

      {results.length > 0 ? (
        <ul aria-label="Customer results">
          {results.map((customer) => (
            <li key={customer.id}>
              <Link to={"/customers/" + customer.id}>
                {customer.name} — {customer.email}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p role="status">No customers found.</p>
      )}
    </main>
  );
}
