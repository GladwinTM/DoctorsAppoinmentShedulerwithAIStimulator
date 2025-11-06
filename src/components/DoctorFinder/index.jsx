import React, { useState } from "react";
import { Link } from "react-router-dom";
import { doctorsData } from "../data/doctorsData";


const DoctorFinder = () => {
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    fee: "",
    language: "",
  });

  const [activeFilters, setActiveFilters] = useState([]);

  const handleFilter = (type, value) => {
    setFilters((prev) => ({ ...prev, [type]: value }));
    setActiveFilters((prev) => {
      const updated = prev.filter((f) => f.type !== type);
      return [...updated, { type, value }];
    });
  };

  const removeFilter = (type) => {
    setFilters((prev) => ({ ...prev, [type]: "" }));
    setActiveFilters((prev) => prev.filter((f) => f.type !== type));
  };

  const filteredDoctors = doctorsData.filter((doctor) => {
    return (
      (!filters.category || doctor.category === filters.category) &&
      (!filters.gender || doctor.gender === filters.gender) &&
      (!filters.language || doctor.languages.includes(filters.language)) &&
      (!filters.fee ||
        (filters.fee === "0-500" ? doctor.fee <= 500 : doctor.fee > 500))
    );
  });

  return (
    <div id="doctors" className="min-h-screen bg-[#f9fafb] p-8">
      {/* Search Header */}
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Find Expert Doctors For An In-Clinic Session Here
      </h1>

      {/* Filters Section */}
      <div className="bg-white shadow-sm rounded-xl p-4 flex flex-wrap gap-3 justify-center mb-6">
        <select
          className="border border-gray-300 rounded-md px-3 py-2"
          onChange={(e) => handleFilter("category", e.target.value)}
        >
          <option value="">Expertise</option>
          <option value="Hair care">Hair care</option>
          <option value="Skin care">Skin care</option>
          <option value="Heart care">Heart care</option>
          <option value="Bone care">Bone care</option>
          <option value="Child care">Child care</option>
          <option value="Brain care">Brain care</option>
        </select>

        <select
          className="border border-gray-300 rounded-md px-3 py-2"
          onChange={(e) => handleFilter("gender", e.target.value)}
        >
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <select
          className="border border-gray-300 rounded-md px-3 py-2"
          onChange={(e) => handleFilter("fee", e.target.value)}
        >
          <option value="">Fees</option>
          <option value="0-500">₹0 - ₹500</option>
          <option value="500+">₹500+</option>
        </select>

        <select
          className="border border-gray-300 rounded-md px-3 py-2"
          onChange={(e) => handleFilter("language", e.target.value)}
        >
          <option value="">Languages</option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Marathi">Marathi</option>
        </select>
      </div>

      {/* Active Filter Chips */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {activeFilters.map((filter, index) => (
          <span
            key={index}
            className="bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm flex items-center gap-2"
          >
            {filter.value}
            <button
              onClick={() => removeFilter(filter.type)}
              className="font-bold text-green-600 hover:text-green-900"
            >
              ×
            </button>
          </span>
        ))}
      </div>

      {/* Doctor Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center px-6 py-10">
  {filteredDoctors.map((doctor) => (
    <div
      key={doctor.id}
      className="bg-amber-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center border border-gray-100"
    >
      {/* Profile Image */}
      <div className="relative">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
        />
        <span className="absolute bottom-0 right-0 bg-yellow-400 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow">
          ⭐ {doctor.rating}
        </span>
      </div>

      {/* Doctor Info */}
      <h3 className="text-xl font-semibold text-gray-800 mt-4">{doctor.name}</h3>
      <p className="text-sm text-gray-600 mt-1">{doctor.specialty}</p>
      <p className="text-sm text-gray-600">{doctor.experience} years of Experience</p>
      <p className="text-sm text-gray-600">Speaks: {doctor.languages.join(", ")}</p>

      {/* Fee Section */}
      <div className="flex flex-col sm:flex-row justify-between gap-2 w-full mt-4 text-sm">
        <p className="flex-1 border px-3 py-2 rounded-md bg-white shadow-sm font-medium text-gray-700">
          Video ₹{doctor.fee}
        </p>
        <p className="flex-1 border px-3 py-2 rounded-md bg-white shadow-sm font-medium text-gray-700">
          Chat Free
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-5 flex flex-col gap-3 w-full">
        <Link to={`/doctors/${doctor.id}`} className="rounded-full border border-gray-200 py-2 text-gray-700 font-medium hover:bg-gray-50 transition text-center shadow-sm">
          View Profile
        </Link>
        <button className="rounded-full bg-emerald-600 text-white py-2 font-semibold hover:bg-emerald-700 shadow-sm transition">
          Book Consultation
        </button>
      </div>
    </div>
  ))}
      </div>

    </div>
  );
};

export default DoctorFinder;
