import React from 'react';
import { Download, Mail, MapPin, Phone, Linkedin, ArrowLeft } from 'lucide-react';

const CVView: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  const goBack = () => {
    window.location.href = window.location.pathname;
  };

  return (
    <div className="bg-white min-h-screen text-black p-4 md:p-12 font-serif">
      {/* Controls (Hidden when printing) */}
      <div className="fixed top-4 right-4 print:hidden z-50 flex gap-2">
        <button 
          onClick={goBack}
          className="flex items-center gap-2 bg-stone-800 text-white px-4 py-2 rounded shadow hover:bg-stone-700 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Site
        </button>
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded shadow hover:bg-emerald-700 transition-colors"
        >
          <Download size={16} /> Download / Print PDF
        </button>
      </div>

      <div className="max-w-[210mm] mx-auto bg-white p-8 md:p-12 shadow-none md:shadow-lg print:shadow-none print:p-0 mb-20 print:mb-0">
        {/* Header */}
        <header className="border-b-2 border-black pb-4 mb-6">
          <h1 className="text-4xl font-bold mb-3 uppercase tracking-wide text-gray-900">Mansoor Ahmed</h1>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm items-center text-gray-700">
            <div className="flex items-center gap-1">
              <Mail size={14} /> mansoor_07@hotmail.com
            </div>
            <div className="flex items-center gap-1">
              <Phone size={14} /> +358449862363
            </div>
            <div className="flex items-center gap-1">
              <Linkedin size={14} /> <a href="https://www.linkedin.com/in/mansoor-a-32962811/" className="hover:underline">LinkedIn</a>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={14} /> Bergen
            </div>
          </div>
        </header>

        {/* Profile */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-2 text-gray-900">Profile</h2>
          <p className="text-justify leading-relaxed text-sm">
            MSc in Economics & Business Administration student with diverse experience in multiple roles. Skilled in Excel, Python, Power BI & Decision Modeling, with strong communication and analytical problem solving skills. Eager to contribute to a team and drive organizational impact.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-4 text-gray-900">Work Experience</h2>
          
          <div className="space-y-5">
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <h3 className="font-bold text-gray-900">Quality and Lead <span className="font-normal block sm:inline sm:ml-1">- Valmet Automotive</span></h3>
                <span className="text-sm text-gray-600 whitespace-nowrap">January 2022 – April 2023 | Salo, Finland</span>
              </div>
              <ul className="list-disc list-inside space-y-0.5 text-sm text-gray-800">
                <li>Generated quality reports, identifying trends that contributed to increase in production efficiency by 5%.</li>
                <li>Implemented SAP to log inspections and manage claims, improving data accuracy by 20% and streamlining processes.</li>
                <li>Managed customer claims, achieving a 98% resolution rate within SLA, enhancing customer satisfaction.</li>
                <li>Collaborated with teams to implement improvements, reducing defects by 8% annually.</li>
                <li>Conducted quality inspections, reducing defect rates by 15%, ensuring compliance with automotive standards.</li>
                <li>Performed rework tasks, decreasing rework time by 10% through optimised procedures.</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <h3 className="font-bold text-gray-900">Independent Entrepreneur <span className="font-normal block sm:inline sm:ml-1">- Owner</span></h3>
                <span className="text-sm text-gray-600 whitespace-nowrap">September 2019 – January 2023 | Helsinki, Finland</span>
              </div>
              <ul className="list-disc list-inside space-y-0.5 text-sm text-gray-800">
                <li>Operated and managed all aspects of a private taxi service, including scheduling, dispatching, and driving.</li>
                <li>Delivered safe, punctual, and customer-focused transportation for individuals and corporate clients.</li>
                <li>Managed finances: fare collection, bookkeeping, and expense control.</li>
                <li>Promoted services through word-of-mouth, local advertising, and partnerships.</li>
                <li>Resolved customer concerns and operational challenges independently.</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <h3 className="font-bold text-gray-900">Export Officer <span className="font-normal block sm:inline sm:ml-1">- Pak Petrochemical Industries</span></h3>
                <span className="text-sm text-gray-600 whitespace-nowrap">January 2012 – November 2014 | Karachi, Pakistan</span>
              </div>
              <ul className="list-disc list-inside space-y-0.5 text-sm text-gray-800">
                <li>Processed export orders in ERP with accurate data entry and documentation.</li>
                <li>Prepared export documents (invoices, certificates) using Incoterms for compliance.</li>
                <li>Provided excellent customer service, resolving issues promptly and increasing exports by 13%.</li>
                <li>Built client relationships through communication and sales negotiations.</li>
                <li>Collaborated with teams to improve processes and drive business growth.</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <h3 className="font-bold text-gray-900">Marketing Officer <span className="font-normal block sm:inline sm:ml-1">- Sheraton Hotels & Resorts</span></h3>
                <span className="text-sm text-gray-600 whitespace-nowrap">January 2007 – December 2010 | Karachi, Pakistan</span>
              </div>
              <ul className="list-disc list-inside space-y-0.5 text-sm text-gray-800">
                <li>Spent time listening to customers and understanding needs, which helped growing revenue by 12%.</li>
                <li>Met and built relationships with over 150 new clients at events, leading to a 20% rise in loyalty program sign-ups.</li>
                <li>Created fun promotional campaigns for regulars, boosting engagement and adding an extra 10% to sales.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-4 text-gray-900">Education</h2>
          <div className="space-y-4">
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                <h3 className="font-bold text-gray-900">Norwegian School of Economics NHH</h3>
                <span className="text-sm text-gray-600">August 2025 – Present | Bergen, Norway</span>
              </div>
              <p className="italic text-sm text-gray-800">MSc in Economics and Business Administration</p>
              <p className="text-sm text-gray-800">Specialisation: Business Analytics</p>
              <p className="text-sm text-gray-800">Courses: Shipping Economics & Analytics, Python for Data Science</p>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                <h3 className="font-bold text-gray-900">Haaga-Helia University of Applied Sciences</h3>
                <span className="text-sm text-gray-600">January 2015 – March 2019 | Helsinki, Finland</span>
              </div>
              <p className="italic text-sm text-gray-800">Bachelor of Business Administration</p>
              <p className="text-sm text-gray-800">Specialisation: Sales and Marketing</p>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                <h3 className="font-bold text-gray-900">University of Karachi</h3>
                <span className="text-sm text-gray-600">January 2004 – December 2005 | Karachi, Pakistan</span>
              </div>
              <p className="italic text-sm text-gray-800">Bachelor of Commerce</p>
            </div>
          </div>
        </section>

        {/* Skills & Tools */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-4 text-gray-900">Skills & Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-2 text-sm text-gray-800">
             <span className="font-bold text-gray-900">Tools:</span>
             <span>MS Excel, ERP Softwares, SAP S/4HANA, Power BI, Google Colab, AMPL, VS Code, Python</span>
             
             <span className="font-bold text-gray-900">Skills:</span>
             <span>Decision Modeling, Customer Relationship Management (CRM), Supply Chain, Sales, Organizational Skills, Project Management, Reporting, Time Management, Documentation, Attention to detail.</span>
          </div>
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-4 text-gray-900">Languages</h2>
          <div className="flex flex-col sm:flex-row sm:gap-12 text-sm text-gray-800">
            <div><span className="font-bold text-gray-900">English</span> — Fluent</div>
            <div><span className="font-bold text-gray-900">Urdu</span> — Native/Bilingual</div>
            <div><span className="font-bold text-gray-900">Finnish</span> — Conversational</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CVView;