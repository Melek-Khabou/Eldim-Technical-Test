let gridApi;

const gridOptions = {
  columnDefs: [

    { headerName: "Name", field: "name", filter: 'agTextColumnFilter', enableRowGroup: true },
    { headerName: "Position", field: "position", filter: 'agTextColumnFilter', enableRowGroup: true },
    { headerName: "Office", field: "office", filter: 'agTextColumnFilter', enableRowGroup: true },
    { headerName: "Age", field: "age", filter: 'agNumberColumnFilter', sort: "desc", enableRowGroup: true },
    { headerName: "Start date", field: "startDate", filter: 'agDateColumnFilter', enableRowGroup: true },
    { headerName: "Salary", field: "salary", filter: 'agNumberColumnFilter', enableRowGroup: true },
  ],
  rowData: jsonData,
  sideBar: {
    toolPanels: [
      {
        id: 'columns',
        labelDefault: 'Columns',
        labelKey: 'columns',
        iconKey: 'columns',
        toolPanel: 'agColumnsToolPanel',
      },
      {
        id: 'filters',
        labelDefault: 'Filters',
        labelKey: 'filters',
        iconKey: 'filter',
        toolPanel: 'agFiltersToolPanel',
      }, {
        id: 'customStats',
        labelDefault: 'Save changes',
        labelKey: 'customStats',
        toolPanel: CustomStatsToolPanel,
        toolPanelParams: {
          title: 'Custom Stats',
        },
      },

    ],

  },
};

const { el, mount } = redom;
const pageTitle = el("title", "Eldim project");
mount(document.head, pageTitle);

const pageTitleLink = el("link", {
  rel: "icon",
  type: "image/x-icon",
  href: "https://www.marketscreener.com/static/private-issuer-squared-7DUVR.png",
});
mount(document.head, pageTitleLink);

const gridContainer = el("div", { id: "myGrid", style: "height: 500px;width: 1000px;", class: "ag-theme-alpine" })
mount(document.body, gridContainer);

var gridDiv = document.querySelector('#myGrid');
gridApi = agGrid.createGrid(gridDiv, gridOptions);

document.addEventListener('DOMContentLoaded', function () {
  gridApi
})
gridApi.applyColumnState({ state: JSON.parse(localStorage.getItem('state')) })
gridApi.setFilterModel(JSON.parse(localStorage.getItem('filters')));


function saveChanges() {
  localStorage.setItem('state', JSON.stringify(gridApi.getColumnState()))
  localStorage.setItem("filters", JSON.stringify(gridApi.getFilterModel()))
  window.alert('Changes are saved')

}

