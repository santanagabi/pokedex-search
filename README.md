# Pokedex Search

Pokedex Search is a Vue.js project aimed at helping you learn Vuex by implementing various features. Below is a brief overview of what this project does and how it demonstrates the capabilities of Vuex.

## Project Features
1. **API Request:** This project makes an API call to retrieve data from the Pokemon API.

2. **Data Transformation:** It then maps and transforms the data from the API into a different structure suitable for your application.

3. **Data Storage:** The transformed data is saved in the Vuex store, which acts as a centralized state management system.

4. **Data Retrieval:** You can retrieve the stored data using a getter in a new component.

5. **Filtering:** The project allows you to apply filters, either through an input or a select, to narrow down the displayed data.

6. **Data Pagination:** The data is displayed in a paginated format, showing 10 elements per page.

7. **Data Deletion:** You can delete individual data elements from the displayed list.

8. **Reset Button:** If you delete data or make any changes, there's a reset button to restore the application to its initial state by fetching data from the API again.

9. **Sorting:** You can sort the data in various ways, although the details of how this is implemented are not provided here.

## Project Setup
To run this project on your local machine, follow these steps:

1. Clone the project from the repository.
2. Run `npm install` to install the necessary dependencies.
3. Run `npm run serve` to compile and hot-reload the project for development.
4. Use the project to explore and study Vuex concepts by interacting with the mentioned features.
