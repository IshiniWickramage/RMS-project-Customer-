const AppContent = ({ isExpanded }) => {
    return (
      <>
        <div
          className={`mb-5 ${
            isExpanded ? "breadcrumb-expanded" : "breadcrumb-collapsed"
          }`}
        >
          <Breadcrumb />
        </div>
        <Suspense fallback={loading}>
          <Routes>
            {routes.map((route, idx) => {
              return (
                route.element && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    element={<route.element />}
                  />
                )
              );
            })}
            <Route path="/" element={<Navigate to="dashboard" replace />} />
          </Routes>
        </Suspense>
      </>
    );
  };
  
  export default React.memo(AppContent);