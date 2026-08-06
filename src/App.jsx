export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center">
        <h1 className="text-4xl font-bold text-blue-600">
          Clinic AI
        </h1>

        <p className="mt-4 text-gray-600">
          Welcome to your AI Clinic Website
        </p>

        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
          Book Appointment
        </button>
      </div>
    </div>
  );
}