import { StepProps } from "@/lib/types";
import React from "react";

const SecondStep: React.FC<StepProps> = ({formData, errors, updateForm}) => (
  <div className="space-y-6">
    <h2 className="text-xl font-semibold mb-4">Product Details</h2>
    
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Usability Rating</label>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((rating) => (
            <button
              key={rating}
              onClick={() => updateForm('usability', rating)}
              className={`w-12 h-12 rounded-lg border-2 transition-all
                ${formData.usability === rating 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:border-blue-200'}`}
            >
              {rating}
            </button>
          ))}
        </div>
        {errors.usability && (
          <p className="text-red-500 text-sm mt-1">{errors.usability}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Features Rating</label>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((rating) => (
            <button
              key={rating}
              onClick={() => updateForm('features', rating)}
              className={`w-12 h-12 rounded-lg border-2 transition-all
                ${formData.features === rating 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:border-blue-200'}`}
            >
              {rating}
            </button>
          ))}
        </div>
        {errors.features && (
          <p className="text-red-500 text-sm mt-1">{errors.features}</p>
        )}
      </div>
    </div>
  </div>
);

export default SecondStep;