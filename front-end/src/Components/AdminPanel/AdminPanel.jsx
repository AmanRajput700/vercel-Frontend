import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';
import AdminForm from '../../Admin/AdminForm';
import EditRestaurants from '../../Admin/EditRestaurant';
import { FiMenu, FiLogOut, FiShoppingCart, FiList, FiPlusCircle, FiEdit3, FiTruck } from 'react-icons/fi';

export default function AdminPanel() {
  const { user, logout } = useContext(AuthContext);
  const [selected, setSelected] = useState('Track Your Orders');
  const [showSidebar, setShowSidebar] = useState(false);
  const [showConfirmLogout, setShowConfirmLogout] = useState(false);
  const navigate = useNavigate();

  const isAdmin = user?.role === 'admin';

  const menuItems = [
    { label: 'Track Your Orders', icon: <FiTruck /> },
    { label: 'Cart', icon: <FiShoppingCart /> },
    ...(isAdmin
      ? [
          { label: 'Orders', icon: <FiList /> },
          { label: 'Add Restaurant', icon: <FiPlusCircle /> },
          { label: 'Edit Restaurant', icon: <FiEdit3 /> },
        ]
      : []),
    { label: 'Logout', icon: <FiLogOut /> },
  ];

  const handleMenuClick = (item) => {
    if (item === 'Logout') {
      setShowConfirmLogout(true);
    } else {
      setSelected(item);
      setShowSidebar(false);
    }
  };

  const handleConfirmLogout = () => {
    logout();
    navigate('/');
    setShowConfirmLogout(false);
  };

  const handleCancelLogout = () => {
    setShowConfirmLogout(false);
  };

  const renderContent = () => {
    switch (selected) {
      case 'Track Your Orders':
        return <div className="text-gray-700 text-lg">Track Orders Content</div>;
      case 'Cart':
        return <div className="text-gray-700 text-lg">Cart Content</div>;
      case 'Orders':
        return <div className="text-gray-700 text-lg">All Orders Content (Admin Only)</div>;
      case 'Add Restaurant':
        return <AdminForm />;
      case 'Edit Restaurant':
        return <EditRestaurants />;
      default:
        return <div className="text-gray-700 text-lg">Welcome to Admin Panel</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 relative">
      {/* Mobile Toggle Button */}
      <button
        className="sm:hidden p-4 absolute top-0 left-0 z-20 text-gray-700"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <FiMenu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`bg-white shadow-lg border-r p-5 space-y-4 max-sm:w-56 w-64 
        ${showSidebar ? 'block' : 'hidden'} sm:block absolute sm:relative z-10 h-full`}
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          {isAdmin ? 'Admin Panel' : 'User Panel'}
        </h2>
        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleMenuClick(item.label)}
              className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                selected === item.label
                  ? 'bg-red-500 text-white shadow-md'
                  : 'text-gray-700 hover:bg-red-100'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">{renderContent()}</div>

      {/* Logout Confirmation Modal */}
      {showConfirmLogout && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-30">
          <div className="bg-white rounded-xl shadow-lg p-8 w-96">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Confirm Logout</h2>
            <p className="mb-6 text-gray-600">Are you sure you want to log out?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCancelLogout}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
