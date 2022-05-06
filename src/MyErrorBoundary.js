import React from "react";
function MyErrorBoundary() {
   const [error, setError] = React.useState(false);
   if (error){
      return <div>Error</div>
   }
   return false
}

export default MyErrorBoundary