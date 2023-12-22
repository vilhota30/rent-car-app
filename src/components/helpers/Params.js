const setFilterParams = (itemsOnPage, currentPage, filter) => {
    let params = '';
    if (filter && filter.make) {
      params = params.concat(`&make=${filter.make}`);
    }
    params = params.concat(`&limit=${itemsOnPage}&page=${currentPage}`);
    return { params, filter };
  };
  
  export default setFilterParams;