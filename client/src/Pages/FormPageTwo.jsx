function FormPageTwo({ formData, handleChange, handleBack, handleSubmit }) {
  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-700">Area of Interest</label>
        <textarea
          name="areaofinterest"
          value={formData.areaofinterest}
          onChange={handleChange}
          className="w-full mt-2 p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Upload Resume</label>
        <input
          type="file"
          name="resume"
          onChange={handleChange}
          className="w-full mt-2 p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          className="w-1/3 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          type="submit"
          className="w-1/3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default FormPageTwo;
