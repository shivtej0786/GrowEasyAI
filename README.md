# Manage Leads Dashboard

This is a “Manage Leads” dashboard page built with Next.js, React.js, Tailwind CSS, Axios, and Redux Toolkit.

## Tech Stack

*   **Framework:** Next.js (App Router)
*   **UI Library:** React.js
*   **Styling:** Tailwind CSS
*   **HTTP Client:** Axios
*   **State Management:** Redux Toolkit
*   **Language:** JavaScript (ES6+)



## Folder Structure

```
src/
  app/
    dashboard/
      page.jsx
    api/
      organizations/
        route.js
      leads/
        [id]/
          route.js
        route.js
    globals.css
    layout.js
    page.js
  components/
    sidebar/
      Sidebar.jsx
      SidebarItem.jsx
    leads/
      ActivityTimeline.jsx
      LeadDetailsDrawer.jsx
      LeadRow.jsx
      LeadsDashboard.jsx
      LeadsTable.jsx
      OrganizationSelector.jsx
      SearchInput.jsx
    ui/
      EmptyState.jsx
      LoadingSkeleton.jsx
      Topbar.jsx
  redux/
    store.js
    provider.jsx
    slices/
      organizationSlice.js
      leadsSlice.js
      selectedLeadSlice.js
  services/
    axios.js
    api.js
  hooks/
    useDebounce.js
  utils/
public/
  logo.svg
next.config.js
tailwind.config.js
package.json
README.md
