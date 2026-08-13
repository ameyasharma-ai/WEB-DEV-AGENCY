import React from 'react';

const DashboardShowcase = () => {
  return (
    <section className="py-24 md:py-32 bg-gray-50 dark:bg-dark-2 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark dark:text-white tracking-tight mb-6">
            Data Analytics Showcase
          </h2>
          <p className="text-xl text-body-color dark:text-dark-6 font-medium">
            We build dashboards that look like they belong in a serious business. Clean visualizations, actionable insights, and 0 clutter.
          </p>
        </div>

        {/* Dashboard UI */}
        <div className="relative mx-auto max-w-5xl rounded-[2rem] bg-white dark:bg-dark border border-gray-200 dark:border-dark-3 shadow-2xl p-2 sm:p-4">
          
          <div className="absolute top-4 right-4 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
            Demo Data
          </div>

          <div className="rounded-[1.5rem] bg-gray-50 dark:bg-dark-2 overflow-hidden border border-gray-100 dark:border-dark-4">
            
            {/* Dashboard Header */}
            <div className="border-b border-gray-200 dark:border-dark-4 bg-white dark:bg-dark p-6 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-dark dark:text-white">Business Overview</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Last 30 Days Performance</p>
              </div>
              <div className="flex space-x-2">
                <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-dark-3 animate-pulse"></div>
                <div className="h-8 w-24 rounded-md bg-primary/10 text-primary flex items-center justify-center text-xs font-semibold">Export Report</div>
              </div>
            </div>

            {/* Dashboard Body */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* KPI Cards */}
              <div className="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Total Revenue", value: "$124,500", growth: "+14.5%" },
                  { label: "Active Leads", value: "842", growth: "+5.2%" },
                  { label: "Conversion Rate", value: "4.2%", growth: "-1.1%" },
                  { label: "Customer Acq. Cost", value: "$45", growth: "-12.5%" },
                ].map((kpi, idx) => (
                  <div key={idx} className="bg-white dark:bg-dark p-5 rounded-xl border border-gray-100 dark:border-dark-4 shadow-sm group hover:border-primary/50 transition-colors">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{kpi.label}</p>
                    <div className="flex items-end justify-between">
                      <h4 className="text-2xl font-bold text-dark dark:text-white group-hover:text-primary transition-colors">{kpi.value}</h4>
                      <span className={`text-xs font-semibold ${kpi.growth.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                        {kpi.growth}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Main Chart Area */}
              <div className="col-span-1 md:col-span-2 bg-white dark:bg-dark p-6 rounded-xl border border-gray-100 dark:border-dark-4 shadow-sm">
                <h4 className="text-base font-semibold text-dark dark:text-white mb-6">Revenue Growth</h4>
                <div className="h-48 w-full flex items-end justify-between space-x-2">
                  {/* Abstract bars */}
                  {[40, 55, 45, 70, 65, 85, 80, 100].map((h, i) => (
                    <div key={i} className="w-1/8 flex flex-col items-center group/bar w-full">
                       <div className="w-full bg-blue-100 dark:bg-blue-900/30 rounded-t-sm transition-all duration-300 group-hover/bar:bg-primary" style={{ height: `${h}%` }}></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Secondary Area */}
              <div className="col-span-1 md:col-span-1 bg-white dark:bg-dark p-6 rounded-xl border border-gray-100 dark:border-dark-4 shadow-sm">
                <h4 className="text-base font-semibold text-dark dark:text-white mb-6">Traffic Sources</h4>
                <div className="space-y-4">
                  {[
                    { name: "Organic Search", val: "45%" },
                    { name: "Direct", val: "30%" },
                    { name: "Social Media", val: "15%" },
                    { name: "Referral", val: "10%" },
                  ].map((src, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${['bg-blue-500', 'bg-purple-500', 'bg-emerald-500', 'bg-yellow-500'][i]}`}></div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{src.name}</span>
                      </div>
                      <span className="text-sm font-bold text-dark dark:text-white">{src.val}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DashboardShowcase;
