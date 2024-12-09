/** 
  All of the routes for the Material Kit 2 PRO React React are added here,
  You can add a new route, customize the routes and delete the routes here.
  Once you add a new route on this file it will be visible automatically on the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components

//@mui/material/Icon 대신 **@mui/icons-material**을 사용하여 Icon을 SVG 아이콘으로 바꾼 코드입니다. 이렇게 하면 Material Icons 폰트에 의존하지 않으므로 Next.js와 호환성이 더 좋아집니다.
//import Icon from "@mui/material/Icon"; 대신 아래 코드를 사용하세요.
import AssessmentIcon from "@mui/icons-material/Assessment";
import DashboardIcon from "@mui/icons-material/Dashboard";
//import ContactsIcon from "@mui/icons-material/Contacts";
import ArticleIcon from "@mui/icons-material/Article";

const routes : RouteItem[] = [
  {
    name: "compare results",
    icon: <AssessmentIcon/>,
    collapse: [
      {
        name: "My Results (private)",
        route: "/result/private",
      },
      {
        name: "Official Results (public)",
        route: "/result/public",
      },
    ],
  },
  {
    name: "Models & Datasets",
    icon: <DashboardIcon />,
    columns: 2,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Models",
        collapse: [
          {
            name: "resnet50",
            route: "/model/resnet50",
          },
          {
            name: "yolov5s",
            route: "/model/yolov5s",
          },
        ],
      },
      {
        name: "Datasets",
        collapse: [
          {
            name: "imageNet2012",
            route: "/dataset/imageNet2012",
          },
          {
            name: "coco2017",
            route: "/dataset/coco2017",
          },
        ],
      },
    ],
  },
  {
    name: "Get Started",
    icon: <ArticleIcon />,
    collapse: [
      {
        name: "Demo",
        description: "Benchmarking User Manual",
        route: "/demo",
      },
      {
        name: "BMT for Linux user",
        description: "Tested on Ubuntu(20.04, 22.04, 24.04)",
        href: "https://github.com/kinsingo/SNU_BMT_GUI_Submitter_Linux",
      },
      {
        name: "BMT for Windows user",
        description: "Tested on Window 10",
        href: "https://github.com/kinsingo/SNU_BMT_GUI_Submitter_Windows",
      },
    ],
  },
];

export default routes;