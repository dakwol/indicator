import React from "react";
import HomePage from "../pages/HomePage/HomePage";
import ProjectPage from "../pages/ProjectPage/ProjectPage";
import ContactPage from "../pages/ContactPage/ContactPage";

const isAuthenticated = !!localStorage.getItem("access");

export interface IRoute {
    path: string;
    element : React.ComponentType;
    exact?: boolean;
    params?: { [key: string]: string | number };
}

export enum RouteNames {
    HOMEPAGE = '/',
    PROJECT = '/project',
    CONTACTS = '/contacts',
}

export const navDate = [
    {
      id: 1,
      name: "Контакты",
      link: RouteNames.CONTACTS,
    },
    {
      id: 2,
      name: "Вакансии",
      link: RouteNames.PROJECT,
    },
    
  ];

export const publicRoutes: IRoute[] = [
  {path: RouteNames.HOMEPAGE, exact: true, element: HomePage},
  {path: RouteNames.CONTACTS, exact: false, element: ContactPage},
  {path:`${RouteNames.PROJECT}/:id`, exact: false, element: ProjectPage, params: { id: ':id' }},
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.HOMEPAGE, exact: true, element: HomePage},
]