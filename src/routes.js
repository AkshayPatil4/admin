/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import Icons from "views/BandSection.jsx";
import Map from "views/StudioSection.jsx";
import ArtistSection from "views/ArtistSection.jsx";
import EventSection from "views/EventSection.jsx";
import ProductSection from "views/ProductSection.jsx";
import OrderSection from "views/OrderSection.jsx";
import UserSection from "views/UserSection.jsx";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/BandSection",
    name: "Band Section",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/StudioSection",
    name: "Studio Section",
    rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    component: Map,
    layout: "/admin"
  },
  {
    path: "/ArtistSection",
    name: "Artist Section",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: ArtistSection,
    layout: "/admin"
  },
  {
    path: "/user-section",
    name: "User Section",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserSection,
    layout: "/admin"
  },
  {
    path: "/ProductSection",
    name: "Product Section",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: ProductSection,
    layout: "/admin"
  },
  {
    path: "/OrderSection",
    name: "OrderSection",
    
    icon: "tim-icons icon-align-center",
    component: OrderSection,
    layout: "/admin"
  },
  {
    path: "/EventSection",
    name: "Event Section",
   
    icon: "tim-icons icon-world",
    component: EventSection,
    layout: "/admin"
  }
];
export default routes;
