import Table from "./Table";
import React from "react";
import  Badge  from "@mui/material/Badge";


export default function ResultTable() {
  return (
          <Table
            columns={[
              { name: "name", align: "left" },
              { name: "function", align: "left" },
              { name: "status", align: "center" },
              { name: "email", align: "center" },
              { name: "employed", align: "center" },
            ]}
            rows={[
              {
                name: ["https://bit.ly/3t5q4yQ", "John Micheal"],
                function: "Manager",
                status: (
                  <Badge
                    badgeContent="online"
                    color="info"
                  />
                ),
                email: "john@user.com",
                employed: "23/04/18",
              },
              {
                name: ["https://bit.ly/3F35Zvm", "Alexa Liras"],
                function: "Programator",
                status: (
                  <Badge
                    badgeContent="offline"
                    color="secondary"
                  />
                ),
                email: "alexa@user.com",
                employed: "11/01/19",
              },
              {
                name: ["https://bit.ly/3JL1rNU", "Laurent Perrier"],
                function: "Executive",
                status: (
                  <Badge
                    badgeContent="online"
                    color="info"
                  />
                ),
                email: "laurent@user.com",
                employed: "19/09/17",
              },
              {
                name: ["https://bit.ly/3F35Zvm", "Michael Levi"],
                function: "Backend Developer",
                status: (
                  <Badge
                    badgeContent="online"
                    color="info"
                  />
                ),
                email: "michael@user.com",
                employed: "24/12/08",
              },
              {
                name: ["https://bit.ly/3t5q4yQ", "Richard Gran"],
                function: "Manager",
                status: (
                  <Badge
                    badgeContent="offline"
                    color="secondary"
                  />
                ),
                email: "richard@user.com",
                employed: "04/10/21",
              },
              {
                name: ["https://bit.ly/3F35Zvm", "Miriam Eric"],
                function: "Programtor",
                status: (
                  <Badge
                    badgeContent="offline"
                    color="secondary"
                  />
                ),
                email: "miriam@user.com",
                employed: "14/09/20",
              },
            ]}
          />
  );
}
