function FormPageOne({ formData, handleChange, handleNext }) {
  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mt-2 p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">
          Student Registration Number
        </label>
        <input
          type="text"
          name="regnumber"
          value={formData.regnumber}
          onChange={handleChange}
          className="w-full mt-2 p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Department</label>
        <div className="flex flex-row justify-between mt-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="department"
              value="CS"
              onChange={handleChange}
              className="form-radio"
              required
            />
            <span className="ml-1">CSE</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="department"
              value="IT"
              onChange={handleChange}
              className="form-radio"
            />
            <span className="ml-1">IT</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="department"
              value="CSBS"
              onChange={handleChange}
              className="form-radio"
            />
            <span className="ml-1">CSBS</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="department"
              value="AIDS"
              onChange={handleChange}
              className="form-radio"
            />
            <span className="ml-1">AIDS</span>
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">CGPA</label>
        <input
          type="number"
          name="cgpa"
          value={formData.cgpa}
          onChange={handleChange}
          step="0.01"
          min="0"
          max="10"
          className="w-full mt-2 p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className="w-full mt-2 p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Tech Stack</label>
        <div className="flex flex-row flex-wrap mt-2">
          {[
            "Front End",
            "Back End",
            "Database Administrator",
            "Software Developer",
            "Software Tester",
            "Business Analyst",
            "Tech Support Engineer",
            "Data Engineer",
            "Data Scientist",
            "Kotlin Developer",
            "Android Developer",
          ].map((tech) => (
            <label key={tech} className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="techstack"
                value={tech}
                onChange={handleChange}
                className="form-checkbox"
              />
              <span className="ml-2">{tech}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          className="w-1/3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default FormPageOne;
