import { EmployeeArray } from "../types";
import squareGuy from "../assets/images/square-guy.jpg";


const placeholderImage = "https://via.placeholder.com/150";

const employees: EmployeeArray = [
    {
      image: {url: squareGuy, alt: "placeholder"},
      name: "Ola Nordmann",
      position: "CEO",
    },
    {
      image: {url: placeholderImage, alt: "placeholder"},
      name: "Kari Nordmann",
      position: "CTO",
    },
    {
      image: {url: placeholderImage, alt: "placeholder"},
      name: "Per Hansen",
      position: "CFO",
    },
    {
      image: {url: placeholderImage, alt: "placeholder"},
      name: "Anne Larsen",
      position: "COO",
    },
    {
        image: {url: placeholderImage, alt: "placeholder"},
        name: "Ola Nordmann",
        position: "CEO",
      },
      {
        image: {url: placeholderImage, alt: "placeholder"},
        name: "Kari Nordmann",
        position: "CTO",
      },
      {
        image: {url: placeholderImage, alt: "placeholder"},
        name: "Per Hansen",
        position: "CFO",
      },
      {
        image: {url: placeholderImage, alt: "placeholder"},
        name: "Anne Larsen",
        position: "COO",
      },    
  ];

  export default employees;