import React from 'react';
import Employerdata from '@/components/Employerdata';
import CreateProject from '../components/Createproject'
import DisplayCreatedProjects from './DisplayCreatedProjects';

function Searchcurrentcreatedprojects() {
  return (
    <div className="flex h-screen bg-blue-200">
      {/* Left part taking 1/3 of the parent width */}
      <div className="w-1/3 p-4 h-full">
        <Employerdata />
        <CreateProject />
      </div>

      {/* Right part taking the remaining space */}
      <div className="flex-1 p-4 bg-blue-200">
        {/* Your content here */}
        <DisplayCreatedProjects />
      </div>
    </div>
  );
}

export default Searchcurrentcreatedprojects;