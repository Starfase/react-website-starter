import { useState } from "react";

import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";

function PrayerRequest() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    request: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.request.trim()) {
      setMessage({
        type: "error",
        text: "Please enter your prayer request.",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/prayer-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setMessage({
        type: "success",
        text: "✅ Your prayer request has been submitted successfully. Our prayer team will pray with you.",
      });

      setForm({
        name: "",
        phone: "",
        request: "",
      });
    } catch (error) {
      console.error(error);

      setMessage({
        type: "error",
        text: "❌ Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="prayer" className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          label="WE ARE PRAYING WITH YOU"
          title="Prayer Request"
          description="Whatever you are trusting God for, we'd love to stand in faith with you. Submit your prayer request below and our prayer team will pray with you."
        />

        {message && (
          <div
            className={`mx-auto mt-8 max-w-3xl rounded-xl px-6 py-4 text-center font-medium ${
              message.type === "success"
                ? "bg-green-100 text-green-800 border border-green-300"
                : "bg-red-100 text-red-700 border border-red-300"
            }`}
          >
            {message.text}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-16 max-w-3xl rounded-3xl bg-white p-8 shadow-xl"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Your Name (Optional)"
              value={form.name}
              onChange={handleChange}
              className="rounded-xl border p-4 outline-none focus:border-green-600"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number (Optional)"
              value={form.phone}
              onChange={handleChange}
              className="rounded-xl border p-4 outline-none focus:border-green-600"
            />
          </div>

          <textarea
            rows="7"
            name="request"
            placeholder="Write your prayer request..."
            value={form.request}
            onChange={handleChange}
            className="mt-6 w-full rounded-xl border p-4 outline-none focus:border-green-600"
          />

          <div className="mt-8">
            <Button disabled={loading}>
              {loading ? "Submitting..." : "Submit Prayer Request"}
            </Button>
          </div>
        </form>
      </Container>
    </section>
  );
}

export default PrayerRequest;
