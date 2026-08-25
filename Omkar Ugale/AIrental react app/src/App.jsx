import Card from './card';
import './App.css';

function App() {
  const properties = [
    {
      id: 1,
      owner: "Kunal Patil",
      ownerImage: "https://i.pravatar.cc/150?img=12",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      title: "Comfortable PG for Students",
      type: "PG",
      location: "Pimpri, Pune",
      price: 7500,
      beds: 1,
      baths: 1,
      area: 450,
      rating: 4.6
    },

    {
      id: 2,
      owner: "Sneha Sharma",
      ownerImage: "https://i.pravatar.cc/150?img=47",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      title: "2 BHK Near College",
      type: "Flat",
      location: "Hinjewadi, Pune",
      price: 18000,
      beds: 2,
      baths: 2,
      area: 900,
      rating: 4.8
    },

    {
      id: 3,
      owner: "Suraj Joshi",
      ownerImage: "https://i.pravatar.cc/150?img=33",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      title: "Affordable Student PG",
      type: "PG",
      location: "Talegaon, Pune",
      price: 6500,
      beds: 1,
      baths: 1,
      area: 400,
      rating: 4.5
    }
    ,
    {
      id: 4,
      owner: "omkar ugale",
      ownerImage: "https://i.pravatar.cc/150?img=33",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      title: "Affordable Student PG",
      type: "flat",
      location: "Akurdi, Pune",
      price: 18000,
      beds: 5,
      baths: 2,
      area: 4000,
      rating: 4.7
    }
    ,
    {
      id: 5,
      owner: "Shubham Shinde",
      ownerImage: "https://i.pravatar.cc/150?img=33",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      title: "Affordable Student PG",
      type: "PG",
      location: "Chinchwad, Pune",
      price: 1800,
      beds: 5,
      baths: 2,
      area: 4000,
      rating: 4.3
    }
  ];

  return (
    <div className="app">

      <div className="container">

        <h1>Find Your Perfect Stay</h1>


        <p>
          Find affordable PGs and flats near your college.
        </p>


        <div className="property-grid">

          {properties.map((property) => (
            <Card
              key={property.id}
              property={property}
            />
          ))}

        </div>

      </div>

    </div>
  );
}

export default App;