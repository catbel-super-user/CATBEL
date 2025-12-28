const ProtectedRoute = ({ roles, children }) => {
    const user = useAuth();
  
    if (!user) return <Navigate to="/login" />;
    if (roles && !roles.includes(user.role)) return <Navigate to="/403" />;
  
    return children;
  };
  