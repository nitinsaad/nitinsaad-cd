export const fetchBuildingsApis = (data) => {    
   return {
      type:"GET_BUILDINGS",
      payload:data
   }
  };

  export const fetchFiltersApis = (data) => {    
   return {
      type:"GET_FILTERS",
      payload:data
   }
  };