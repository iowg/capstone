function SpecialsPage() {
  const specials = [
    { title: "50% Off on All Items", description: "Enjoy a massive discount on all products in our store. Limited time offer!" },
    { title: "Buy One Get One Free", description: "Purchase any item and get another one absolutely free. Don't miss out!" },
    { title: "Free Shipping", description: "Get free shipping on all orders over $50. Shop now and save more!" }
  ];

  return (
    <div>
      {specials.map((special, index) => (
        <div key={index}>
          <h2>{special.title}</h2>
          <p>{special.description}</p>
        </div>
      ))}
    </div>
  );
}

export default SpecialsPage;
