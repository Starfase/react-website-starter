import { useState } from "react";
import { v4 as uuid } from "uuid";
import { client } from "../sanity/client";

import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";

function PrayerRequest() {
  const [loading, setLoading] = useState(false);

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
      alert("Please enter your prayer request.");
      return;
    }

    setLoading(true);

    try {
      await client.create({
        _id: uuid(),
        _type: "prayerRequest",
        ...form,
      });

      alert("Your prayer request has been submitted successfully.");

      setForm({
        name: "",
        phone: "",
        request: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <section className="bg-slate-50 py-24" id="prayer">
      <Container>
        <SectionTitle
          label="WE ARE PRAYING WITH YOU"
          title="Prayer Request"
          description="Whatever you are trusting God for, we'd love to stand in faith with you. Submit your prayer request below and our prayer team will pray with you."
        />

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
            <Button>
              {loading ? "Submitting..." : "Submit Prayer Request"}
            </Button>
          </div>
        </form>
      </Container>
    </section>
  );
}

export default PrayerRequest;
