/* eslint-disable */
import React, { useState } from "react";
import "./App.scss";

import usersFromServer from "./api/users";
import categoriesFromServer from "./api/categories";
import productsFromServer from "./api/products";

const products = productsFromServer.map((product) => {
  const category = categoriesFromServer.find(
    (category) => category.id === product.categoryId
  );
  const user = usersFromServer.find((user) => user.id === category.ownerId);

  return {
    id: product.id,
    name: product.name,
    category: category.title,
    user: user.name,
  };
});

export const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [query, setQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState(
    categoriesFromServer.map((category) => category.title)
  );

  const filteredProducts = products
    .filter((product) =>
      selectedUser ? product.user === selectedUser.name : true
    )
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .filter((product) => {
      return selectedCategories.includes(product.category);
    });

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const clearInput = () => {
    setQuery("");
  };

  const handleResetAllFilters = () => {
    setSelectedUser(null);
    setQuery("");
    setSelectedCategories([]);
  };

  const handleCategoryClick = (category) => {
    const isCategorySelected = selectedCategories.includes(category);

    if (isCategorySelected) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <div className="block">
          <nav className="panel">
            <p className="panel-heading">Filters</p>

            <p className="panel-tabs has-text-weight-bold">
              <a
                data-cy="FilterAllUsers"
                href="#/"
                onClick={() => setSelectedUser(null)}
                className={setSelectedUser === null ? "is-active" : ""}
              >
                All
              </a>
              {usersFromServer.map((user) => (
                <a
                  key={user.id}
                  data-cy="FilterUser"
                  href="#/"
                  onClick={() => setSelectedUser(user)}
                  className={selectedUser === user ? "is-active" : ""}
                >
                  {user.name}
                </a>
              ))}
            </p>

            <div className="panel-block">
              <p className="control has-icons-left has-icons-right">
                <input
                  data-cy="SearchField"
                  type="text"
                  className="input"
                  placeholder="Search"
                  value={query}
                  onChange={handleInputChange}
                />

                <span className="icon is-left">
                  <i className="fas fa-search" aria-hidden="true" />
                </span>

                {query && (
                  <span className="icon is-right">
                    {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                    <button
                      data-cy="ClearButton"
                      type="button"
                      className="delete"
                      onClick={clearInput}
                    />
                  </span>
                )}
              </p>
            </div>

            <div className="panel-block is-flex-wrap-wrap">
              <a
                href="#/"
                data-cy="AllCategories"
                onClick={() => setSelectedCategories([])}
                className={`button ${
                  selectedCategories.length === 0 ? "" : "is-outlined"
                } is-success mr-6`}
              >
                All
              </a>
              {categoriesFromServer.map((category) => (
                <a
                  key={category.id}
                  data-cy="Category"
                  href="#/"
                  className={`button mr-2 my-1 ${
                    selectedCategories.includes(category.title) ? "is-info" : ""
                  }`}
                  onClick={() => handleCategoryClick(category.title)}
                >
                  {category.title}
                </a>
              ))}
            </div>

            <div className="panel-block">
              <a
                data-cy="ResetAllButton"
                href="#/"
                className="button is-link is-outlined is-fullwidth"
                onClick={handleResetAllFilters}
              >
                Reset all filters
              </a>
            </div>
          </nav>
        </div>

        <div className="box table-container">
          {filteredProducts.length === 0 ? (
            <p data-cy="NoMatchingMessage">No results</p>
          ) : null}

          <table
            data-cy="ProductTable"
            className="table is-striped is-narrow is-fullwidth"
          >
            <thead>
              <tr>
                <th>
                  <span className="is-flex is-flex-wrap-nowrap">
                    ID
                    <a href="#/">
                      <span className="icon">
                        <i data-cy="SortIcon" className="fas fa-sort" />
                      </span>
                    </a>
                  </span>
                </th>

                <th>
                  <span className="is-flex is-flex-wrap-nowrap">
                    Product
                    <a href="#/">
                      <span className="icon">
                        <i data-cy="SortIcon" className="fas fa-sort-down" />
                      </span>
                    </a>
                  </span>
                </th>

                <th>
                  <span className="is-flex is-flex-wrap-nowrap">
                    Category
                    <a href="#/">
                      <span className="icon">
                        <i data-cy="SortIcon" className="fas fa-sort-up" />
                      </span>
                    </a>
                  </span>
                </th>

                <th>
                  <span className="is-flex is-flex-wrap-nowrap">
                    User
                    <a href="#/">
                      <span className="icon">
                        <i data-cy="SortIcon" className="fas fa-sort" />
                      </span>
                    </a>
                  </span>
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id} data-cy="Product">
                  <td className="has-text-weight-bold" data-cy="ProductId">
                    {product.id}
                  </td>
                  <td data-cy="ProductName">{product.name}</td>
                  <td data-cy="ProductCategory">
                    {
                      categoriesFromServer.find(
                        (category) => category.title === product.category
                      ).icon
                    }{" "}
                    - {product.category}
                  </td>
                  <td
                    data-cy="ProductUser"
                    className={
                      usersFromServer.find((user) => user.name === product.user)
                        .sex === "m"
                        ? "has-text-link"
                        : "has-text-danger"
                    }
                  >
                    {product.user}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
