import React, { useState } from "react";
import Navbar from './DashboardItems/Navibar';
import Sidebar from './DashboardItems/Sidebar';

//Import the relevant  content items
import DisplayDoctors from "./adminFiles/displayDoctors";
import DisplayNurses from "./adminFiles/displayNurses";
import DisplayWards from "./adminFiles/displayWards";

function Admin() {
    // This contains Admin sidebar navigation items. Sidebar is updated using local state
    // state format: Id, svg Image, Name
    const [navigationItems, setNavigationItems] = useState([
      [ 0,
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
        </svg>,
        "Doctors"
      ],   
      [ 1,
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>,
        "Nurses"
      ],
      [ 2,
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
           <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>,
        "Wards"
      ]
    ]);

    //To Identify which button is clicked.
    const [selectedItem, setSelectedItem] = useState(0);

    const handleSidebarItemClick = (value) => {
        setSelectedItem(value)
    };

    const [relatedComponent, setRelatedComponent] = useState([ <DisplayDoctors/>, <DisplayNurses/>, <DisplayWards/> ])
    return (
        <React.Fragment>
            <Navbar/>
            <Sidebar navigationItems={navigationItems} onItemClick={handleSidebarItemClick} />
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border rounded-lg dark:border-gray-700 mt-14">
                  {/* Content is changed when a navigation button is clicked */}
                  { relatedComponent[selectedItem] }
                </div>
            </div>
        </React.Fragment>
    );
}

export default Admin;