import { StepProps } from "@/lib/types";
import React from "react";

const ThirdStep: React.FC<StepProps> = ({formData, errors, updateForm}) => (
  <div className="space-y-6">
    <h2 className="text-xl font-semibold mb-4">Additional Feedback</h2>
    
    <div>
      <label className="block text-sm font-medium mb-2">
        What improvements would you suggest?
      </label>
      <textarea
        value={formData.improvements}
        onChange={(e) => updateForm('improvements', e.target.value)}
        className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Share your thoughts..."
      />
      {errors.improvements && (
        <p className="text-red-500 text-sm mt-1">{errors.improvements}</p>
      )}
    </div>

    <div>
      <label className="block text-sm font-medium mb-2">
        Your Email (for follow-up)
      </label>
      <input
        type="email"
        value={formData.email}
        onChange={(e) => updateForm('email', e.target.value)}
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="email@example.com"
      />
      {errors.email && (
        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
      )}
    </div>
  </div>
);

export default ThirdStep;