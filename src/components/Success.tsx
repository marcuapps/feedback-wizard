import { Check } from "lucide-react";

const Success = () => (
  <div className="text-center py-8">
    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <Check className="text-green-500" size={32} />
    </div>
    <h2 className="text-xl font-semibold mb-2">Thank You!</h2>
    <p className="text-gray-600">Your feedback has been submitted successfully.</p>
  </div>
);

export default Success;