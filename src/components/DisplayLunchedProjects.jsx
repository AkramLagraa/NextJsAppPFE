"use client"
import React, { useState, useEffect } from 'react';

const SearchLunchedProjects = () => {
  const [projectsData, setProjectsData] = useState([
    { id: 1, champ1: 'Sample Champ1', demandeAchat: 'Sample Demand', ods: 123, deadline: 7 },
    { id: 2, champ1: 'Another Champ1', demandeAchat: 'Another Demand', ods: 456, deadline: 14 },
    // Add more data as needed
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('champ1'); // Default search type
  const [searchResults, setSearchResults] = useState(projectsData);

  useEffect(() => {
    // Simulating fetching data from a database
    // You can remove this block if your actual data comes from a database
    // fetch('your_api_endpoint_here')
    //   .then(response => response.json())
    //   .then(data => setProjectsData(data))
    //   .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array ensures the effect runs only once

  useEffect(() => {
    // Update searchResults whenever searchTerm or searchType changes
    const filteredProjects = projectsData.filter((project) =>
      project[searchType].toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredProjects);
  }, [searchTerm, searchType, projectsData]);

  const deleteProject = (projectId) => {
    // Add your delete logic here
    const updatedProjects = projectsData.filter((project) => project.id !== projectId);
    setProjectsData(updatedProjects);
    alert(`Delete project with ID ${projectId}`);
  };

  const editProject = (projectId) => {
    // Add your edit logic here
    alert(`Edit project with ID ${projectId}`);
  };

  const handleDownload = (projectId) => {
    // Add logic to handle the download of "bon de commande" for the given project ID
    // For example, fetch the file from the server and trigger a download
    console.log(`Download Bon de Commande for project ID: ${projectId}`);
  };

  const handleSearch = () => {
    // Implement your search logic here (if needed)
  };

  return (
    <div style={{ margin: '20px', fontFamily: 'Roboto, sans-serif', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '20px', color: '#3498db', fontSize: '28px' }}>Lunched Projects</h2>
      <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by project details"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '10px', marginRight: '10px', borderRadius: '4px', border: '1px solid #bdc3c7' }}
        />
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #bdc3c7' }}
        >
          <option value="id">ID</option>
          <option value="champ1">Champ1</option>
          <option value="demandeAchat">Demande Achat</option>
          <option value="ods">ODS</option>
          <option value="deadline">Deadline</option>
        </select>
        <button
          style={{
            padding: '10px 15px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <table style={{ borderCollapse: 'collapse', width: '100%', margin: 'auto', backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden' }}>
        <thead>
          <tr>
            <th style={{ backgroundColor: '#3498db', color: 'white', padding: '15px', textAlign: 'left' }}>ID</th>
            <th style={{ backgroundColor: '#3498db', color: 'white', padding: '15px', textAlign: 'left' }}>Champ1</th>
            <th style={{ backgroundColor: '#3498db', color: 'white', padding: '15px', textAlign: 'left' }}>Demande Achat</th>
            <th style={{ backgroundColor: '#3498db', color: 'white', padding: '15px', textAlign: 'left' }}>ODS</th>
            <th style={{ backgroundColor: '#3498db', color: 'white', padding: '15px', textAlign: 'left' }}>Deadline</th>
            <th style={{ backgroundColor: '#3498db', color: 'white', padding: '15px', textAlign: 'left' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((project) => (
            <tr key={project.id} style={{ borderBottom: '1px solid #ddd', transition: 'background-color 0.3s' }}>
              <td style={{ border: '1px solid #ecf0f1', padding: '15px', textAlign: 'left' }}>{project.id}</td>
              <td style={{ border: '1px solid #ecf0f1', padding: '15px', textAlign: 'left' }}>{project.champ1}</td>
              <td style={{ border: '1px solid #ecf0f1', padding: '15px', textAlign: 'left' }}>{project.demandeAchat}</td>
              <td style={{ border: '1px solid #ecf0f1', padding: '15px', textAlign: 'left' }}>{project.ods}</td>
              <td style={{ border: '1px solid #ecf0f1', padding: '15px', textAlign: 'left' }}>{project.deadline}</td>
              <td style={{ border: '1px solid #ecf0f1', padding: '15px', textAlign: 'left' }}>
                <button
                  style={{
                    padding: '10px 15px',
                    backgroundColor: '#2ecc71',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginRight: '5px',
                  }}
                  onClick={() => handleDownload(project.id)}
                >
                  Download
                </button>
                <button
                  style={{
                    padding: '10px 15px',
                    backgroundColor: '#3498db',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginRight: '5px',
                  }}
                  onClick={() => editProject(project.id)}
                >
                  Edit
                </button>
                <button
                  style={{
                    padding: '10px 15px',
                    backgroundColor: '#e74c3c',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                  onClick={() => deleteProject(project.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchLunchedProjects;
