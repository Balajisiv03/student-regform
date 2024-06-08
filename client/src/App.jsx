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
      // If the input is a checkbox, update the tech stack
      const updatedTechStack = formData.techstack.includes(value)
        ? formData.techstack.filter((tech) => tech !== value)
        : [...formData.techstack, value];
      setFormData({ ...formData, techstack: updatedTechStack });
    } else {
      // For other input types (text, radio, etc.), just update the corresponding field
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleNext = () => setPage(page + 1);
  const handleBack = () => setPage(page - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
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
        {!submitted ? (
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
        ) : (
          <SubmittedData formData={formData} />
        )}
      </div>
    </div>
  );
}

export default App;
