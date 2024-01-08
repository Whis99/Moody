import React from 'react';

const Sidebar = () => {

  return (
    <div className="flex bg-orange p-4 h-full">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
            <img
                src="https://placekitten.com/200/200"
                alt="Profile"
                className="w-full h-full object-cover"
            />
        </div>
        <hr className="w-full border-dark-blue mb-4" />
      </div>
        
    </div>
  );
};

export default Sidebar;