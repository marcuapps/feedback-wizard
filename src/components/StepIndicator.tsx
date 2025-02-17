import React from "react";
import { Check } from "lucide-react";

interface StepIndicatorProps {
  step: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({step}) => (
  <div className="flex items-center justify-center mb-8">
    {[1, 2, 3].map((number) => (
      <React.Fragment key={number}>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center
          ${step >= number ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
          {step > number ? <Check size={16} /> : number}
        </div>
        {number < 3 && (
          <div className={`w-12 h-1 ${step > number ? 'bg-blue-500' : 'bg-gray-200'}`} />
        )}
      </React.Fragment>
    ))}
  </div>
);

export default StepIndicator;