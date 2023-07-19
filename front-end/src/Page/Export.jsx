import React, { useState } from 'react';
import axios from 'axios';
import '../export.css';

export default function ExportPage() {
  const [loading, setLoading] = useState(false);

  const handleExport = async () => {
    try {
      setLoading(true);
      await axios.get('http://localhost:3001/messages/export');
    } catch (error) {
      console.error('Error to get conversations', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container'>
      <h1>Export Historic Conversations</h1>
      <button onClick={handleExport} disabled={loading}>
        {loading ? 'Exporting...' : 'Export Conversations'}
      </button>
    </div>
  );
};