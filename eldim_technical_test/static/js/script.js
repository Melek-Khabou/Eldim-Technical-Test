let gridApi;

const gridOptions = {
  columnDefs: [

    { headerName: "Nom", field: "name", filter: 'agTextColumnFilter', enableRowGroup: true },
    { headerName: "Position", field: "position", filter: 'agTextColumnFilter', enableRowGroup: true },
    { headerName: "Bureau", field: "office", filter: 'agTextColumnFilter', enableRowGroup: true },
    { headerName: "Âge", field: "age", filter: 'agNumberColumnFilter', sort: "desc", enableRowGroup: true },
    { headerName: "Date de début", field: "startDate", filter: 'agDateColumnFilter', enableRowGroup: true },
    { headerName: "Salaire", field: "salary", filter: 'agNumberColumnFilter', enableRowGroup: true },
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

