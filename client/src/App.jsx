import { useState } from "react";
import backgroundImage from "./assets/backgroundimage.jpg"; // Import the background image
import FormPageOne from "./Pages/FormPageOne";
import FormPageTwo from "./Pages/FormPageTwo";
import SubmittedData from "./Pages/SubmittedData";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    regnumber: "",
    department: "",
    cgpa: "",
    dob: "",
    techstack: [],
    areaofinterest: "",
    resume: null,
  });

  const [page, setPage] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;

    if (name === "resume") {
      // If the input is a file input (for resume), store the file
      setFormData({ ...formData, [name]: files[0] });
    } else if (type === "checkbox") {
      const updatedTechStack = formData.techstack.includes(value)
        ? formData.techstack.filter((tech) => tech !== value)
        : [...formData.techstack, value];
      setFormData({ ...formData, techstack: updatedTechStack });
    } else if (name === "dob") {
      const today = new Date();
      const selectedDate = new Date(value);
      const ageDiff = today.getFullYear() - selectedDate.getFullYear();
      const monthDiff = today.getMonth() - selectedDate.getMonth();

      if (selectedDate > today) {
        alert("Please select a date in the past.");
        return;
      }

      if (ageDiff < 18 || (ageDiff === 18 && monthDiff < 0)) {
        alert("You must be at least 18 years old.");
        return;
      }

      setFormData({ ...formData, [name]: value });
    } else {
      // For other input types (text, radio, etc) updating the corresponding field

      setFormData({ ...formData, [name]: value });
    }
  };

  const handleNext = () => setPage(page + 1);
  const handleBack = () => setPage(page - 1);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate name length
    if (formData.name.length > 40 || formData.name.length < 2) {
      alert("Name should be between 2 and 40 characters.");
      return;
    }

    // Validate registration number length
    if (formData.regnumber.length !== 12) {
      alert("Registration number should be 12 digits");
      return;
    }
    alert("Form submitted successfully");
    setSubmitted(true);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-slate-300 p-8 rounded shadow-md w-full max-w-lg m-10">
        {submitted ? (
          <SubmittedData formData={formData} />
        ) : (
          <form onSubmit={handleSubmit}>
            {page === 1 && (
              <FormPageOne
                formData={formData}
                handleChange={handleChange}
                handleNext={handleNext}
              />
            )}
            {page === 2 && (
              <FormPageTwo
                formData={formData}
                handleChange={handleChange}
                handleBack={handleBack}
                handleSubmit={handleSubmit}
              />
            )}
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
