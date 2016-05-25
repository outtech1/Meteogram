import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from '/client/mainLayout.jsx';
import Content from '/imports/ui/Content.jsx';
import Navbar from '/imports/ui/Navbar.jsx';
import Footer from '/imports/ui/Footer.jsx';
import UserProfiles from '/imports/ui/User.jsx';

FlowRouter.route("/", {
  name: 'Home',
  action () {
    mount(MainLayout, {
      navbar: <Navbar/>,
      content: <Content/>,
      footer: <Footer/>
    });
  }
});

FlowRouter.route("/update/:user", {
  name: 'Update',
  action (params) {
    mount(MainLayout, {
      navbar: <Navbar/>,
      content: <UserProfiles/>,
      footer: <Footer/>
    });
    console.log("Params:", params);
  }
});
