import { StepProps } from "@/lib/types";
import React from "react";


// interface FirstStepProps {
//   formData: FormData;
//   errors: FormErrors;
//   updateForm: (field: keyof FormData, value: string | number) => void;
// }

const FirstStep: React.FC<StepProps> = ({formData, errors, updateForm}) => (
  <div className="space-y-6">
    <h2 className="text-xl font-semibold mb-4">Overall Satisfaction</h2>
    <div className="space-y-4">
      {['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied'].map((option) => (
        <button
          key={option}
          onClick={() => updateForm('satisfaction', option)}
          className={`w-full p-4 rounded-lg border-2 transition-all
            ${formData.satisfaction === option 
              ? 'border-blue-500 bg-blue-50' 
              : 'border-gray-200 hover:border-blue-200'}`}
        >
          {option}
        </button>
      ))}
    </div>
    {errors.satisfaction && (
      <p className="text-red-500 text-sm mt-2">{errors.satisfaction}</p>
    )}
  </div>
);

export default FirstStep;