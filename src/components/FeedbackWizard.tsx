'use client'

import React, { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { FormErrors, FormData } from '@/lib/types';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import Success from './Success';
import StepIndicator from './StepIndicator';


const FeedbackWizard = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    satisfaction: '',
    usability: '',
    features: '',
    improvements: '',
    email: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});

  const updateForm = (field: keyof FormData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when field is updated
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateStep = () => {
    const newErrors: FormErrors = {};
    
    if (step === 1 && !formData.satisfaction) {
      newErrors.satisfaction = 'Please select your satisfaction level';
    }
    
    if (step === 2) {
      if (!formData.usability) {
        newErrors.usability = 'Please rate the usability';
      }
      if (!formData.features) {
        newErrors.features = 'Please rate the features';
      }
    }
    
    if (step === 3) {
      if (!formData.improvements.trim()) {
        newErrors.improvements = 'Please provide improvement suggestions';
      }
      if (!formData.email.trim()) {
        newErrors.email = 'Please provide your email';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please provide a valid email';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(prev => Math.min(prev + 1, 3));
    }
  };

  const handlePrevious = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = () => {
    if (validateStep()) {
      console.log('Form submitted:', formData);
      // Show success message
      setStep(4);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      {step < 4 && <StepIndicator step={step} />}
      
      <div className="min-h-96">
        {step === 1 && <FirstStep formData={formData} errors={errors} updateForm={updateForm} />}
        {step === 2 && <SecondStep formData={formData} errors={errors} updateForm={updateForm} />}
        {step === 3 && <ThirdStep formData={formData} errors={errors} updateForm={updateForm} />}
        {step === 4 && <Success />}
      </div>

      {step < 4 && (
        <div className="flex justify-between mt-8">
          {step > 1 ? (
            <button
              onClick={handlePrevious}
              className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft className="mr-2" size={20} />
              Previous
            </button>
          ) : (
            <div></div>
          )}
          
          <button
            onClick={step === 3 ? handleSubmit : handleNext}
            className="flex items-center px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            {step === 3 ? 'Submit' : 'Next'}
            {step !== 3 && <ArrowRight className="ml-2" size={20} />}
          </button>
        </div>
      )}
    </div>
  );
};

export default FeedbackWizard;