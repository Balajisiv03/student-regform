function SubmittedData({ formData }) {
  return (
    <div className="bg-slate-300 p-10 rounded w-full ml-6 ">
      <h1 className="text-2xl font-bold mb-6">Submitted Data</h1>
      <table className="min-w-full bg-white">
        <tbody>
          <tr>
            <td className="border px-4 py-2 font-bold">Name</td>
            <td className="border px-4 py-2">{formData.name}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-bold">Registration Number</td>
            <td className="border px-4 py-2">{formData.regnumber}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-bold">Department</td>
            <td className="border px-4 py-2">{formData.department}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-bold">CGPA</td>
            <td className="border px-4 py-2">{formData.cgpa}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-bold">Date of Birth</td>
            <td className="border px-4 py-2">{formData.dob}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-bold">Tech Stack</td>
            <td className="border px-4 py-2">
              {formData.techstack.join(", ")}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-bold">Area of Interest</td>
            <td className="border px-4 py-2">{formData.areaofinterest}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-bold">Resume</td>
            <td className="border px-4 py-2">
              {formData.resume ? formData.resume.name : "No file uploaded"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SubmittedData;
