import React, { useState, useRef } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from 'recharts';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

// Mock data for charts
const data = [
  { name: 'Jan', value: 400, uv: 400, pv: 2400, amt: 2400 },
  { name: 'Feb', value: 300, uv: 300, pv: 1398, amt: 2210 },
  { name: 'Mar', value: 200, uv: 200, pv: 9800, amt: 2290 },
  { name: 'Apr', value: 278, uv: 278, pv: 3908, amt: 2000 },
  { name: 'May', value: 189, uv: 189, pv: 4800, amt: 2181 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChartWidget = () => (
  <ResponsiveContainer width="100%" height={200}>
    <PieChart>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
);

const BarChartWidget = () => (
  <ResponsiveContainer width="100%" height={200}>
    <BarChart data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  </ResponsiveContainer>
);

const LineChartWidget = () => (
  <ResponsiveContainer width="100%" height={200}>
    <LineChart data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  </ResponsiveContainer>
);

const Widget = ({ title, children }) => (
  <div className="bg-white p-4 rounded-lg shadow-md border-2 border-blue-300 h-full overflow-hidden">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    {children}
  </div>
);

const WorkFootPrints = () => {
  const [footprints, setFootprints] = useState([
    { id: 1, image: '/api/placeholder/40/40', name: 'Task A', timestamp: '2024-10-15 10:00 AM' },
    { id: 2, image: '/api/placeholder/40/40', name: 'Task B', timestamp: '2024-10-15 11:00 AM' },
    { id: 3, image: '/api/placeholder/40/40', name: 'Task C', timestamp: '2024-10-15 12:00 PM' },
  ]);
  
  const fileInputRef = useRef(null);
  
  const [dragActive, setDragActive] = useState(false);

  const handleNameChange = (id, newName) => {
    setFootprints(footprints.map(fp => 
      fp.id === id ? { ...fp, name: newName } : fp
    ));
  };

  const handleFileUpload = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const newFootprint = JSON.parse(e.target.result);
          const timestamp = new Date().toLocaleString();
          const newEntry = {
            id: footprints.length + 1,
            image: '/api/placeholder/40/40',
            name: file.name.replace(/\.[^/.]+$/, ""),
            timestamp,
          };
          setFootprints([...footprints, newEntry]);
        } catch (error) {
          console.error('Error parsing JSON:', error);
          alert('Error loading file. Please ensure it\'s a valid JSON');
        }
      };
      reader.readAsText(file);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-blue-300 mb-4">
      <h3 className="text-lg font-semibold mb-4">Work FootPrints</h3>
      <table className="w-full mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Image</th>
            <th className="p-2">Name</th>
            <th className="p-2">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {footprints.map((footprint, index) => (
            <tr key={footprint.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="p-2">
                <img src={footprint.image} alt="Task" className="w-8 h-8 rounded-full" />
              </td>
              <td className="p-2">
                <input
                  type="text"
                  value={footprint.name}
                  onChange={(e) => handleNameChange(footprint.id, e.target.value)}
                  className="w-full p-1 border rounded"
                />
              </td>
              <td className="p-2">{footprint.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center space-x-4">
        <input
          type="file"
          ref={fileInputRef}
          onChange={(e) => handleFileUpload(e.target.files[0])}
          accept=".json"
          className="hidden"
        />
        <button
          onClick={() => fileInputRef.current.click()}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Upload Footprint
        </button>
        <div
          className={`border-2 border-dashed p-4 rounded ${
            dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          Drag & Drop JSON file here
        </div>
      </div>
    </div>
  );
};

const DashboardContent = () => {
  const [layouts, setLayouts] = useState({
    lg: [
      { i: 'workFootprints', x: 0, y: 0, w: 1, h: 1 },
      { i: 'pie', x: 1, y: 0, w: 1, h: 1 },
      { i: 'bar', x: 2, y: 0, w: 1, h: 1 },
      { i: 'line', x:3 , y :0 , w :1 , h :1 }
    ],
});

const onLayoutChange = (layout) => {
   setLayouts(layouts);
};

return (
<div>
   {/* Work Footprints now inside the grid layout */}
   <ResponsiveGridLayout
     className="layout"
     layouts={layouts}
     onLayoutChange={onLayoutChange}
     breakpoints={{ lg:1200 , md :996 , sm :768 , xs :480 , xxs :0 }}
     cols={{ lg :3 , md :3 , sm :2 , xs :1 , xxs :1 }}
     rowHeight={300}
   >
     {/* Work Footprints Widget */}
     <div key='workFootprints'>
       <Widget title='Work Footprints'>
         <WorkFootPrints />
       </Widget>
     </div>

     {/* Chart Widgets */}
     <div key='pie'>
       <Widget title='Pie Chart'>
         <PieChartWidget />
       </Widget>
     </div>

     <div key='bar'>
       <Widget title='Bar Chart'>
         <BarChartWidget />
       </Widget>
     </div>

     {/* Line Chart Widget */}
     <div key='line'>
       <Widget title='Line Chart'>
         <LineChartWidget />
       </Widget>
     </div>

   </ResponsiveGridLayout>

</div>

);
};

// Custom styles to enhance grid visibility
const CustomStyles = () => (
<style jsx global>{`
.react-grid-layout {
   background:#e2e8f0;
}
.react-grid-item {
   transition : all .2s ease;
   transition-property:left , top;
}
.react-grid-item.cssTransforms {
   transition-property : transform;
}
.react-grid-item.resizing {
   z-index :1;
   will-change : width , height;
}
.react-grid-item.react-draggable-dragging {
   transition:none;
   z-index :3;
   will-change : transform;
}
.react-grid-item.react-grid-placeholder {
   background:#1a202c;
   opacity:.2;
   transition-duration:.1s;
   z-index :2;
   border-radius:.5rem;
   user-select:none;
}
.react-grid-item:not(.react-grid-placeholder) {
   background:#cbd5e0;
   border-radius:.5rem;
}
.react-grid-item:hover {
   box-shadow :0 .5rem .5rem rgba(0 ,0 ,0 ,.15);
}
.widget-container {
   padding:.625rem;
   box-sizing:border-box;
}`}</style>);

const DashboardContentComponent = () => (
<>
<DashboardContent />
<CustomStyles />
</>);

export default DashboardContentComponent;