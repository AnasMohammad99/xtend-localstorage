import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import AppDashboard from './components/Dashboard';
import BudgetApp from './components/BudgetApp';
export const AppRoute = {
  dashboard: `/dashboard`,
  budget:`/budget`
};
const AppRoutes = ({onDeleting, onEditing, budgetData}) => {

  return (

    <Routes>
      <Route
        path={AppRoute.dashboard}
        exact
        element={<AppDashboard />}
      />
      <Route
        path={AppRoute.budget}
        exact
        element={<BudgetApp onDeleting={onDeleting} onEditing={onEditing} budgetData={budgetData} />}
      />
      <Route
        path="*"
        element={<Navigate to={AppRoute.dashboard} replace />}
    />
    </Routes>
  )
}

export default AppRoutes