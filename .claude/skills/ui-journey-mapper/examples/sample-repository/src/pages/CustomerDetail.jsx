import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCustomer, updateCustomer } from "../services/customers.js";

export default function CustomerDetail() {
  const { customerId } = useParams();
  const [customer, setCustomer] = useState(null);
  const [draft, setDraft] = useState({ name: "", email: "" });
  const [editing, setEditing] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const found = getCustomer(customerId);
    setCustomer(found);
    if (found) setDraft({ name: found.name, email: found.email });
  }, [customerId]);

  if (!customer) {
    return (
      <main>
        <h1>Customer not found</h1>
        <Link to="/customers">Back to search</Link>
      </main>
    );
  }

  function startEditing() {
    setDraft({ name: customer.name, email: customer.email });
    setMessage("");
    setEditing(true);
  }

  function cancelEditing() {
    setDraft({ name: customer.name, email: customer.email });
    setEditing(false);
    setMessage("");
  }

  function saveChanges(event) {
    event.preventDefault();
    const updated = updateCustomer(customer.id, draft);
    setCustomer(updated);
    setEditing(false);
    setMessage("Changes saved (in-memory demo).");
  }

  return (
    <main>
      <Link to="/customers">Back to search</Link>
      <h1>Customer detail</h1>

      {!editing ? (
        <>
          <p>Name: {customer.name}</p>
          <p>Email: {customer.email}</p>
          <button type="button" onClick={startEditing}>Edit</button>
        </>
      ) : (
        <form onSubmit={saveChanges}>
          <label htmlFor="customer-name">Name</label>
          <input
            id="customer-name"
            value={draft.name}
            onChange={(event) => setDraft({ ...draft, name: event.target.value })}
            required
          />
          <label htmlFor="customer-email">Email</label>
          <input
            id="customer-email"
            type="email"
            value={draft.email}
            onChange={(event) => setDraft({ ...draft, email: event.target.value })}
            required
          />
          <button type="submit">Save changes</button>
          <button type="button" onClick={cancelEditing}>Cancel</button>
        </form>
      )}

      {message && <p role="status">{message}</p>}
    </main>
  );
}
