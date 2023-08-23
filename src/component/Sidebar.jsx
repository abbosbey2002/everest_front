import React from "react";

import {  NavLink }  from "react-router-dom";
import Register from "../page/Register";

function Sidebar() {
    return (
        <>
          <div className="main-sidebar sidebar-style-2">
      <aside id="sidebar-wrapper">
        <div className="sidebar-brand">
          <NavLink to="/">
          
            <img
              alt="image"
              src="assets/img/logo.png"
              className="header-logo"
            />{" "}
            <span className="logo-name">Otika</span>
          </NavLink>
        </div>
        <ul className="sidebar-menu">
          <li className="menu-header">Main</li>
          <li className="dropdown active">
            <NavLink to="index.html" className="nav-link">
              <i data-feather="monitor" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li className="dropdown">
            <NavLink to="/apply" className="nav-link">
              <i data-feather="monitor" />
              <span>Apply</span>
            </NavLink>
          </li>
          <li className="dropdown">
            <NavLink to="/student"  className="nav-link">
              <i data-feather="monitor" />
              <span>Students</span>
            </NavLink>
          </li>
          <li className="dropdown">
            <NavLink to="/course"  className="nav-link">
              <i data-feather="monitor" />
              <span>Courses</span>
            </NavLink>
          </li>
          <li className="dropdown">
            <NavLink to="/clients"  className="nav-link">
              <i data-feather="monitor" />
              <span>Clients</span>
            </NavLink>
          </li>
          <li className="dropdown">
            <NavLink to="/branches"  className="nav-link">
              <i data-feather="monitor" />
              <span>Branches</span>
            </NavLink>
          </li>
         
          <li className="dropdown">
            <NavLink to="#" className="menu-toggle nav-link has-dropdown">
              <i data-feather="command" />
              <span>Apps</span>
            </NavLink>
            <ul className="dropdown-menu">
              <li>
                <NavLink className="nav-link" to="chat.html">
                  Chat
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="portfolio.html">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="blog.html">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="calendar.html">
                  Calendar
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <NavLink to="#" className="menu-toggle nav-link has-dropdown">
              <i data-feather="mail" />
              <span>Email</span>
            </NavLink>
            <ul className="dropdown-menu">
              <li>
                <NavLink className="nav-link" to="email-inbox.html">
                  Inbox
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="email-compose.html">
                  Compose
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="email-read.html">
                  read
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="menu-header">UI Elements</li>
          <li className="dropdown">
            <NavLink to="#" className="menu-toggle nav-link has-dropdown">
              <i data-feather="copy" />
              <span>Basic Components</span>
            </NavLink>
            <ul className="dropdown-menu">
              <li>
                <NavLink className="nav-link" to="alert.html">
                  Alert
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="badge.html">
                  Badge
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="breadcrumb.html">
                  Breadcrumb
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="buttons.html">
                  Buttons
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="collapse.html">
                  Collapse
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="dropdown.html">
                  Dropdown
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="checkbox-and-radio.html">
                  Checkbox &amp; Radios
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="list-group.html">
                  List Group
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="media-object.html">
                  Media Object
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="navbar.html">
                  Navbar
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="pagination.html">
                  Pagination
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="popover.html">
                  Popover
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="progress.html">
                  Progress
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="tooltip.html">
                  Tooltip
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="flags.html">
                  Flag
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="typography.html">
                  Typography
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <NavLink to="#" className="menu-toggle nav-link has-dropdown">
              <i data-feather="shopping-bag" />
              <span>Advanced</span>
            </NavLink>
            <ul className="dropdown-menu">
              <li>
                <NavLink className="nav-link" to="avatar.html">
                  Avatar
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="card.html">
                  Card
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="modal.html">
                  Modal
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="sweet-alert.html">
                  Sweet Alert
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="toastr.html">
                  Toastr
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="empty-state.html">
                  Empty State
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="multiple-upload.html">
                  Multiple Upload
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="pricing.html">
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="tabs.html">
                  Tab
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink className="nav-link" to="blank.html">
              <i data-feather="file" />
              <span>Blank Page</span>
            </NavLink>
          </li>
          <li className="menu-header">Otika</li>
          <li className="dropdown">
            <NavLink to="#" className="menu-toggle nav-link has-dropdown">
              <i data-feather="layout" />
              <span>Forms</span>
            </NavLink>
            <ul className="dropdown-menu">
              <li>
                <NavLink className="nav-link" to="basic-form.html">
                  Basic Form
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="forms-advanced-form.html">
                  Advanced Form
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="forms-editor.html">
                  Editor
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="forms-validation.html">
                  Validation
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="form-wizard.html">
                  Form Wizard
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="dropdown">
            <NavLink to="#" className="menu-toggle nav-link has-dropdown">
              <i data-feather="layout" />
              <span>Course</span>
            </NavLink>
            <ul className="dropdown-menu">
              <li>
                <NavLink className="nav-link" to="/course">
                 Courses
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="forms-advanced-form.html">
                  Advanced Form
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="forms-editor.html">
                  Editor
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="forms-validation.html">
                  Validation
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="form-wizard.html">
                  Form Wizard
                </NavLink>
              </li>
            </ul>
          </li>
         
        </ul>
      </aside>
    </div>
        
        </>
    )
}

export default Sidebar;