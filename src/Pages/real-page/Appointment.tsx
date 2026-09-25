import  { useState, } from "react";
import type { FormEvent, ChangeEvent} from "react";

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    department: "General Health",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    loading: boolean;
    success: string | null;
    error: string | null;
  }>({ loading: false, success: null, error: null });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus({ loading: false, success: "Appointment request sent!", error: null });
      setFormData({
        name: "",
        email: "",
        date: "",
        department: "General Health",
        phone: "",
        message: "",
      });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong.";
      setStatus({ loading: false, success: null, error: message });
    }
  };

  return (
    <section id="appointment" data-stellar-background-ratio="3">
      <div className="container">
        <div className="row">
          <div className="appointment-imgs col-md-6 col-sm-6">
            <img
              src="/images/appointment-image-1.jpeg"
              className="img-responsive appointment-img-1"
              alt="appointment-img-1"
            />
            <img
              src="/images/appointment-image-2.jpeg"
              className="img-responsive appointment-img-2"
              alt="appointment-img-2"
            />
          </div>

          <div className="col-md-6 col-sm-6">
            {/* CONTACT FORM HERE */}
            <form id="appointment-form" role="form" onSubmit={handleSubmit}>
              {/* SECTION TITLE */}
              <div className="section-title wow fadeInUp" data-wow-delay="0.4s">
                <h2>Make an appointment</h2>
              </div>
              <div className="wow fadeInUp" data-wow-delay="0.8s">
                <div className="col-md-6 col-sm-6">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 col-sm-6">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 col-sm-6">
                  <label htmlFor="date">Select Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="col-md-6 col-sm-6">
                  <label htmlFor="department">Select Department</label>
                  <select
                    id="department"
                    name="department"
                    className="form-control"
                    value={formData.department}
                    onChange={handleChange}
                  >
                    <option>Research & Health Data</option>
                    <option>Nutritional & public Health</option>
                    <option>Community Health</option>
                    <option>Administrative work</option>
                  </select>
                </div>

                <div className="col-md-12 col-sm-12">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <label htmlFor="message">Additional Message</label>
                  <textarea
                    className="form-control"
                    rows={5}
                    id="message"
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="form-control"
                    id="cf-submit"
                    name="submit"
                    disabled={status.loading}
                  >
                    {status.loading ? "Sending..." : "MAKE APPOINTMENT"}
                  </button>

                  {status.success && (
                    <p style={{ color: "green", marginTop: "10px" }}>
                      {status.success}
                    </p>
                  )}
                  {status.error && (
                    <p style={{ color: "red", marginTop: "10px" }}>
                      {status.error}
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}