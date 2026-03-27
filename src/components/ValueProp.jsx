import React from 'react';

const ValueProp = () => {
  return (
    <section className="bg-surface py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl z-20 relative">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYMUo577S-IbSR7A_WcXvUW7BvmI0ffT_rIJY_6rFdF_K3l8Kg73wVz_M6XiHVINPUPZuQHsUAzXiPPbZFrNH7Y8TqYzCU6_AmVKhkrshhlfRinBBzG9qkvaF6-nKKkZwGuAmtPzl5bW--3H7k74Eu4np4Qomo6dnNVpKSY02Krw9D_p_phkH0LjXrfMj-Wy_wSrSqFoB0JNk2OoYUTEOaLKSzkzXb8WSZH8VZUnIWzt3QRX9s6t1EAnUP10HWxUOUSN1BS5tNDol4" 
              alt="professional woman happily working"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-6 rounded-2xl shadow-xl border-l-4 border-tertiary z-30 max-w-xs">
            <p className="font-headline font-bold text-on-surface mb-2 italic">
              "I saved 2 hours of traffic every day using SahiRasta. Now I spend that time with my family."
            </p>
            <p className="text-sm text-on-surface-variant font-bold">— Anjali Sharma, Senior Engineer</p>
          </div>
          {/* Background texture */}
          <div className="absolute -top-12 -right-12 w-64 h-64 jali-pattern z-0 opacity-50"></div>
        </div>
        <div className="order-1 lg:order-2 space-y-8">
          <h2 className="font-headline font-bold text-4xl text-on-surface leading-tight">Beyond Distance: Real World Intelligence</h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Most platforms measure distance in straight lines. We measure in real-life minutes. SahiRasta calculates peak traffic patterns, metro frequency, and local bottlenecks to ensure that "5km away" doesn't mean "45 minutes in a car."
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <span className="material-symbols-outlined text-tertiary text-3xl">route</span>
              <h4 className="font-bold font-headline">Traffic Forecasting</h4>
              <p className="text-sm text-on-surface-variant">Know exactly how your commute looks at 9:00 AM vs 11:00 AM.</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="material-symbols-outlined text-tertiary text-3xl">train</span>
              <h4 className="font-bold font-headline">Public Transit Layer</h4>
              <p className="text-sm text-on-surface-variant">Live metro and bus station proximity analysis for every listing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
