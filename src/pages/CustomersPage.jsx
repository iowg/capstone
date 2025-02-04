import "./CustomersPage.css";

function CustomersPage() {
  const testimonials = [
    { name: "Customer 1", rating: 5, image: "image1.jpg", details: "Great!" },
    { name: "Customer 2", rating: 4, image: "image2.jpg", details: "Good!" },
  ];

  return (
    <div className="customers-container">
      <h1>Our Happy Customers</h1>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
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
