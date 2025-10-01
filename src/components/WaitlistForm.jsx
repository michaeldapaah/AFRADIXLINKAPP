import { useState } from "react";

const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const TABLE_NAME = "Userstable";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [profession, setProfession] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${TABLE_NAME}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: {
              Name: name,
              Email: email,
              Country: country,
              Profession: profession,
            },
          }),
        }
      );

      if (res.ok) {
        setSuccess(true);
        setName("");
        setEmail("");
      } else {
        console.error("Error submitting to Airtable:", await res.json());
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      {success ? (
        <p className="text-green-600 font-semibold text-center">
          🎉 Thank you for joining the waitlist!
        </p>
      ) : (
        <>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="border p-2 rounded"
            required
          >
          <option value="">Select Country</option>
          <option value="Ghana">Ghana</option>
          <option value="Nigeria">Nigeria</option>
          <option value="Kenya">Kenya</option>
          <option value="South Africa">South Africa</option>
          <option value="UK">United Kingdom</option>
          <option value="USA">United States</option>
          <option value="Canada">Canada</option>
          <option value="Other">Other</option>
        </select>
          {/* Profession / Skill Dropdown */}
        <select
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          className="border p-2 rounded"
          required
        >
        <option value="">Select Profession / Skill</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Engineering">Engineering</option>
        <option value="Software Development">Software Development</option>
        <option value="Education">Education</option>
        <option value="Finance">Finance</option>
        <option value="Entrepreneurship">Entrepreneurship</option>
        <option value="Creative Arts">Creative Arts</option>
        <option value="Other">Other</option>
          </select>

          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded"
          >
            Join Waitlist
          </button>
        </>
      )}
    </form>
  );
}
