let gridApi;

const gridOptions = {
  columnDefs: [
    { headerName: "Nom", field: "name", filter: 'agTextColumnFilter' },
    { headerName: "Position", field: "position", filter: 'agTextColumnFilter' },
    { headerName: "Bureau", field: "office", filter: 'agTextColumnFilter' },
    { headerName: "Âge", field: "age", filter: 'agNumberColumnFilter', sort: "desc", },
    { headerName: "Date de début", field: "startDate", filter: 'agDateColumnFilter' },
    { headerName: "Salaire", field: "salary", filter: 'agNumberColumnFilter' },
  ],
  rowData: jsonData,
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

const gridContainer = el("div", { id: "myGrid", style: "height: 500px;width: 1210px;", class: "ag-theme-alpine" })
mount(document.body, gridContainer);

var gridDiv = document.querySelector('#myGrid');
gridApi = agGrid.createGrid(gridDiv, gridOptions);

document.addEventListener('DOMContentLoaded', function () {
  gridApi
})