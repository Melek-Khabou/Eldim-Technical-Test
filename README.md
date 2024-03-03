# Eldim-Technical-Test

## Team

| Email | Role |
|--|--|
| melek.khabou@icloud.com |Software Engineer |
| asprencinat@eldim.fr | Tech Lead |

## Technical Stack
| Tool | Version |
|--|--|
| python |3.10.11 |
| Django | 5.0.2 |
| ag-grid | 18.1.2 |
| Re:Dom| 4.0.0 |


## Installation guide
1. set up a virtual environment :
```bash
pip install virtualenv
```
2. Create a virtual environment:
```bash
python -m venv venv
```
3. Activate a virtual environment:

```bash
venv\scripts\activate
```
4. Installa Django:

```bash
pip install django
```
5. database synchronization with models:
```bash
python manage.py makemigrations
python manage.py migrate
```
6. Create users:

```bash
python manage.py createsuperuser
```
7. Load data:

```bash
python manage.py loaddata employees.json
```
## Time Sheet
| Task | Description|Branch|Time Spent|Reference|
|--|--|--|--|--|
| Step1 |Configure public/private Git repository ||5min||
| Step2 |Create an empty Django project with a needed structure. |[feature/create-django-project](https://github.com/Melek-Khabou/Eldim-Technical-Test/tree/feature/create-django-project)|30min|https://www.freecodecamp.org/news/models-in-django/|
| Step3|Load a table, users using ‘loaddata’ |[feature/load-data](https://github.com/Melek-Khabou/Eldim-Technical-Test/tree/feature/load-data)|30min|https://www.pythontutorial.net/django-tutorial/django-loaddata/|
| Step4|Use RE:DOM and AG Grid to display it to the user.|[feature/display-data](https://github.com/Melek-Khabou/Eldim-Technical-Test/tree/feature/display-data)|3hours|https://www.ag-grid.com/javascript-data-grid/getting-started/ <br> https://redom.js.org/#installation|
| Step5 |AG Grid: Load a table with a default ordering by Age Desc (after loading to AG Grid). Create a menu on the right (below ‘Filters’) that will store filter set objects (apply grouping+filtering+ordering and to save it). After clicking new created item - table should be updated according to filters applied. Store this object into the browser local storage. |[feature/add-ordering-filtering-and-grouping-to-ag-grid](https://github.com/Melek-Khabou/Eldim-Technical-Test/tree/feature/add-ordering-filtering-and-grouping-to-ag-grid)|2hours|https://www.ag-grid.com/javascript-data-grid/getting-started/|
| Step6|Make Name cells look like a button, clicking on which - salary will be 10% increased with a fading effect without storing to DB. |[feature/add-increasing-salary-option](https://github.com/Melek-Khabou/Eldim-Technical-Test/tree/feature/add-increasing-salary-option)|1hour||
| Step7|Make a refresh button inside AG Grid to re-load data from DB |[feature/add-refresh-button](https://github.com/Melek-Khabou/Eldim-Technical-Test/tree/feature/add-refresh-button)|1hour||
