const Layout = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-3xl font-bold mb-6 border-b pb-2">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default Layout;
