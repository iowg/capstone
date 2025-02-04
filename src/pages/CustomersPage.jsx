import "./CustomersPage.css";

function CustomersPage() {
  const testimonials = [
    { name: "William", rating: 5, details: "Great!" },
    { name: "George", rating: 4, details: "Good!" },
  ];

  return (
    <div className="customers-container">
      <h1>Our Happy Customers</h1>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-name">{testimonial.name}</p>
            <p className="testimonial-rating">{testimonial.rating} stars</p>
            <p className="testimonial-details">{testimonial.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomersPage;
