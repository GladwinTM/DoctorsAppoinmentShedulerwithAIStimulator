import { useParams, Link } from "react-router-dom";
import { doctorsData } from "../data/doctorsData";

const DoctorProfile = () => {
  const { id } = useParams();
  const doctor = doctorsData.find((doc) => doc.id === parseInt(id));

  if (!doctor) {
    return <div className="text-center mt-10 text-gray-600">Doctor not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 border-b">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-32 h-32 rounded-full object-cover"
          />
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-800">{doctor.name}</h1>
            <p className="text-gray-600">{doctor.specialty}</p>
            <p className="text-yellow-500 font-semibold mt-1">
              ⭐ {doctor.rating} / 5.0
            </p>
            <p className="text-gray-500 mt-2">
              {doctor.experience} years experience • {doctor.gender}
            </p>
            <p className="text-gray-500 text-sm">
              Speaks: {doctor.languages.join(", ")}
            </p>
          </div>
          <button className="rounded-full bg-emerald-600 text-white px-6 py-2 hover:bg-emerald-700 shadow-sm transition">
            Book an Appointment
          </button>
        </div>

        {/* About & Booking */}
        <div className="grid md:grid-cols-3 gap-6 p-6">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-6">
            {/* About */}
            <div className="p-5 border rounded-xl">
              <h2 className="text-lg font-semibold mb-2 text-gray-800">
                A Little About Me
              </h2>
              <p className="text-gray-600 text-sm">
                Hello! I'm {doctor.name}, a {doctor.specialty} specialist with{" "}
                {doctor.experience}+ years of experience. I help patients with
                comprehensive treatment and guidance.
              </p>
            </div>

            {/* Specializations */}
            <div className="p-5 border rounded-xl">
              <h2 className="text-lg font-semibold mb-3 text-gray-800">
                I Specialize In
              </h2>
              <div className="flex flex-wrap gap-3">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  {doctor.category}
                </span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Hair Care
                </span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Skin Health
                </span>
              </div>
            </div>

            {/* Experience */}
            <div className="p-5 border rounded-xl">
              <h2 className="text-lg font-semibold mb-3 text-gray-800">
                My Work Experience
              </h2>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>🏥 Fortis Hospital — 2020–Present</li>
                <li>🏥 Apollo Medical Clinic — 2016–2020</li>
                <li>🎓 AIIMS Residency — 2013–2016</li>
              </ul>
            </div>

            {/* Reviews */}
            <div className="p-5 border rounded-xl">
              <h2 className="text-lg font-semibold mb-3 text-gray-800">
                Featured Reviews (102)
              </h2>
              <div className="space-y-4">
                {[1, 2].map((review) => (
                  <div
                    key={review}
                    className="bg-gray-50 p-3 rounded-lg border text-sm"
                  >
                    <p className="text-gray-700 font-semibold">
                      ⭐⭐⭐⭐⭐ &nbsp;Alice Hathaway
                    </p>
                    <p className="text-gray-600 mt-1">
                      Great doctor! Listened carefully and explained everything
                      clearly. Highly recommended!
                    </p>
                    <p className="text-gray-400 text-xs mt-1">20 January 2024</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Booking Panel) */}
          <div className="p-5 border rounded-xl space-y-5">
            <div>
              <h3 className="text-gray-800 font-semibold mb-2">
                Appointment Fee
              </h3>
              <p className="text-2xl font-bold text-green-700">
                ₹{doctor.fee}
              </p>
            </div>

            <div>
              <h3 className="text-gray-800 font-semibold mb-2">
                Select Mode of Session
              </h3>
              <div className="flex gap-3">
                <button className="border rounded-md px-3 py-1 text-sm hover:bg-green-50">
                  💬 Chat
                </button>
                <button className="border rounded-md px-3 py-1 text-sm hover:bg-green-50">
                  🎥 Video
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-gray-800 font-semibold mb-2">Pick a Slot</h3>
              <div className="flex flex-wrap gap-2">
                {["10:00 AM", "11:30 AM", "2:00 PM", "5:30 PM"].map((slot) => (
                  <button
                    key={slot}
                    className="border rounded-md px-3 py-1 text-sm hover:bg-green-50"
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <button className="rounded-full bg-emerald-600 text-white w-full py-2 hover:bg-emerald-700 shadow-sm transition">
              Make an Appointment
            </button>
            <Link
              to="/"
              className="block text-center text-gray-500 text-sm hover:underline"
            >
              ← Back to Doctors
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
