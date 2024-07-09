import React, { useState } from 'react';

const AddQuestions = ({ testId }) => {
  const [formData, setFormData] = useState({
    questionTitle: '',
    optionA: '',
    optionB: '',
    optionC: '',
    optionD: '',
    correctOption: '',
    score: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    console.log(formData);
    // Reset form after submission (optional)
    setFormData({
      questionTitle: '',
      optionA: '',
      optionB: '',
      optionC: '',
      optionD: '',
      correctOption: '',
      score: ''
    });
  };

  return (
    <div className="content mt-10" style={{ minHeight: 'auto' }}>
      <div className="row">
        <div className="col-md-12">
          <div className="card" style={{ minHeight: '400px' }}>
            <div className="card-header">
              <div className="row">
                <div className="col-md-4">
                  <h5 className="title text-center">Test Questions</h5>
                </div>
              </div>
            </div>
            <div className="card-body">
              <form id="add-question-form" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="questionTitle" className="block text-sm font-medium text-gray-700">
                    Question Title
                  </label>
                  <input
                    type="text"
                    id="questionTitle"
                    name="questionTitle"
                    value={formData.questionTitle}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="optionA" className="block text-sm font-medium text-gray-700">
                      Option (A)
                    </label>
                    <input
                      type="text"
                      id="optionA"
                      name="optionA"
                      value={formData.optionA}
                      onChange={handleChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="optionB" className="block text-sm font-medium text-gray-700">
                      Option (B)
                    </label>
                    <input
                      type="text"
                      id="optionB"
                      name="optionB"
                      value={formData.optionB}
                      onChange={handleChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="optionC" className="block text-sm font-medium text-gray-700">
                      Option (C)
                    </label>
                    <input
                      type="text"
                      id="optionC"
                      name="optionC"
                      value={formData.optionC}
                      onChange={handleChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="optionD" className="block text-sm font-medium text-gray-700">
                      Option (D)
                    </label>
                    <input
                      type="text"
                      id="optionD"
                      name="optionD"
                      value={formData.optionD}
                      onChange={handleChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="correctOption" className="block text-sm font-medium text-gray-700">
                      Correct Option
                    </label>
                    <input
                      type="text"
                      id="correctOption"
                      name="correctOption"
                      value={formData.correctOption}
                      onChange={handleChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="score" className="block text-sm font-medium text-gray-700">
                      Score
                    </label>
                    <input
                      type="text"
                      id="score"
                      name="score"
                      value={formData.score}
                      onChange={handleChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-4 bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
                >
                  Add Question
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuestions;
