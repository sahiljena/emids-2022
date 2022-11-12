const AddDiagnosis = ({ Symptoms, setSymptoms, Diagnosis, setDiagnosis }) => {
  return (
    <>
      <h1 className="text-2xl font-semibold">Set a Diagnosis and Symptoms</h1>
      <div className="mb-6 mt-10">
        <label
          htmlFor="default-input"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Symptoms
        </label>
        <input
          value={Symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          type="text"
          id="default-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="default-input"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Diagnosis
        </label>
        <input
          value={Diagnosis}
          onChange={(e) => setDiagnosis(e.target.value)}
          type="text"
          id="default-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        />
      </div>
    </>
  );
};

export default AddDiagnosis;
